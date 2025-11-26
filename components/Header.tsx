import { HeaderItems } from '@/constants';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='p-4 border-b'>
      <div className='flex items-center  justify-between px-2 '>
         {HeaderItems.map((item,idx) => (
            <Link href={item.href} className='hover:text-red-500 border-b-2 border-transparent pb-1 hover:border-b-red-500 cursor-pointer' key={idx}>{item.name}
            </Link>
         ))}
      </div>
    </header>
  );
}

export default Header;
