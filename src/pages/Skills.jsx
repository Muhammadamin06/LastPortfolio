import React from 'react'
import { RiComputerLine } from 'react-icons/ri'
import { BiStore } from 'react-icons/bi'
import { TypeAnimation } from 'react-type-animation'

function Skills() {
  return (
    <div>
      <TypeAnimation
        sequence={[
          "Front-end skills", 1000
        ]}
        speed={1}
        className='title'
      />
      <div className='skills__block'>
        <div className='skills__box'>
          <h3 className='box-title'>What i do? <span></span></h3>
          <p className='skills__box-text'>
            <RiComputerLine />
            <span>HTML, CSS, JavaScript</span>
          </p>
          <p className='skills__box-text'>
            <BiStore />
            <span>Sass, React.js</span>
          </p>
        </div>
        <div className='skills__box'>
          <h3 className='box-title'>Coding Skills <span></span></h3>
          <div className='skills__code'>
            <div className='skills__code-title'>
              <p>HTML</p>
              <span>80%</span>
            </div>
            <div className='skills__code-progress'>
              <span style={{width:"80%"}}></span>
            </div>
          </div>
          <div className='skills__code'>
            <div className='skills__code-title'>
              <p>CSS</p>
              <span>70%</span>
            </div>
            <div className='skills__code-progress'>
              <span style={{width:"70%"}}></span>
            </div>
          </div>
          <div className='skills__code'>
            <div className='skills__code-title'>
              <p>Bootstrap</p>
              <span>65%</span>
            </div>
            <div className='skills__code-progress'>
              <span style={{width:"65%"}}></span>
            </div>
          </div>
          <div className='skills__code'>
            <div className='skills__code-title'>
              <p>Javascript</p>
              <span>70%</span>
            </div>
            <div className='skills__code-progress'>
              <span style={{width:"70%"}}></span>
            </div>
          </div>
          <div className='skills__code'>
            <div className='skills__code-title'>
              <p>React</p>
              <span>70%</span>
            </div>
            <div className='skills__code-progress'>
              <span style={{width:"70%"}}></span>
            </div>
          </div>
          <div className='skills__code'>
            <div className='skills__code-title'>
              <p>Sass</p>
              <span>75%</span>
            </div>
            <div className='skills__code-progress'>
              <span style={{width:"75%"}}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills