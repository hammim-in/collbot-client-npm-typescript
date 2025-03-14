# @hammim-in/collbot-client

Collbot is an AI-driven collbot solution that seamlessly integrates into your website via a simple package. Easily configure your collbot with company-specific details, terms, and policies, enabling it to provide instant and accurate responses to customer queries. Enhance user engagement and automate customer interactions effortlessly with Collbot. 🚀

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
   return <CollBot theme={{ icon: "path of logo", primaryColor: "#0a4b33", secondaryColor: "" }}  />
}

export default CollBot;
```

## Features

- 🔥 **Fast and lightweight** collbot integration
- 🤖 Supports AI-based responses
- ⚡ Easy to set up and use
- 🛠 Configurable themes color

## Configuration

You can pass the following options when initializing the collbot:

| Option  | Type   | Description |
|---------|--------|-------------|
| `reCaptchaClientId` | `string` | Your recaptcha to protect reCaptchaClientId  |
| `icon`  | `string` | Your add your icon |
| `primaryColor` | `string` | change primary color of collbot-client |
| `secondaryColor` | `string` | change primary color of collbot-client |

Example:

```javascript
<CollBot theme={{ icon: "path of logo", primaryColor: "#0a4b33", secondaryColor: "" }} reCaptchaClientId="google key"/>
```

## Contribution

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

MIT License © 2025 https://wwww.hammim.in

