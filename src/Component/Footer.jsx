import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

function footer({LightTheme}) {
  return (
    <div 
    className='w-full h-20 absolute bottom-0 sticky flex items-center justify-between px-10'
    style={{
        backgroundColor: LightTheme ? "#6c584c": "#f0ead2",
        color: LightTheme ? "#f0ead2" : "#6c584c",
    }}>
        <h3>© 2024 <a 
        href="https://github.com/Swayanshu004"
        className='font-medium text-xl'>Swayanshu004</a></h3>
        <div className='flex gap-5'>
            <a 
            href="https://www.linkedin.com/in/swayanshu-satyapragyan-sahoo-084b6525a/"
            target='_blank'>
                <LinkedInIcon/>
            </a>
            <a 
            href="https://twitter.com/SwayanshuSahoo"
            target='_blank'>
                <XIcon/>
            </a>
        </div>
    </div>
  )
}

export default footer