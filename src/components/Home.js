import React from 'react'
import Lottie from 'lottie-react'
import Tilt from 'react-tilt'
import { Link } from 'react-router-dom'
import { Button } from 'bootstrap'
import personimg from '../assest/personimage.svg'
import bootstrap from '../assest/bootstrap.svg'
import node from '../assest/node.svg'
import html from '../assest/html.svg'
import javascript from '../assest/javascript.svg'
import workspaceAnimation from '../assest/animation_ln06ddrh.json'
import react from '../assest/react.svg'
import css from '../assest/css.svg'
import '../styles/Home.css'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home-main'>
      <Navbar/>
      <div className='container d-flex'>
       <div className='text-white pt-5 mt-5 home-body'>
        <button className='pushable'><span className='front'>Full Stack Developer</span></button>
        <h1 className='mt-3'>UKIWA HENRY OSOSE</h1>
        <p>Hello there, I'm Henry a developer, which basically means I turn caffeine into code and pizza into bug fixes. My superpower? Turning error messages into profanity without waking up my cat. So, if you need something to be magically transformed into a digital wonder or just want to discuss the latest meme trends, I'm your friendly neighborhood developer, here to save your day, one semicolon at a time!<span>(incase you've got any empty canvas laying around).</span> Let's connect!</p>
        <button className='contact'><Link to={'/'} className='text-decoration-none'><span className='front'>Contact Me</span></Link></button>
        <div className='d-flex gap-4 mt-5'>
            <img src={bootstrap} alt="" />
            <img src={node} alt="" />
            <img src={html} alt="" />
            <img src={javascript} alt="" />
            <img src={react} alt="" />
            <img src={css} alt="" />
        </div>
        <div className='mt-5'>
            <Footer/>
        </div>
        </div> 
       <div className='home-body-flexed d-none d-lg-block w-100'>
        <Lottie animationData={workspaceAnimation} className='w-100 animated-home-image'/>
       </div>
    </div>
    </div>
  )
}

export default Home
