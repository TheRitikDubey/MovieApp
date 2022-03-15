import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Movies from "./Components/Movie";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Movies />
    </>
  );
}

export default App;
