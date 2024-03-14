'use client'

import { CustomBtnType } from "@/types"

const CustomBtn = ({title, style , eventHandler , type}: CustomBtnType) => {
  return (
    <button 
    disabled={false}
    type={type || 'button'}
    className={`custom-btn ${style}`}
    onClick={eventHandler}>
        <span className='flex-1'>{title}</span>
    </button>

  )
}

export default CustomBtn