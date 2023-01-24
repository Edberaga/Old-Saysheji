import React from 'react'
import Content from '../constant/homeContent.json'
import { styles } from '../style'
import { faq } from '../constant';
import Accordion from 'react-bootstrap/Accordion';

const FaqList = ({number, title, detail}) => {
  return (
      <Accordion.Item eventKey={number}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>{detail}</Accordion.Body>
      </Accordion.Item>
  )
}

const FAQ = () => {
  return (
    <section id='faq' className='text-center my-10'>
        <h1 className={styles.heading2}>{Content.faqSectionTitle}</h1>
        <div className="w-full md:mt-10 mt-6">
          <p className={`${styles.paragraph} sm:mr-[5rem] mr-0 text-base`}>{Content.faqSectionInfo}</p>
        </div>

        <div className="w-full md:mt-6 mt-3">
          <Accordion defaultActiveKey="0">
            {faq.map((item) => (
              <FaqList key={item.id} {...item}/>
            ))}
          </Accordion>
        </div>
    </section>
  )
}

export default FAQ