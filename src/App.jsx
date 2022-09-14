import MoveTo from "./components/MoveTo";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="w-full py-5 relative">
      <Navbar />
      <Homepage />
      <div className="fixed bottom-5 right-5">
        <MoveTo />
      </div>
    </div>
  );
}

export default App;
