import {useState} from 'react'
export default function AccordionItem({ num, title, text, currOpen, onOpen, children }) {
    
    const isOpen = currOpen === num
    function handleToggle(){
        // onOpen(isOpen? null : num)
        onOpen(prev=> prev===num? null : num)
    }
    return (
        <div className={`item ${isOpen? "open":""}`} onClick={handleToggle}  >
            <p className='number'> {num < 9 ? `0${num + 1}` : num + 1} </p>
            <p className='title' > {title}</p>
            <p className='icon'> {isOpen? '-' :'+'} </p>
            { isOpen && <div className='content-box'>{children}</div>}
        </div>
    )
}