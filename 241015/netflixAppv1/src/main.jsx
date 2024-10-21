import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
createRoot(document.getElementById("root")).render(
  // 02. provider와 store 추가
  <Provider store={store}>
    <App />
  </Provider>
);
