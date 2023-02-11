import React, { ReactElement } from 'react';
import {Board} from "./components/Board"
import {Toggle} from "./components/Toggle"
import { useState } from 'react';

function App() {
  const [isDarkThemeMode,changeMode] = useState<boolean>(false)
  const changeTheme = () =>{
    let mode = (!isDarkThemeMode) ? true : false
    // eslint-disable-next-line no-restricted-globals
    changeMode(mode)
  }
  return (
    <div className={isDarkThemeMode ? 'h-full bg-white animate-[slidewhite_.5s_1]' : 'h-full bg-slate-900 animate-[slideslate_1s_1]'}>
      <Toggle onClick={() => changeTheme()} themeMode={isDarkThemeMode}/> 
      <div className='flex flex-col items-center'>
        <h1 className={isDarkThemeMode ? 'text-7xl mb-[50px] mt-[30px] text-orange-500' : 'text-7xl mb-[50px] mt-[30px] text-green-300'}>
          TIP-TAP-TOE</h1>
        <Board/>
      </div>
    </div>
  );
}

export default App;
