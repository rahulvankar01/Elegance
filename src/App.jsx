import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from './component/Nav'
import Slider from './component/Slider'
import Parlex from './component/Parlex'
import Service from './component/Service'
import Call from './component/Call'
import Parlex1 from './component/Parlex1'
import Process from './component/Process'
import Portfolio from './component/Portfolio'
import Orl from './component/Orl'
import Team from './component/Team'
import Back6 from './component/Back6'
import Contact from './component/Contact'
import Google from './component/Google'
import Fotter from './component/Fotter'
import Last from './component/Last'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
      <Route path='home' Component={Slider}/>
      <Route path='ABOUT' Component={Parlex}/>
      <Route path='SERVICES' Component={Service}/>
      <Route path='PORTFOLIO' Component={Portfolio}/>
      <Route path='TEAM' Component={Team}/>
      <Route path='CONTACT' Component={Contact}/>
     

    </Routes>
    </BrowserRouter>
    
     
     {/* <Slider></Slider>
     <Parlex></Parlex>
     <Service></Service>
     <Call></Call>
     <Parlex1></Parlex1>
     <Process></Process>
     <Portfolio></Portfolio>
     <Orl></Orl>
     <Team></Team>
     <Back6></Back6>
     <Contact></Contact>
     <Google></Google>
     <Fotter></Fotter>
     <Last></Last> */}
        
    </>
  )
}

export default App
