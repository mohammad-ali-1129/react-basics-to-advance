import React from 'react'
import { UserContext } from './MyContext'
import Child from './Child'
const App = () => {
  return (
    <UserContext.Provider value="Mohammad Ali">
      <Child />
    </UserContext.Provider>
  )
}

export default App
