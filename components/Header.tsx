import { HeaderItems } from '@/constants';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='p-4 border-b '>
      <div className='flex  flex-wrap sm:flex-nowrap items-center justify-between px-2'>
        <nav className='flex gap-4 overflow-x-auto no-scrollbar'>
         {HeaderItems.map((item,idx) => (
           <Link href={item.href} className='whitespace-nowrap hover:text-red-700 font-semibold border-b-2 border-transparent pb-1 hover:border-b-red-700 cursor-pointer text-sm sm:text-base' key={idx}>{item.name}
            </Link>
         ))}
         </nav>
      </div>
    </header>
  );
}

export default Header;
