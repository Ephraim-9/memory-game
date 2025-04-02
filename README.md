# Memory Game

## Description

The **Memory Game** is an interactive, fun, and challenging game built using **React**. It allows players to match pairs of images (GIFs) by clicking on them. The game tracks the score and resets when a match is found. It provides real-time feedback and includes functionality to check for high scores. This project demonstrates key concepts in React, state management, and handling user interactions.

## Skills Demonstrated

- React.js fundamentals (Components, State, and Effects)
- JSX and Component-Based Architecture
- Dynamic rendering and conditional rendering
- Handling user input and events in React
- Managing game logic and state updates

## Technologies Used

- React.js
- JavaScript (ES6+)
- CSS (for styling)
- Vite (for development and bundling)
- Giphy API (for dynamically fetching GIFs)
- Netlify (for deployment)

## Installation Instructions

To run the **Memory Game** locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Ephraim-9/memory-game.git
   ```
2. Navigate to the project directory:
   ```bash
   cd memory-game
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up your Giphy API key:
   - Create a `.env` file in the root directory of the project.
   - Add your Giphy API key to the file:
     ```
     VITE_GIPHY_API_KEY=your_giphy_api_key_here
     ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open the app in your browser (typically on `http://localhost:3000`).

## Usage

- The game will present a grid of GIFs that you can click on.
- Try to not click the same GIF twice.
- The game will track your score and reset the game once a GIF is clicked twice.
- Your high score will be saved and shown each time you play.

## Features

- **Dynamic GIFs**: GIFs are fetched from the Giphy API to provide variety.
- **Live Score Tracking**: Your score updates dynamically with each match.
- **High Score Tracking**: The highest score is stored and displayed after each round.
- **Responsive Design**: The game adapts to different screen sizes for an optimal mobile experience.

## Learning Outcomes

This project provided valuable hands-on experience in:

- Using **React’s `useState` and `useEffect`** for state management and side effects.
- Understanding **event handling** in React to manage user clicks.
- Working with **conditional rendering** to display different components based on game state.
- Fetching and displaying data from an **external API** (Giphy API) dynamically.
- Structuring React components and maintaining clean, reusable logic.

## Deployment

The **Memory Game** is deployed and accessible online:
[Live Demo](ephraim-9memory-game.netlify.app)

## Contributing

Contributions are welcome! If you want to improve the **Memory Game**, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request with a description of your changes.

## License

This project is licensed under the MIT License. You can find the license details in the `LICENSE` file in the repository.

## Contact Information

For any questions or support, feel free to reach out:

- Email: [ephraimhrm@gmail.com](mailto:ephraimhrm@gmail.com)

## Badges

![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

### **Key Improvements in This Version:**

- **Structure**: More detailed descriptions of the game's functionality and features.
- **Installation instructions**: Detailed steps for local setup and API key configuration.
- **Technologies Used**: A clear list of the tools used to build the project.
- **Learning Outcomes**: Highlights the core React concepts learned, which adds value for potential employers or collaborators.
- **Contributing section**: Clear steps for contributing to the project.
- **Deployment Link**: A section for the live demo link, so users can try the game.
