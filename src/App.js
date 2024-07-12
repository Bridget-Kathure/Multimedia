import Navbar from './Navbar';
import './App.css';
import LandingPage from './Landing-page';
import Podcast from './Podcast';
import VideoSection from './Video';
import BlogPage from './Blog';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <LandingPage/>
    <Podcast/>
    <VideoSection/>
    <BlogPage/>
    <Portfolio/>

    </div>
  );
}

export default App;
