import React, { ReactElement } from "react";

interface ISquare{
  state: string,
  onClick: React.MouseEventHandler<HTMLElement>,
  bkgColor: string
}

export function Square(props: ISquare):ReactElement{
  return (
    <button onClick={props.onClick} className={`${props.bkgColor} border-none border-white rounded-full border-4 w-[100px] h-[100px] `}>
      <p className="text-white text-6xl ">{props.state}</p>
    </button>
  )
}