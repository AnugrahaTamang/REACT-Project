import React from 'react'
import CounterApp from './Component/CounterApp'
import TodoList from './Component/TodoList'
import UpdatingArray from './Component/UpdatingArray'
import UpdatingObject from './Component/UpdatingObject'
import UpdatingArrayOfObject from './Component/UpdatingArrayOfObject'
import Profile from './Component/Profile'
import ShoppingList from './Component/ShoppingList'

const App = () => {
  return (
    <div>
      <CounterApp/>
      <UpdatingArray/>
      <UpdatingObject/>
      <UpdatingArrayOfObject/>
      <TodoList/>
      <Profile/>
      <ShoppingList/>
    </div>
  )
}

export default App