# @hammim-in/collbot-client

AI-powered CollBot package for fast and efficient conversational AI in React.ts applications.

## Installation

Install the package using npm:

```sh
npm npm i @hammim-in/collbot-client
```

Or using yarn:

```sh
yarn npm i @hammim-in/collbot-client
```

## Usage

```javascript
"use client";
import CollBot from 'ai-chatbotfast';

function App() {
  return <CollBot theme={{bgColor: "red"}}/>;
}

export default CollBot;
```

## Features

- 🔥 **Fast and lightweight** chatbot integration
- 🤖 Supports AI-based responses
- ⚡ Easy to set up and use
- 🛠 Configurable settings for different AI models

## Configuration

You can pass the following options when initializing the chatbot:

| Option  | Type   | Description |
|---------|--------|-------------|
| `apiKey` | `string` | Your API key for the AI model (upcoming) |
| `model`  | `string` | AI model to use (e.g., `gpt-3.5-turbo`) (upcoming) |
| `temperature` | `number` | Adjusts randomness in responses (default: `0.7`) |
| `bgColor` | `string` | set background color |
| `primaryColor` | `string` | change primary color of collbot-client |

Example:

```javascript
const bot = new collbot({
  apiKey: 'your-api-key',
  model: 'gpt-4',
  temperature: 0.9
});
```

## Contribution

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

MIT License © 2025 Hammim.in

