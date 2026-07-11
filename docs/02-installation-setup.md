# Installation and Setup

OpenWiki is designed to be easily installed and used directly from the Command Line Interface (CLI).

## Prerequisites
- **Node.js**: Version 18 or newer.
- **npm**: Node.js package manager.
- **API Key**: For an LLM provider such as OpenAI, Anthropic, or OpenRouter.

## Installation

Install the tool globally on your machine using npm:

```bash
npm install -g openwiki
```

## Initial Setup (Onboarding)

When running the tool for the first time (whether for Code mode or Personal mode), an interactive interface will appear asking you to set up your LLM provider.

The tool supports several providers:
- `openai` (Defaults to `gpt-5.5`)
- `anthropic`
- `openrouter`
- `fireworks`
- `baseten`
- `openai-compatible` (For any OpenAI-compatible endpoint)
- `openai-chatgpt` (Uses a ChatGPT Plus subscription instead of a paid API key)

### Example: Initializing Code Mode

Navigate to your project folder and run:

```bash
openwiki code --init
```

The tool will ask for your provider, API key, and whether you want to enable LangSmith tracing. These settings are saved locally in the `~/.openwiki/.env` file.

### Using a ChatGPT Account (Without API Key)

If you have a ChatGPT subscription and want to use it instead of paying per token:

```bash
OPENWIKI_PROVIDER=openai-chatgpt openwiki code --init
```

The tool will open your browser to log into your account, then it will capture the Access Token and automatically refresh it.
