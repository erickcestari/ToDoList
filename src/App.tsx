import {useState} from 'react'
import * as C from './App.styles'
import {Item} from './types/Item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'

const App = () =>{
  const [list,setList] = useState<Item[]>([
    {id: 1, name: 'Jump in the pool', done: false},
    {id: 2, name: 'Make a list', done: false},
  ])

  const handleAddTask = (taskName: string) =>{
    let newList = [...list];
    newList.push({
      id: newList.length + 1,
      name: taskName,
      done: false,
    })
    setList(newList)
  }
  const deleteList = (idNumber: number) =>{
    let newList = [...list];
    newList.splice(idNumber - 1, 1)
    for(let item of newList){
      if(item.id > idNumber) item.id -=1
    }
    setList(newList)
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>To Do List</C.Header>

        <AddArea onEnter ={handleAddTask}/>


        {list.map((item,index) =>(
          <ListItem key={index} item={item} deleted ={deleteList}/>
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;