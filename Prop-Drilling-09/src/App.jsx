import React from 'react'
import ComponentA from './Component/ComponentA';

const App = () => {
  const name = "Anugraha Tamang";
  return (
    <div>
      <ComponentA name = {name} />
    </div>
  )
}

export default App