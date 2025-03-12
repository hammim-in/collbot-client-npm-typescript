# @hammim-in/collbot-client

Collbot is an AI-driven chatbot solution that seamlessly integrates into your website via a simple package. Easily configure your chatbot with company-specific details, terms, and policies, enabling it to provide instant and accurate responses to customer queries. Enhance user engagement and automate customer interactions effortlessly with Collbot. 🚀

## Installation

Install the package using npm:

```sh
npm i @hammim-in/collbot-client
```

Or using yarn:

```sh
yarn i @hammim-in/collbot-client
```

## Usage

```javascript
"use client";
import CollBot from '@hammim-in/collbot-client';

function App() {
  return <CollBot AICHART_RECAPTCHA_FRONTED_KEY="6Ld4E98qAAAAA********co6T4iC27" YOUR_SITE_KEY="6Ld4E98qAA********o6T4iC27" />;
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
| `AICHART_RECAPTCHA_FRONTED_KEY` | `string` | Your recaptcha API AICHART_RECAPTCHA_FRONTED_KEY  |
| `YOUR_SITE_KEY`  | `string` | Your recaptcha  YOUR_SITE_KEY (upcoming) |
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

