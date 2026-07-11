# Connectors

Connectors are the method used by the **Personal Brain** mode in OpenWiki to fetch information from your external sources and build your personal memory.

## Currently Supported Connectors

- **Git Repositories (`git-repo`)**: Reads your local repositories and builds summaries of them.
- **X / Twitter (`x`)**: Fetches tweets, mentions, bookmarks, and list posts.
- **Notion (`notion`)**: Reads pages and workspaces in Notion (via an MCP server).
- **Gmail (`google`)**: Reads your latest emails.
- **Web Search (`web-search`)**: Performs web searches (requires `TAVILY_API_KEY`).
- **Hacker News (`hackernews`)**: Fetches the latest posts and tech news.

## How to Link Connectors

OpenWiki uses the `auth` command to link your accounts via the OAuth protocol.

To link an X (Twitter) account:
```bash
openwiki auth x
```

To link a Gmail account:
```bash
openwiki auth gmail
```

To link a Notion account:
```bash
openwiki auth notion
```

The tool will open your browser to complete the login process, then securely save the Tokens in the `~/.openwiki/.env` file.

## Ingestion

Once connectors are linked, you can request data ingestion from them:

To ingest data from all linked connectors:
```bash
openwiki ingest all
```

To ingest data from a specific connector (e.g., Web Search):
```bash
openwiki ingest web-search
```

The tool first fetches the raw data and saves it in `~/.openwiki/connectors/<connector>/raw/`, then the AI agent analyzes, summarizes, and places it in the final wiki at `~/.openwiki/wiki/`.
