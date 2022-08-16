import Header from "../src/components/header/Header";
import Home from "./pages/home/Home";
import Footer from "../src/components/footer/Footer";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
