import Button from '../Button/Button';
import '../Counter/Counter.css';

export default function DivAndBtn(){

    return (
        <>
            <h4>Завдання 5</h4>
            <div className="btn-click" onClick = {() => console.log("Div Clicked")}>
            <Button onClick={(e) => {
                e.stopPropagation();
                console.log("Button Clicked")}}>Button Clicked</Button>
        </div>
        </>
    )
}


