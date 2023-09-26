import React from 'react'
import Footer from '../layouts/Footer'
import Lottie from 'lottie-react'
import workstation from '../assest/animation_ln06ewed.json'
import '../styles/Projects.css'
import sentroute from '../assest/sentroute.svg'
import githubicon from '../assest/github.svg'
import websiteicon from '../assest/websiteicon.svg'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='container text-white d-flex project-main w-100'>
        <div className='project-body-intro w-100 d-none d-lg-block'>
          <header className='mt-4'>
            <Link to={'/'} className='text-decoration-none'><h1 className='header-name mb-4'>HENRY.</h1></Link>
          </header>
          <button className='fullstack-button mb-4'>Full Stack Developer</button>
          <div className='mb-4'>
            <h1>Ukiwa Henry Osose</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha tortor consequat nibh gravida id sit. Quis eget diam ut proin. At nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros dolor eget. Orci in enim sit luctus lacus arcu.</p>
          </div>
          <div className='d-flex mt-4'>
            <div className=''>
              <ul className=''>
                <li className='pb-4 list-unstyled-none'>01 -- Projects</li>
                <li className='pb-4 list-unstyled-none'>02 -- Download Resume</li>
                <li className=' list-unstyled-none'>03 -- Contact</li>
              </ul>
            </div>
            <div className='w-100'>
              <Lottie animationData={workstation} className='lottie-animated-image' />
            </div>
          </div>
          <div>
            <Footer/>
          </div>
        </div>
        <div className='w-100 project-inner-body'>
          <section id="projects" className="project-display-section mt-5 w-100">
            <div className="taskduty w-100 p-2">
              <div>
                <p>React, Bootstrap & CSS</p>
              </div>
              <h3 className='pt-4 pb-4'>Task Manager - To-Do List Website</h3>
              <div className='d-flex gap-2 justify-content-between '>
                <div className='d-flex gap-2 align-items-center'>
                  <img src={githubicon} alt=""/>
                  <p className="pt-3">Github</p>
                  <a href="https://github.com/henryuks129/Task-Duty-Frontend" target='_blank' rel='noreferrer noopener'><img src={sentroute} alt=""/></a>
                </div>
                <div className='d-flex gap-2 align-items-center'>
                  <img src={websiteicon} alt=''/>
                  <p className="pt-3">Website</p>
                  <a href="task-duty-frontend-chs0smiwf-henryuks129.vercel.app" target="_blank" rel="noreferrer noopener"><img src={sentroute} alt="" /></a>
                </div>
              </div>
            </div>
            <div className='jazzy-burger w-100 p-2'>
            <div>
                <p>React, Bootstrap & CSS</p>
              </div>
              <h3 className='pt-4 pb-4'>Jazzy Burger - Jazzy Burger Clone Website</h3>
              <div className='d-flex gap-2 justify-content-between '>
                <div className='d-flex gap-2 align-items-center'>
                 <img src={githubicon} alt=""/>
                  <p className="pt-3">Github</p>
                  <a href="https://github.com/henryuks129/jazzy-burger-frontend" target='_blank' rel='noreferrer noopener'><img src={sentroute} alt=""/></a>
                </div>
                <div className='d-flex gap-2 align-items-center'>
                  <img src={websiteicon} alt=''/>
                  <p className="pt-3">Website</p>
                  <a href="jazzy-burger-frontend-iatt-iesssyhhv-henryuks129.vercel.app" target="_blank" rel="noreferrer noopener"><img src={sentroute} alt="" /></a>
                </div>
              </div>
            </div>
            <div className='perfumery w-100 p-2'>
            <div>
                <p>React, Bootstrap & CSS</p>
              </div>
              <h3 className='pt-4 pb-4'>Perfumery - E-commerce Website</h3>
              <div className='d-flex gap-2 justify-content-between '>
                <div className='d-flex gap-2 align-items-center'>
                  <img src={githubicon} alt=""/>
                  <p className="pt-3">Github</p>
                  <a href="https://github.com/henryuks129/perfumery-client" target='_blank' rel='noreferrer noopener'><img src={sentroute} alt=""/></a>
                </div>
                <div className='d-flex gap-2 align-items-center'>
                  <img src={websiteicon} alt=''/>
                  <p className="pt-3">Website</p>
                  <a href="perfumery-client-gxxpba64z-henryuks129.vercel.app" target="_blank" rel='noreferrer noopener'><img src={sentroute} alt="" /></a>
                </div>
              </div>
            </div>
            <div className='tradexpress w-100 p-2'>
            <div>
                <p>React, Bootstrap & CSS</p>
              </div>
              <h3 className='pt-4 pb-4'>TradExpress - Crypto Website</h3>
              <div className='d-flex gap-2 justify-content-between '>
                <div className='d-flex gap-2 align-items-center'>
                  <img src={githubicon} alt=""/>
                  <p className="pt-3">Github</p>
                  <a href="https://github.com/henryuks129/tradexpress" target='_blank' rel='noreferrer noopener'><img src={sentroute} alt=""/></a>
                </div>
                <div className='d-flex gap-2 align-items-center'>
                  <img src={websiteicon} alt=''/>
                  <p className="pt-3">Website</p>
                  <a href=""><img src={sentroute} alt="" /></a>
                </div>
              </div>
            </div>
            <div className='image-gallery w-100 p-2'>
            <div>
                <p>React, Bootstrap & CSS</p>
              </div>
              <h3 className='pt-4 pb-4'>Antique Galleria - Image Gallery Website</h3>
              <div className='d-flex gap-2 justify-content-between '>
                <div className='d-flex gap-2 align-items-center'>
                  <img src={githubicon} alt=""/>
                  <p className="pt-3">Github</p>
                  <a href="https://github.com/henryuks129/HNGTASK-3" target='_blank' rel='noreferrer noopener'><img src={sentroute} alt=""/></a>
                </div>
                <div className='d-flex gap-2 align-items-center'>
                  <img src={websiteicon} alt=''/>
                  <p className="pt-3">Website</p>
                  <a href="hngtask-3-gp7ogmwod-henryuks129.vercel.app" target="_blank" rel='noreferrer noopener'><img src={sentroute} alt="" /></a>
                </div>
              </div>
            </div>
            <div className='movie-display-gallery w-100 p-2'>
            <div className=''>
                <p>React, Bootstrap & CSS</p>
              </div>
              <h3 className='pt-4 pb-4'>Movie Display - Movie Display Website</h3>
              <div className='d-flex gap-2 justify-content-between my-5'>
                <div className='d-flex gap-2 align-items-center'>
                  <img src={githubicon} alt=""/>
                  <p className="pt-3">Github</p>
                  <a href="https://github.com/henryuks129/HNGTASK-2" target="_blank" rel='noreferrer noopener'><img src={sentroute} alt=""/></a>
                </div>
                <div className='d-flex gap-2 align-items-center'>
                  <img src={websiteicon} alt=''/>
                  <p className="pt-3">Website</p>
                  <a href="hngtask-2-9eo087mhe-henryuks129.vercel.app" target='_blank' rel='noreferrer noopener'><img src={sentroute} alt="" /></a>
                </div>
              </div>
            </div>
          </section>
        </div>
    </div>
  )
}

export default Projects