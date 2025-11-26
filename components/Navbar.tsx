'use client';

import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Navbar = () => {

   const {theme, setTheme} = useTheme();
   const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  console.log(theme)

  return (
    <div>
      <div className='cursor-pointer '>
        { theme === 'dark' ?   
         <Button variant={'ghost'} onClick={() => setTheme("light")}>
            <Sun size={20}/>
         </Button> :
        <Button variant={'ghost'} onClick={() => setTheme("dark")}>
            <Moon size={20}/>
         </Button>}
      </div>
      
    </div>
  );
}

export default Navbar;
