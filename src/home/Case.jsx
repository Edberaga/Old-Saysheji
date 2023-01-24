import React from 'react'
import { GrArticle } from 'react-icons/gr'
import { styles } from '../style';
import { knowledge, caseStudy } from '../constant';
import './homepage.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Owl Carousel Settings
const options = {
  loop: true,
  center: true,
  items: 1,
  margin: 0,
  autoplay: false,
  dots: true,
  autoplayTimeout: 5000,
  smartSpeed: 450,
  nav: false
};

const Knowledge = ({ title, info, index}) => {
  return (
    <div className={`flex flex-row ss:py-5 py-3 rounded-[20px] cursor-pointer ${index !== knowledge.length -1 ? "mb-2" :" mb-0" } w-full`}>
      <div className={`w-[48px] h-[48px] text-[24px] ${styles.flexCenter} bg-blue-gradient  mr-2 `}>
        <GrArticle path='white'/>
      </div>

      <div className='flex-1 flex flex-col ml-3 '>
        <h4 className="font-poppins font-semibold text-[18px] leading-[23px] text-white mb-1">{title}</h4>
        <p className={`${styles.paragraph} font-poppins text-sm text-white text-[16px] leading-[24px] mb-1`}>{info}</p>
      </div>
  </div>
  )
};

const CaseItem = ({title, paragraph, focusField, detail }) => {
  return(
    <>
    <div class='bg-black px-6 py-10 text-white'>
      <div className='w-[22px] h-[4px] my-2 case-line'></div>
      <h1 className='font-poppins font-semibold xs:text-[28px] text-[20px] xs:leading-[36.8px] leading-[29.8px] w-full'>
        {title}
      </h1>
      <p className="py-3 text-dimWhite">{paragraph}</p>
      <ul className='flex sm:flex-row flex-col w-full study-list mb-3 text-sm'>
        <li>{focusField.field1}</li>
        <li className="sm:ml-6 ml-0 ">{focusField.field2}</li>
      </ul>
      <p className='py-2'>{detail}</p>
    </div>
    </>
  )
};

const Case = () => {
  return (
    <section id='case' className='flex flex-wrap items-center h-full bg-lightdark'>
      <div className={`md:flex-1 flex-0 md:w-[66%] w-full ${styles.paddingY} ${styles.paddingX}`}>
        <OwlCarousel className='owl-theme' {...options} loop margin={10} nav>
          {caseStudy.map((item) => (
            <CaseItem key={item.id} {...item}/>
          ))}
        </OwlCarousel>;
      </div>

      <div className={`bg-lightdarker ${styles.paddingY} ${styles.paddingX} md:flex-1 flex-0 z-[1] md:max-w-[34%] w-full`}>
        <h1 className={`${styles.heading2} pt-6 text-gray-600 font-light`}>Knowledge</h1>
        <div className={` flex-col pb-6`}>
          {knowledge.map((item, index) => (
            <Knowledge key={item.id} {...item} index={index}/>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Case