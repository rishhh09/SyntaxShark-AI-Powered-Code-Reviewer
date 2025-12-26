import React from 'react'
import Code_editor from './CodeEditor'

const MainUI = () => {
  return (
    <div className='flex'>
        <div className='ide-left h-screen w-full'>
            <Code_editor/>
        </div>
    </div>
  )
}

export default MainUI