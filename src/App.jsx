import "./App.css";
import AppRouter from "./Routes/Routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PreventScreenshot from "./utils/PreventScreenshot";

function App() {
  return (
    <>
      <PreventScreenshot />
      <AppRouter />
      <ToastContainer />
    </>
  );
}

export default App;
