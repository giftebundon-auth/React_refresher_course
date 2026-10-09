
import { useState } from 'react'
import AccordionItem from './AccordionItem'

export default function Accordion({ data }) {
    const [currOpen, setCurOpen] = useState(null)
    return <div className='accordion' >
        {data.map((el, index) => (
            <AccordionItem title={el.title}
            num={index}
            key={el.title}
            currOpen ={currOpen}
            onOpen = {setCurOpen}
            >{el.text}</AccordionItem>)
        )}
        <AccordionItem
        currOpen={currOpen}
        onOpen = {setCurOpen}
        title='test 1'
        num = {22}
        key ='test 1'

        >
            <p>Allows React developers to:</p>
            <ul>
                <li>Break up UI into components</li>
                <li>Make component reusable</li>
                <li>Plan State efficiently</li>
            </ul>
        </AccordionItem>
    </div>
}
