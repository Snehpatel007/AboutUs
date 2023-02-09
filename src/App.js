import Bg_1 from "./components/bg-1";
import Bg_2 from "./components/bg-2";
import Button from "./components/Button";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="App parent">
        <div className="child-1">
          <Bg_1 />
        </div>
        <div className="child-2">
          <Bg_2 />
          <Button />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

