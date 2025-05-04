import { BrowserRouter } from "react-router-dom";

import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components';
import AchievementsSection from "./components/AchievementsSection";

const App = () => {
  return (
   <BrowserRouter>
   <div className="relative z-0 bg-primary overflow-x-hidden">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar/>
      <Hero/>
    </div>
    <About/>
    <Experience/>
    <Tech/>
    <AchievementsSection/>
    <Works/>
    <Feedbacks/>
    <div className="relative z-0">
      <Contact/>
      <StarsCanvas/>
    </div>
   </div>
   </BrowserRouter>
  )
}

export default App
