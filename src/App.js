import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage";

function App() {
  const renderComponent = () => {
    return (
      <>
        <Navbar />
        <LandingPage />
      </>
    );
  };

  return renderComponent();
}

export default App;
