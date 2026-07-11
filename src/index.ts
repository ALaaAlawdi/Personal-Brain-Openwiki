import chalk from 'chalk';

console.log(chalk.blue.bold('\n🚀 Welcome to Personal-Brain-Openwiki!\n'));

console.log('This project demonstrates how to build AI agents with proactive memory using DeepAgents and OpenWiki concepts.\n');

console.log(chalk.yellow('Available Commands:'));
console.log(chalk.cyan('1. Run the Code Reviewer Agent:'));
console.log('   npm run agent:code-reviewer\n');

console.log(chalk.cyan('2. Initialize your Personal Brain:'));
console.log('   npm run cli:brain -- init\n');

console.log(chalk.cyan('3. Simulate Data Ingestion (Gmail, X, Notion):'));
console.log('   npm run cli:ingest\n');

console.log(chalk.cyan('4. Ask your Personal Brain a question:'));
console.log('   npm run cli:brain -- query "What are my active projects?"\n');

console.log(chalk.gray('Make sure to configure your .env file before running the agents!'));
console.log('\n');
