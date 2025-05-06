// This is the entry point of our React application.
// It's responsible for rendering our main App component into the DOM.
import { createRoot } from "react-dom/client"; // For rendering React to the browser
import App from "./App.jsx";
import "./index.css";

// Here's what this code does:
// 1. Find the HTML element with id="root" in our index.html
// 2. Create a React root inside that element
// 3. Render our <App /> component inside that root

// React.StrictMode is like a development helper that checks for common mistakes
createRoot(document.getElementById("root")).render(<App />);
