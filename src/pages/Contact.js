import React from 'react'
import Lottie from 'lottie-react'
import working from '../assest/animation_ln0q95xh.json'
import { Link } from 'react-router-dom'
import Footer from '../layouts/Footer'
import '../styles/Contacts.css'

const Contact = () => {
  return (
    <div className=' text-white d-flex project-main w-100 contact-body'>
        <div className="w-100 container d-none d-lg-block">
        <header className="mt-4">
          <Link to={"/"} className="text-decoration-none">
            <h1 className="header-name mb-4">HENRY.</h1>
          </Link>
        </header>
        <button className="fullstack-button mb-4">Full Stack Developer</button>
        <div className="mb-4">
          <h1>Ukiwa Henry Osose</h1>
          <p>
            Meet Baby Henry, the newest coding sensation at just 7 months old!
            Baby Henry writes code with a rattle in one hand and Googoo Gaga
            keyboard shortcuts in the other. Debugging? They think it's a game
            of hide-and-seek with the bugs. Full stack? More like full-stack of
            building blocks! Baby Henry: coding, crawling, and conquering one
            baby step at a time!
          </p>
        </div>
        <div className="d-flex mt-4 gap-4">
          <div className="">
            <Link to={"/Projects"} className="text-decoration-none">
              <li className="pb-4 list-unstyled text-white">01 -- Projects</li>
            </Link>
            <Link to={"/Downloads"} className="text-decoration-none text-white">
              <li className="pb-4 list-unstyled">02 -- Download Resume</li>
            </Link>
            <Link to={"/Contacts"} className="text-decoration-none text-white">
              <li className=" list-unstyled active">03 -- Contact</li>
            </Link>
          </div>
          <div className="w-100">
            <Lottie
              animationData={working}
              className="lottie-animated-images"
            />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
      <div className=' w-100 input-body'>
       <div className='container'>
       <div className='mt-4 mb-4'>
          <h1>Send A Message</h1>
        </div>
        <form action="">
          <input type="text" className='input-from mt-2' placeholder='From:'/> <br /><br />
          <input type="text" className='input-subject pt-2' placeholder='Subject:'/> <br /><br />
          <input type="text" className='input-message-box pt-2' placeholder='Write message...'/> <br /><br /><br />
          <div className=''>
          <Link to={'/'} className='text-center'><button className='input-button'>Send Message</button></Link>
          </div>
        </form>
       </div>
      </div>
    </div>
  )
}

export default Contact