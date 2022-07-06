import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const renderComponent = () => {
    return (
      <>
        <Navbar />
        <div>LandingPage</div>
      </>
    );
  };

  return renderComponent();
}

export default App;
