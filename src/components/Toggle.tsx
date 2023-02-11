import React, { ReactElement } from "react";

interface IToggle{
  onClick:React.MouseEventHandler<HTMLElement>,
  themeMode:boolean
}

export function Toggle(props:IToggle):ReactElement{
  return (
    <button 
      onClick={props.onClick}>
        {props.themeMode ? <i className="rounded-full fa-solid fa-sun text-yellow-500 text-4xl mt-[15px] ml-[15px] hover:shadow-[0_0_10px_10px_#fc9608]"></i> 
        : <i className="rounded-full fa-solid fa-moon text-white text-4xl  mt-[15px] ml-[15px] hover:shadow-[0_0_10px_10px_white]"></i>}
    </button>
  )
}