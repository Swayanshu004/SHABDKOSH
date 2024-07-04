import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import {TextField, MenuItem, Switch, Button} from '@mui/material';
import categories from '../data/category';

function Header({category, meanings, setCategory, word, setWord, setTheme, Theme}) {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff"
      },
      mode: 'dark',
    },
  });
  const handleCurrencyChange = (language)=>{
    setCategory(language);
    setWord("");
  }

  return (
    <>
    <div className='p-6 flex flex-col items-center justify-center gap-10 bg-[#6c584c]'>
      <div className='w-full flex justify-between'>
        <h1 
        className="text-7xl font-bold text-[#f0ead2]">शब्दकोशः</h1>
        <div>
          <WbSunnyRoundedIcon color='warning'/>
          <Switch 
          color="default" 
          onClick={()=>{setTheme(!Theme)}}
          defaultChecked />
          <DarkModeOutlinedIcon color='action'/>
        </div>
      </div>
        <div className='flex gap-20'>
          <ThemeProvider theme={darkTheme}>
              <TextField 
              id="outlined-basic" 
              label="Search ..."
              value={word}
              onChange={(e)=>{setWord(e.target.value)}}
              variant="outlined" 
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Language"
                value={category}
                onChange={(e)=>{handleCurrencyChange(e.target.value)}}
                defaultValue="EUR"
                className='w-56'
              >
                {categories.map((option) => (
                  <MenuItem key={option.label} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
          </ThemeProvider>
        </div>
    </div>
    <div className='p-6 bg-[#a98467] flex items-center justify-between'>
        <h2 className='text-xl font-medium text-[#FFF]'>{word ? word : "Enter Word For Result" } :-</h2>
    </div>
    </>
  )
}

export default Header