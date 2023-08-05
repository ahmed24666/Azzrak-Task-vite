import './app.scss'
import Nav from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import Tabs from './Components/Tabs/Tabs';
import { useRef, useState } from 'react';
import Slidedown from './Components/Slidedown/Slidedown';
function App() {
  const [open, setopen] = useState(false)
  const aboutRef = useRef(null);
  return (
    <div className="app" >
      <Nav open={open} setopen={setopen} />
      <Hero aboutRef={aboutRef} />
      <Tabs aboutRef={aboutRef} />
      <Slidedown open={open} setopen={setopen} />
    </div>)
}

export default App
