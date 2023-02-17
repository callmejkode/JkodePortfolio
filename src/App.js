import React, { useRef, useState } from 'react';

import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from './components/Footer';
import FooterDialogue from './components/FooterDialogue';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MySkillNav from "./components/MySkillNav";
import ScrollButton from './components/ScrollButton';
import Testimonials from './components/Testimonials';

import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
    gtmId: 'G-WEQWK24R4R'
}

TagManager.initialize(tagManagerArgs)

function App() {
  const [theme, setTheme] = useState("light-theme");

 
  let scollToRef = useRef();
  let scrollToRef1 = useRef();
  let scrollToRef2 = useRef();
  let scrollToRef3 = useRef();
  
  return (
    <div className="App">
      <Header scrollToHeader={scrollToRef3} scroll={scollToRef} scrollToAbout={scrollToRef1} scrollToResume={scrollToRef2} setTheme={setTheme} theme={theme}/>
      <HeroSection/>
      <AboutMe scroll={scollToRef} scrollToAbout={scrollToRef1}/>
      <MySkillNav scrollToResume={scrollToRef2} theme={theme} setTheme={setTheme}/>
      <Testimonials/>
      <Contact scroll={scollToRef}/>
      <FooterDialogue scroll={scollToRef}/>
      <Footer scrollToHeader={scrollToRef3}/>
    <ScrollButton/>
    


    </div>
  );
}

export default App;
