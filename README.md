# Left-Pad-AI-Local

🚀 A futuristic JavaScript library for padding strings using AI, powered by the new `window.ai` feature introduced in Chrome 128.

## Introduction

`left-pad-ai-local` brings the classic left-padding functionality into the AI era! By leveraging Chrome's innovative `window.ai` API, this library not only pads strings but also ensures the padding makes semantic sense based on your context.

Whether you're working on text formatting, AI-driven text generation, or just need a sprinkle of futuristic flavor in your apps, this library has you covered.

## Installation

To start using `left-pad-ai-local`, install it via npm:

```bash
npm i left-pad-ai-local
```

## Features

- **AI-Powered Padding**: Uses `window.ai` to understand and provide context-aware padding.
- **Offline Friendly**: Works seamlessly with local AI models supported by Chrome 128.
- **Lightweight**: Built with efficiency in mind, no unnecessary dependencies.
- **Fully Customizable**: Define your padding characters, length, and even provide hints for AI-assisted padding.

## Requirements

- Chrome 128 or later (supports the `window.ai` API).
- A basic understanding of JavaScript.

## Usage

Here’s how you can get started:

### Basic Example

```javascript
import leftPad from 'left-pad-ai-local';

(async () => {
  const padded = await leftPad('hello', 10, ' ');
  console.log(padded); // Output: "     hello" or AI-augmented padding
})();
```

### Advanced Example

You can customize the padding character and even provide AI hints:

```javascript
import leftPad from 'left-pad-ai-local';

(async () => {
  const padded = await leftPad('world', 15, '-');
  console.log(padded); // Output: AI-enhanced padded string
})();
```

## API

### `leftPad(str, padding, char)`

- `str` (string): The input string to pad.
- `padding` (number): The total desired length of the output string.
- `char` (string): Character used for padding.

**Returns:** A `Promise` resolving to the padded string.

## Why AI for Padding?

In modern applications, context is everything. AI-enhanced padding can:
- Provide branding-consistent formatting.
- Automatically adjust padding for multilingual support.
- Add dynamic and meaningful visual elements to UI designs.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Acknowledgments

Thanks to the Chrome team for the `window.ai` API and the community for inspiring this AI-enhanced evolution of a classic utility.

---

Happy coding! ✨

