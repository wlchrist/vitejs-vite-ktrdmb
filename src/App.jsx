import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'; // Import Navbar component
import Banner from './Components/Banners/TopBanner'; // Import Banner component
import StatsBanner from './Components/Banners/StatsBanner'; // Import StatsBanner component
import LeaderboardBanner from './Components/Banners/LeaderboardBanner'; //Import LeaderboardBanner Component
import FooterContainer from './Components/Banners/FooterContainer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Banner />
      <StatsBanner />
      <LeaderboardBanner />
      <FooterContainer />
    </div>
  );
}

export default App;
