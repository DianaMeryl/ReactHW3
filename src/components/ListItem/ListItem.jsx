import { users } from '../../../src/data';
import './ListItem.css';
import '../Counter/Counter.css';

export default function ListItem(){
    const listItems = users.map((user) => (
        <li key={user.id} >{user.id} {user.firstName} <strong>{user.lastName}</strong></li>
    ));

    return (
        <>
            <h4>Завдання 2</h4>
            <h3>list of best actors</h3>
            <ul className="list">{listItems}</ul>
        </>
    )
    
}