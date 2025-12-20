# Cursor Commands

The `commands` folder contains custom [Cursor Commands](https://cursor.com/docs/agent/chat/commands) for this project. Cursor Commands allow you to create reusable AI prompts that can be invoked with a simple `@command-name` syntax in the Cursor chat.

## What are Cursor Commands?

Custom commands allow you to create reusable workflows that can be triggered with a simple / prefix in the chat input box. These commands help standardize processes across your team and make common tasks more efficient.

## Available Commands

- **organize-tailwind-classes** - Breaks up long Tailwind className strings into organized, readable groups with comments indicating the purpose of each group.
- **tailwind-downgrade** - Instructions for downgrading components from Tailwind CSS v4 to v3, including utility class renames and other migration details.

## Creating New Commands

To create a new command:

1. Add a new `.md` file in this directory
2. Write clear, detailed instructions for the task
3. The filename becomes the command name (e.g., `my-command.md` → `@my-command`)

Learn more in the [Cursor Commands documentation](https://cursor.com/docs/agent/chat/commands).
