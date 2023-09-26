import React from 'react'
import '../styles/Footer.css'
import womanimg from '../assest/womanimg.svg'
import email from '../assest/email.svg'
import sendingroute from '../assest/sentroute.svg'
import github from '../assest/github.svg'

const Footer = () => {
  return (
    <div className='container'>
        <div className='d-flex justify-content-between'>
            <div className='d-flex gap-5'>
                <img src={womanimg} alt="" />
            </div>
                <div className='d-flex gap-2 align-items-center'>
                    <img src={github} alt="" />
                    <p className='pt-3'>Email Me</p>
                    <img src={sendingroute} alt="" />
                </div>
            <div className='d-flex gap-2 align-items-center'>
                <img src={email} alt="" />
                    <p className='pt-3'>Github</p>
                    <a href="https://github.com/" target='_blank' rel='noreferrer noopener'><img src={sendingroute} alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer