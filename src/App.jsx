import { useState } from 'react';
import ListItem from './components/ListItem/ListItem';
import Counter from './components/Counter/Counter';
import MoveListItem from './components/MoveListItem/MoveListItem';
import DivAndBtn from './components/DivAndBtn/DivAndBtn';



function App() {

  return (
    <>
      <main>
        <section className='section'>
          <ListItem />
        </section>
        <section className='section'>
          <Counter />
        </section>
        <section className='section'>
          <MoveListItem />
        </section>
        <section className='section'>
          <DivAndBtn />
        </section>
      </main>
    </>
  )
}

export default App
