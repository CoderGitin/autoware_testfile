'use client'

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import HomepgTest from './Homepgtest';



const faqs = [
  {
    question: 'How does Autowarm automate lead generation for small businesses?',
    answer:
      'This course is ideal for individuals such as Product Owners, Product Managers, Agile Practitioners, Business Analysts, or anyone eager to harness AI for enhancing product management and development workflows.',
  },
  {
    question: 'How many emails can I send from one email account in a single day?',
    answer: '',
  },
  {
    question: 'How does Autowarm address email deliverability challenges?',
    answer: '',
  },
  {
    question: 'What do you need to ensure before sending emails with your accounts?',
    answer: '',
  },
  {
    question: 'What Pre-Requisites should users consider before Email Warm-Up?',
    answer: '',
  },
  {
    question: 'How does Autowarm address email deliverablity challenges?',
    answer: '',
  },
  {
    question: 'How does autowarm automate lead generation for small businesses?',
    answer: '',
  },
];

export default function Homepg2() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-white py-20 px-4">
      {/* Testimonials */}
 <HomepgTest/>
      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto bg-white pt-11">
        <h3 className="text-[45px] font-semibold text-center text-gray-800 mb-8 ">
          We have Got the <br className='bg-blue-500' /> Answers you Need.
        </h3>
        {faqs.map((faq, idx) => (
            <div key={idx} className="border-t border-blue-500">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              className="w-full text-left flex justify-between items-center py-4 px-2 text-gray-800 font-medium text-[19px] "
            >
              {faq.question}
                {openIndex === idx ? <Minus className="w-10 h-10 text-blue-400 bg-gray-200 rounded-full py-1 px-1 font-extrabold text-4xl" /> : <Plus className="w-10 h-10 font-extrabold text-blue-400 bg-gray-200 rounded-full py-1 px-1  text-4xl"/>}
            </button>
            
            {openIndex === idx && faq.answer && (
              <div className="border-t border-blue-500 px-2 pt-3 pb-4 text-[19.5px] text-gray-600 ">
              {faq.answer}
              </div>
            )}
            </div>
        ))}
      </div>
    </div>
  );
}