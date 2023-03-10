import Footer from "./components/footer/Footer";
import TopBar from "./components/topBar/TopBar";
import "./index.css"
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";


function App() {
  return (
    <>
     <TopBar />
    <Write  />
    <Footer />
    </>
  );
}

export default App;
