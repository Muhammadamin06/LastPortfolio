import React from 'react'
import user from '../images/user.jpg' 
import { TypeAnimation } from 'react-type-animation'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className='home'>
      <div className='home__left'>
        <img src={user} alt="user" className='home__image' />
      </div>
      <div className='home__right'>
        <p className='home__position'>Front-end Developer</p>
        <TypeAnimation 
          sequence={[
            "Welcome !!!",1000,
            "I'm Abdullayev Muhammadamin",2000
          ]}
          speed={1}
          repeat={Infinity}
          className='home__fullname'
        />
        <p className='home__text'>Web developer, with extensive knowledge and years of experience, working in web programming.
          My job is to build your website so that it is functional and user-friendly but at the same time attractive.
        </p>
        <div className='home__btn'>
          <button className='home__btn-portfolio' onClick={()=>navigate(`/portfolio`)}>Portfolio</button>
          <button className='home__btn-contact' onClick={()=>navigate(`/contact`)}>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Home