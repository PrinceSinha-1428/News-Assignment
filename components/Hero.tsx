'use client';

import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import Link from 'next/link';
import NewsCard from './NewsCard';
import Image from 'next/image';

export interface NewsArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string; 
  content: string | null;
}


const Hero = () => {

   const [article, setArticle] = useState<NewsArticle[] | []>([]);

   const fetchNews = async () => {
      const response = await fetch('api/news');
      const data = await response.json();
      setArticle(data.articles);
   }

   useEffect(() => {
      fetchNews();
   },[])

   const articleLength = article.length;

  return (
    <div>
      <div className='p-4 flex gap-4 items-center'>
         <div className='border-l border-4 border-red-700 h-10 w-0.5'/>
         <h1 className='text-2xl font-semibold'>Top News</h1>
         <div className=' border-2 border-red-700 h-px w-[600px]'/>
      </div>
      <div className='flex gap-4'>
      <div className=' border h-[500px] w-1/2'>
         <div>
         {article.slice(0,5).map((news) => (
            <Link className='h-[300px]' key={news.title} href={news.url}>
               <NewsCard  {...news} />
            </Link>
         ))}
         </div>
      </div>
      <div className='w-1/2 h-[300px] '>
         {article.slice(5,articleLength).map((news) => (
            <Link className='gap-4' key={news.title} href={news.url}>
               <NewsCard {...news} />
            </Link>
         ))}
      </div>
      </div>
    </div>
  );
}

export default Hero;
