import React from 'react'
import { career } from '../../../constant'
import Content from './constant/career.json'
import { InternshipData } from '../careerData'
import ReactPlayer from 'react-player'

const Internship = () => {
  return (
    <>
    <header className='flex flex-col items-center text-center w-full'>
      <section className='font-poppins w-full py-10'>
        <h1 className='font-semibold md:text-[55px] text-[43.5px] leading-[32px] my-8'>Internship at Saysheji</h1>
        <p className='max-w-[1000px] m-auto'>{Content['about-internship']}</p>
        <ReactPlayer
          className=''
          url='https://www.youtube.com/watch?v=pOFeNnGVbDo'
          controls = {true}
        />
      </section>
    </header>

      <section className='font-poppins w-full py-10'>
        <section className="py-10 w-[85%] feedback-container">
          {InternshipData.map((item, index) => {
            return (
              <section key={index}>
                <h1 className="font-semibold md:text-[38px] text-[33.5px] leading-[52px] my-2">
                  {item.title}
                </h1>
                <section className="flex md:flex-row flex-col">
                  <div>
                    <video
                      className=''
                      src={item.video}
                      controls
                    />
                  </div>
                  <div>
                    <p>{item.content}</p>
                    <p>{item.require}</p>
                  </div>
                </section>
              </section>
            )
          })}

        </section>
      </section>
    </>
  )
}

export default Internship