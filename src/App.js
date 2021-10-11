import React from 'react'
import './App.css';
import NavBar from './Profile/Navbar.js';
import ControlledCarousel from './Profile/Carousel'
import Profile from './Profile/Profile';
import Web from './Profile/web.jpg'

function App() {
  const user={
    FullName:"zied",
    bio: "I'am a FreeLancer",
    profession:"Web Developer"
  }
const handleName=(name)=> alert(`Happy Day widh ${name}`);

  return (
    <div className="App">
      <NavBar/>
      <br/>
      <ControlledCarousel/>
      <br/>
      <Profile user={user} handleName={handleName}  > 
      <img src={Web} alt="web"/>
      </Profile>
    </div>
  );
}

export default App;
