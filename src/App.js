import { ScrollToTop } from "./components";
import Routers from "./routers/Routers";

// General Styles for App
import "./styles/App.css";

function App() {
  return (
    <ScrollToTop>
      <Routers />
    </ScrollToTop>
  );
}

export default App;
