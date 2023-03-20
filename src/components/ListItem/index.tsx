import { type } from 'os'
import * as C from './styles'
import { Item } from '../../types/Item'
import { useState } from 'react'

type Props = {
    deleted: (idNumber: number) => void
    item: Item
}

export const ListItem = ({item, deleted}:Props) =>{
    const [isChecked, setIsChecked] = useState(item.done)
    
    item.done = isChecked;

    const listDelete = () =>{
        
    }

    return(
        <C.Container done={isChecked}>
            <input
            type="checkbox"
            checked={isChecked}
            
            onChange={e => setIsChecked(e.target.checked)}
            />
            <label>{item.id}. {item.name}</label>
            <img 
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMyA2djE4aDE4di0xOGgtMTh6bTUgMTRjMCAuNTUyLS40NDggMS0xIDFzLTEtLjQ0OC0xLTF2LTEwYzAtLjU1Mi40NDgtMSAxLTFzMSAuNDQ4IDEgMXYxMHptNSAwYzAgLjU1Mi0uNDQ4IDEtMSAxcy0xLS40NDgtMS0xdi0xMGMwLS41NTIuNDQ4LTEgMS0xczEgLjQ0OCAxIDF2MTB6bTUgMGMwIC41NTItLjQ0OCAxLTEgMXMtMS0uNDQ4LTEtMXYtMTBjMC0uNTUyLjQ0OC0xIDEtMXMxIC40NDggMSAxdjEwem00LTE4djJoLTIwdi0yaDUuNzExYy45IDAgMS42MzEtMS4wOTkgMS42MzEtMmg1LjMxNWMwIC45MDEuNzMgMiAxLjYzMSAyaDUuNzEyeiIvPjwvc3ZnPg=="
            onClick={e => deleted(item.id)}
            //delete(item.id)
            />
        </C.Container>
    )
}