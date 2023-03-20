import { useState, KeyboardEvent } from 'react';
import * as C from './styles';
import React from 'react';

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea =(({onEnter} : Props) =>{
    const [inputText, setInputText] = useState('')

    const handleKeyUp = (e: KeyboardEvent) =>{
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText)
            setInputText('')
        }
    }

    const mouseClick = () =>{
        if(inputText !== ''){
            onEnter(inputText)
            setInputText('')
        }
    }

    return(
        <C.Container>
            <div className='image' onClick={mouseClick}>➕</div>
            <input type='text'
            placeholder='Add a task'
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyUp={handleKeyUp}
            ></input>
        </C.Container>
    )

})