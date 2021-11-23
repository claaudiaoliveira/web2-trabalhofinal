import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from '../components/InfoSection/Data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection></HeroSection>
      <InfoSection {...homeObjTwo}></InfoSection>
      <InfoSection {...homeObjThree}></InfoSection>
      <InfoSection {...homeObjFour}></InfoSection>
      <InfoSection {...homeObjFive}></InfoSection>
    </>
  )
}

export default Home
