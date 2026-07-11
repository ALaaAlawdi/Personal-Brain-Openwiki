# Personal Brain

The **Personal Brain** mode is dedicated to building "Proactive Memory" for your AI agent. Instead of focusing on code, this mode focuses on your daily work context.

## How Does It Work?

1. **Connecting:** You connect OpenWiki to your data sources (Connectors) like Gmail, Notion, X (Twitter), etc.
2. **Ingestion:** The agent reads these sources and extracts important information (like your current projects, research interests, important emails).
3. **Saving:** It saves this information as Markdown files on your local machine in the `~/.openwiki/wiki/` path.
4. **Usage:** Your AI agents can read this path to understand your context without you having to explain everything from scratch in every conversation.

## Usage

To initialize the Personal Brain for the first time:

```bash
openwiki personal --init
```

During initialization, the tool will ask you about the "Focus" you want for the memory. For example, you can tell it: "Focus on AI projects, client messages, and saved technical links."

To manually update the Personal Brain from connected sources:

```bash
openwiki --update "Refresh the wiki from configured connectors"
```

## Automatic Updates

On macOS systems, OpenWiki can install schedules as LaunchAgents in the `~/Library/LaunchAgents/` path to update the personal memory in the background periodically, ensuring your agent always has the latest information.
