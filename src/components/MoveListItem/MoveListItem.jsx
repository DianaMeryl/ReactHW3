import Button from "../Button/Button";
import { users } from '../../../src/data';
import { useState } from 'react';
import '../Counter/Counter.css';
import './MoveListItem.css'

export default function MoveListItem (){

  const [listOneState, setChangeStateOne] = useState(users);
  const [listTwoState, setChangeStateTwo] = useState(users);

  const moveFirst = () => {

    if(listOneState.length){
      const updatedListOne = [...listOneState.slice(1)];
      const updatedListTwo = [...listTwoState, listOneState[0]];

      setChangeStateOne(updatedListOne);
      setChangeStateTwo(updatedListTwo);
    }
    else{
      const updatedListOne = users;
      const updatedListTwo = users;

      setChangeStateOne(updatedListOne);
      setChangeStateTwo(updatedListTwo);
    }
  };

  function ListItemFirst(){
    const listItems = listOneState.map((user) => (
        <li key={user.id} > {user.firstName} <strong>{user.lastName}</strong></li>
    ));
    return <ol className="rounded">{listItems}</ol>;
}
function ListItemSecond(){
  const listItems = listTwoState.map((user) => (
      <li key={user.id} > {user.firstName} <strong>{user.lastName}</strong></li>
  ));
  return <ol className="rounded">{listItems}</ol>;
}

  return (
    <>
      <h4>Завдання 4</h4>
      <div className="container-lists">
        <ListItemFirst />
        <ListItemSecond />
      </div>
      <Button onClick={moveFirst}>Move to end</Button>
    </>
  )
}
