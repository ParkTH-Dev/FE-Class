import ReactDOM from "react-dom/client";
import App1 from "./App1";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <ThemeProvider theme={darkTheme}>
      <App1 />
    </ThemeProvider>
  </>
);
