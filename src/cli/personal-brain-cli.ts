import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import * as fs from 'fs/promises';
import * as path from 'path';
import { createDeepAgent } from 'deepagents';
import { ChatOpenAI } from '@langchain/openai';
import * as dotenv from 'dotenv';

dotenv.config();

const program = new Command();

program
  .name('personal-brain')
  .description('CLI to manage your Personal Brain Wiki using DeepAgents')
  .version('1.0.0');

/**
 * Command: Init
 * Initializes the Personal Brain workspace
 */
program
  .command('init')
  .description('Initialize your Personal Brain workspace')
  .action(async () => {
    console.log(chalk.blue.bold('\n🧠 Welcome to Personal Brain Initialization\n'));

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'focus',
        message: 'What should your brain focus on? (e.g., AI research, coding projects):',
        default: 'General knowledge and active projects',
      },
      {
        type: 'confirm',
        name: 'connectors',
        message: 'Do you want to setup connectors (Gmail, Notion, X) now?',
        default: false,
      }
    ]);

    const spinner = ora('Creating workspace...').start();
    
    try {
      const wikiDir = path.join(process.cwd(), 'wiki-output');
      await fs.mkdir(wikiDir, { recursive: true });
      
      const configPath = path.join(wikiDir, 'brain-config.json');
      await fs.writeFile(configPath, JSON.stringify({ focus: answers.focus }, null, 2));
      
      spinner.succeed(chalk.green('Workspace created at ./wiki-output'));
      
      if (answers.connectors) {
        console.log(chalk.yellow('\nTo setup connectors, please edit your .env file with your API keys.'));
      }
    } catch (error) {
      spinner.fail(chalk.red('Failed to create workspace'));
      console.error(error);
    }
  });

/**
 * Command: Query
 * Asks the Personal Brain a question using DeepAgents
 */
program
  .command('query')
  .description('Ask your Personal Brain a question')
  .argument('<question>', 'The question to ask')
  .action(async (question) => {
    const spinner = ora('Thinking...').start();
    
    try {
      // 1. Load Brain Config
      const configPath = path.join(process.cwd(), 'wiki-output', 'brain-config.json');
      let focus = "General Assistant";
      try {
        const config = JSON.parse(await fs.readFile(configPath, 'utf-8'));
        focus = config.focus;
      } catch (e) {
        // Ignore if not found
      }

      // 2. Initialize DeepAgent
      const model = new ChatOpenAI({
        modelName: process.env.OPENAI_MODEL || "gpt-4o-mini",
        temperature: 0.3,
      });

      // DeepAgents automatically includes file system tools (read_file, ls, grep)
      // This allows the agent to search the wiki-output directory by itself!
      const agent = await createDeepAgent({
        model: model,
        systemPrompt: `
You are a Personal Brain Assistant.
Your core focus is: ${focus}

You have access to the local file system. 
If the user asks about their notes, projects, or emails, use your filesystem tools (ls, grep, read_file) 
to search the './wiki-output' directory for relevant context before answering.
        `,
      });

      // 3. Invoke the Agent
      const result = await agent.invoke({
        messages: [{ role: "user", content: question }],
      });

      spinner.stop();
      
      const finalMessage = result.messages[result.messages.length - 1];
      console.log(chalk.cyan('\n🧠 Brain Response:'));
      console.log(finalMessage.content);
      console.log('\n');

    } catch (error) {
      spinner.fail(chalk.red('Error querying brain'));
      console.error(error);
    }
  });

program.parse(process.argv);
