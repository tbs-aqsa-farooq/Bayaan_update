import "./App.css";
// import "./output.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/homee";
import Playlists from "./components/playlists";
import About from "./components/about";
import AppFooter from "./components/footer";
import SlidingIcon from "./components/SlidingIcon";
import MerchStore from "./components/merchStore";
import Cart from "./components/cart";
import Favorites from "./components/favorites";
// import ProfileForm from "./components/profile";
import Auth from "./auth";
import Contact from "./components/contact";
import { Toaster } from "react-hot-toast";
// import facebook from "./assets/icons/facebook.png";
// import spotify from "./assets/icons/spotify.png";
// import youtube from "./assets/icons/youtube.png";

function App() {
  return (
    <>
      <div className="body flex flex-column min-h-screen">
        <Toaster />
        <Navbar />
        <Contact />
        <Cart />
        <Favorites />
        {/* <ProfileForm /> */}
        <div className="main-content flex flex-col grow">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/merchStore" element={<MerchStore />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>

        <AppFooter />
      </div>
    </>
  );
}

export default App;
