import React,{useEffect, useState} from 'react'
import Lottie from 'lottie-react'
import working from '../assest/animation_ln0q95xh.json'
import { Link,useNavigate } from 'react-router-dom'
import Footer from '../layouts/Footer'
import { Card, Button, Form, Alert } from "react-bootstrap";
import '../styles/Contacts.css'

const Contact = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState('')
  // const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  // const navigate = useNavigate()
  // useEffect(()=>{
  //   if(password <= 6){
  //     alert('password is less that 6')
  //   }
  // })
  return (
    <div className=' text-white d-flex project-main w-100 contact-body'>
        <div className="w-100 container d-none d-lg-block project-body-intro">
        <header className="mt-4">
          <Link to={"/"} className="text-decoration-none cursor-pointer">
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
              <li className="pb-4 list-unstyled w-100">02 -- Resume</li>
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
        
        <Form action=''>
            <Form.Group controlId="Email">
              <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder='From:' className='input-from w-100' required />
            </Form.Group> <br /><br />
            <Form.Group controlId="Password">
              <Form.Control type="text" onChange={(e) => setPassword(e.target.value)} required placeholder='Subject:' className='input-subject w-100' />
            </Form.Group> <br /><br />
            <Form.Group controlId="ConfirmPassword">
              <Form.Control type="text" onChange={(e) => setMessage(e.target.value)} placeholder='Write message...' className='input-message-box w-100' required />
            </Form.Group> <br /><br />
            <div className='text-center'>
            <Link to={'/'} className=''>
            <Button type="Submit" className=" input-button">
              Send Message
            </Button></Link>
            </div>
          </Form>
       </div>
      </div>
    </div>
  )
}

export default Contact