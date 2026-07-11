import * as fs from 'fs/promises';
import * as path from 'path';
import chalk from 'chalk';
import ora from 'ora';

/**
 * This is a mock script demonstrating how OpenWiki ingests data from connectors.
 * In a real scenario, this would use the Twitter API, Gmail API, etc.
 */
async function main() {
  console.log(chalk.blue.bold('\n📥 Starting Data Ingestion (Mock)...\n'));

  const wikiDir = path.join(process.cwd(), 'wiki-output');
  
  try {
    await fs.mkdir(wikiDir, { recursive: true });
  } catch (e) {
    // Directory might already exist
  }

  // Mock Data
  const mockSources = [
    {
      name: 'X (Twitter) Bookmarks',
      filename: 'x-bookmarks.md',
      content: '# X Bookmarks\n\n- Saved a thread about LangChain DeepAgents release.\n- Saved a post about Andrej Karpathy LLM Wiki concept.',
      delay: 1000
    },
    {
      name: 'Gmail (Important)',
      filename: 'gmail-summary.md',
      content: '# Important Emails\n\n- Client meeting scheduled for next Tuesday regarding the AI integration project.\n- GitHub notification: PR #42 merged successfully.',
      delay: 1500
    },
    {
      name: 'Notion Notes',
      filename: 'notion-projects.md',
      content: '# Active Projects\n\n## Project Alpha\n- Status: In Progress\n- Tech Stack: TypeScript, LangGraph, DeepAgents\n- Next Step: Implement proactive memory.',
      delay: 1200
    }
  ];

  for (const source of mockSources) {
    const spinner = ora(`Ingesting from ${source.name}...`).start();
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, source.delay));
    
    const filePath = path.join(wikiDir, source.filename);
    await fs.writeFile(filePath, source.content);
    
    spinner.succeed(`Successfully ingested and saved to ${source.filename}`);
  }

  console.log(chalk.green.bold('\n✅ All sources ingested successfully!'));
  console.log(chalk.gray('Your Personal Brain can now use these files as context.\n'));
}

main().catch(console.error);
