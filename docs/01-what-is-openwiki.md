# What is OpenWiki?

**OpenWiki** is an open-source Command Line Interface (CLI) and AI agent developed by LangChain, launched in mid-2026. The tool aims to solve the "context" problem faced by AI coding agents when dealing with large projects or tasks requiring long-term memory.

## The Core Concept: LLM Wiki

The idea is inspired by a concept proposed by researcher Andrej Karpathy known as the "LLM Wiki". Simply put: instead of forcing an AI agent (like Claude Code or Cursor) to search through thousands of source code files to understand how a project works, we should provide it with a "Wiki" specifically designed for AI.

This Wiki contains summaries of architectures, APIs, workflows, and code guidelines. When the agent needs to modify something, it reads these summaries first, which saves time, reduces token consumption, and minimizes hallucinations.

## Main Modes in OpenWiki

The tool supports two primary modes of operation:

### 1. Code Brain
This is the original mode for which the tool was launched. It operates inside a Git repository. The agent scans all project files, understands the relationships between them, and generates Markdown documents explaining the project's structure and details. These documents are saved in an `openwiki/` folder within the repository.

### 2. Personal Brain
This is the newer mode (introduced in version 0.1.0). It aims to give the agent "Proactive Memory". Instead of focusing on code, this mode connects multiple sources (like Gmail emails, Notion notes, and X/Twitter posts) to create a general knowledge base saved on your local machine (`~/.openwiki/wiki`). This allows the agent to know your work context, current projects, and interests without you having to explain them in every conversation.

## Why Use OpenWiki?

* **Reduced Token Consumption:** The agent reads summaries instead of reading the entire source code.
* **Faster Understanding:** The agent gets an overview of the project in seconds.
* **Always Up-to-Date Documentation:** The tool can be automated to run daily and update documentation based on new changes (Git Diffs).
* **Multi-Agent Support:** The output files are standard Markdown files, meaning any AI agent can read and benefit from them.
