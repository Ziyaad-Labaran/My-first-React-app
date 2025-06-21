import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/public/New Project (2).png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header>
          <div className='logo'>ZIYAAD <span>.</span></div>
          <nav>
            <a href="app.jsx">Home</a>
          </nav>
          <button className='hire-me'> Hire Me </button>
        </header>

        <section className='main-content'>
          <div className='text'>
            <h1>Hi 👋</h1>
            <h2>I'm Ziyaad Labaran,</h2>
            <h4>a passionate Frontend Developer</h4>
            <p>currently studying Web Development at Design and Technology Institute. I am dedicated to creating user-centric websites and web applications that combine functionality with seamless user experience. With a strong foundation in modern web technologies, I strive to build solutions that are both visually appealing and highly responsive.</p>
            <br />
            <div className='butts'>
              <button className='contact'>Contact me</button>
              <button className='port' onClick={() => window.location.href = 'https://ziyaadlabaran.vercel.app/'}>Browse portfolio</button>
            </div>
          </div>
  <div className='profile'><img src="ziyaad.png" alt="Ziyaad's profile pic" title='profile pic' /></div>
        </section>
      </div>



    </>
  )
}

export default App
