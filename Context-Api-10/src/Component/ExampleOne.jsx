
import ExampleTwo from './ExampleTwo'
import {data} from '../App'

const ExampleOne = () => {
   
  return (
    <div>
      <ExampleTwo/>
      <p>Hello I am Here</p>
      <data.Consumer>
        {(name) => {
            return <p>My name is {name}</p>
        }}
      </data.Consumer>
    </div>
  )
}

export default ExampleOne