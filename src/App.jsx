import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { AiFillCrown } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Footer from './Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import JSZip from "jszip";
import modifyXMLContent from "./utils/xmlModifier";
import ReduxesPage from './ReduxesPage';
import PricePage from './PricePage';
import ShopPage from './ShopPage';
import ContactPage from './ContactPage';
import Cart from './Cart';
import { FaCartShopping } from "react-icons/fa6";

function App() {
  const [fileName, setFileName] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [cycleNames, setCycleNames] = useState([
    "EXTRASUNNY", "HALLOWEEN", "SNOWLIGHT", "BLIZZARD", "CLEARING",
    "OVERCAST", "NEUTRAL", "THUNDER", "CLOUDS", "CLEAR",
    "FOGGY", "SMOG", "SNOW", "XMAS"
  ]);
  const [selectedCycleNames, setSelectedCycleNames] = useState([]);
  const [randomNumber] = useState(generateRandomNumber());
  const [animatedNumber, setAnimatedNumber] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function generateRandomNumber() {
    return Math.floor(Math.random() * (150 - 130 + 1)) + 130;
  }

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < randomNumber) {
        current += 1;
        setAnimatedNumber(current);
      } else {
        clearInterval(interval);
      }
    }, 6);
    return () => clearInterval(interval);
  }, [randomNumber]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => setFileContent(e.target.result);
    reader.readAsText(file);
  };

  const handleDownload = async () => {
    if (!fileContent || selectedCycleNames.length === 0) return;
    const zip = new JSZip();
    selectedCycleNames.forEach((name) => {
      const modifiedXML = modifyXMLContent(fileContent, name);
      const updatedFileName = `w_${name.toLowerCase()}.xml`;
      zip.file(updatedFileName, modifiedXML);
    });
    const blob = await zip.generateAsync({ type: "blob" });
    const downloadUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = "panika_mods.zip";
    a.click();
  };

  const handleCheckboxChange = (name) => {
    setSelectedCycleNames((prev) => prev.includes(name)
      ? prev.filter((cycle) => cycle !== name)
      : [...prev, name]);
  };

  const handleSelectAll = () => {
    setSelectedCycleNames(
      selectedCycleNames.length === cycleNames.length ? [] : cycleNames
    );
  };

  const handleDeleteCycleName = (index) => {
    const newNames = [...cycleNames];
    newNames.splice(index, 1);
    setCycleNames(newNames);
    setSelectedCycleNames((prev) => prev.filter((_, i) => i !== index));
  };

  const closeModal = () => {
    setIsFadingOut(true);
    setTimeout(() => setIsModalOpen(false), 1000);
  };

  const PortfolioLink = () => {
    const location = useLocation();
    const isActive = location.pathname === '/reduxes';
    return isActive ? null : (
      <Link
        to="/reduxes"
        className={`text-black bg-white hover:text-white hover:bg-purple-500 rounded-3xl px-4 py-2 font-semibold text-lg transition duration-500 transform hover:scale-110 hover:shadow-xl flex items-center ${isActive ? 'bg-purple-500' : 'bg-gradient-to-r from-purple-600 to-purple-500'}`} >
        <AiFillCrown size={32} className="mr-2" />
        <span>Portfolio</span>
      </Link>
    );
  };

  const closeMenuOnLinkClick = () => setIsMenuOpen(false);

  return (
    <Router>
      {isModalOpen && (
        <div
          className={`fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-black to-purple-950/80 backdrop-blur-md z-50 transition-opacity duration-1000 ${isFadingOut ? "opacity-0" : "opacity-100"}`} onClick={closeModal}>
          <img src="../src/images/cttt.png" alt="Avatar" className="w-96 h-96 rounded-full mb-6 transition-transform duration-700 animate-pulse" />
        </div>
      )}
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-black to-purple-950 min-h-screen p-4 relative">


        <nav className="w-full p-4 flex items-center justify-between rounded-full font-italic  text-white relative">
          <div className="flex items-center space-x-6">
            <button
              className={`h-12 w-12 flex items-center justify-center text-white rounded-full transition duration-500 ease-in-out transform ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
            </button>
            <Link to="/" className="text-black bg-white hover:text-white hover:bg-purple-500 rounded-3xl px-4 py-1 font-semibold text-lg transition duration-300 transform hover:shadow-xl flex items-center">
              <span>Home</span>
            </Link>
            
          </div>

          <div className="flex items-center space-x-4 ml-auto">
            <Link
              to="/cart"
              className="flex items-center px-4 py-2  text-white rounded-lg hover:text-purple-300 transition duration-500 transform hover:scale-105">
              <FaCartShopping size={32} className="mr-2" />
            </Link>
          </div>
        </nav>

        {isMenuOpen && (
          <div
            className={`absolute top-24 left-14 bg-opacity-80 p-6 rounded-xl shadow-lg w-36 flex flex-col space-y-4 transition-transform duration-300 ease-in-out transform scale-100 opacity-100 
              ${isMenuOpen ? 'animate-slide-in' : 'animate-slide-out opacity-0 scale-75'}`}>
            <Link to="/shop" onClick={closeMenuOnLinkClick} className="text-white text-lg hover:text-purple-400 transition-transform duration-300 hover:scale-105">Shop</Link>
            <Link to="/reduxes" onClick={closeMenuOnLinkClick} className="text-white text-lg hover:text-purple-400 transition-transform duration-300 hover:scale-105">Portfolio</Link>
            <Link to="/price" onClick={closeMenuOnLinkClick} className="text-white text-lg hover:text-purple-400 transition-transform duration-300 hover:scale-105">Price List</Link>
            <Link to="/contact" onClick={closeMenuOnLinkClick} className="text-white text-lg hover:text-purple-400 transition-transform duration-300 hover:scale-105">Contact Us</Link>
            <a href="https://www.donationalerts.com/r/hxkaxgod" target="_blank" rel="noopener noreferrer" onClick={closeMenuOnLinkClick} className="text-white text-lg hover:text-emerald-400 transition-transform duration-300 hover:scale-105">Donate</a>
          </div>
        )}

        <Routes>
          <Route path="/" element={
            <div className="flex mt-8 w-full max-w-6xl font-mono">
              <div className="text-left flex-1">
                <h1 className="text-white text-4xl font-extrabold drop-shadow-lg">XML-File Modifier</h1>
                <h1 className="text-gray-200 text-2xl font-italic drop-shadow-lg  mt-6 animate-pulse">
                  Here you can upload a XML file containing your timecycle and modify it conveniently. This tool allows you to efficiently replace the `name` attribute across multiple files without manually editing each one. By automating the replacement process, you can save significant time and effort, especially when working with a large number of files.
                </h1>
                <h1 className="text-purple-300 text-2xl font-italic drop-shadow-lg mt-36">Upload your .xml file and fast make modifications without wasting time.</h1>
              </div>
              <div className={`bg-black bg-opacity-60 p-8 rounded-3xl w-full max-w-md mr-4 backdrop-blur-md border border-purple-500 ${selectedCycleNames.length === cycleNames.length ? 'shadow-2xl shadow-purple-900' : ''} transition-all duration-500 ease-in-out`}>
                <input type="file" accept=".xml" onChange={handleFileUpload} className="block font-mono shadow-purple-500 w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-3xl file:border-0 file:bg-purple-600 file:text-white hover:file:bg-purple-700 transition duration-300" />
                <div className="mt-6 mb-4 font-mono">
                  <h2 className="text-xl font-semibold text-white mb-2">Select Timecycle Names:</h2>
                  <div className="bg-white p-4 rounded-3xl shadow-md bg-opacity-5">
                    {cycleNames.map((name, index) => (
                      <div key={name} className="flex items-center mb-3">
                        <input type="checkbox" id={name} checked={selectedCycleNames.includes(name)} onChange={() => handleCheckboxChange(name)} className="mr-2 accent-purple-500" />
                        <label htmlFor={name} className="text-white text-lg">{name}</label>
                        <button className="ml-4 text-red-500 hover:text-red-700 text-sm" onClick={() => handleDeleteCycleName(index)}>Delete</button>
                      </div>
                    ))}
                    <button
                      className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-xl rounded-3xl 
                      transform transition-all duration-300 ease-in-out 
                      hover:scale-95 hover:from-purple-600 hover:to-purple-600 
                      focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-opacity-50"
                      onClick={handleSelectAll}>
                      {selectedCycleNames.length === cycleNames.length ? 'Unselect All' : 'Select All'}
                    </button>

                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <button onClick={handleDownload} disabled={!fileContent || selectedCycleNames.length === 0}
                    className="w-full font-mono mt-4 bg-green-600  focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50 text-white py-2 rounded-3xl font-semibold hover:bg-white hover:text-black transition duration-500 disabled:animate-pulse disabled:bg-gray-400">Download ZIP-File</button>
                  <div className="text-white">
                  </div>
                </div>
              </div>
            </div>
          } />

          <Route path="/reduxes" element={<ReduxesPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
