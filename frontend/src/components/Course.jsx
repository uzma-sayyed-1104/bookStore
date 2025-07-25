import React, { useEffect, useState } from 'react';

import Cards from './Cards';
import { Link } from "react-router-dom";
import axios from "axios";



function Course() {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("https://bookstoreapp-backend-djr2.onrender.com/book");
                console.log(res.data);
                setBook(res.data);
         
            } catch (error) {
                console.log(error);
          }
        }  
        getBook();
    },[])
  return (
    
          <>
              <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
              <div className='mt-28 items-center justify-center text-center '>
                  <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
                  <p className='mt-12'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas laborum quaerat pariatur eveniet maiores
                      omnis itaque illum, maxime dolores labore ullam. Possimus, consectetur recusandae itaque adipisci nobis
                      perspiciatis nisi odio eos laudantium vero blanditiis modi laborum unde ut eum voluptate obcaecati? Illo
                      saepe mollitia facilis, perferendis dicta dolor! Vero, reprehenderit?
                  </p>
                  <Link to="/">
                  <button className='text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
                  </Link>
              </div>
              <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
                  {
                      book.map((item) => (
                          <Cards key={item._id} item={item} />
                    ))
                  }
              </div>
          </div>
          </>
      
    
  )
}

export default Course;
