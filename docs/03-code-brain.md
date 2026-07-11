# Code Brain

The **Code Brain** mode is dedicated to documenting code repositories. Its goal is to help AI agents (like Claude Code or Cursor) understand your project's structure quickly.

## How Does It Work?

1. **Scanning:** The agent scans all project files and understands the relationships between them (using DeepAgents tools).
2. **Generation:** It generates Markdown documents summarizing the architecture, APIs, workflows, and code guidelines.
3. **Saving:** It saves these documents in an `openwiki/` folder inside your project.
4. **Directing:** It updates or creates `AGENTS.md` or `CLAUDE.md` files in the project root, adding a directive for the agent to read the `openwiki/` folder before making any modifications.

## Usage

To initialize new documentation for your project:

```bash
cd my-project
openwiki code --init
```

To update the documentation after making code changes:

```bash
openwiki code --update
```

You can also run a non-interactive update (useful in CI/CD):

```bash
openwiki code --update --print
```

## Practical Benefit

Imagine you have a massive project with 5,000 files. When you ask the agent to "add support for Google login", instead of wasting time (and your tokens) searching for the authentication files, it will read `openwiki/Authentication.md` and immediately know that auth files are located in `src/auth/` and that the project uses `JWT`. This speeds up the work tremendously and reduces errors.
