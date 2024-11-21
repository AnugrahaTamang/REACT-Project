import { createContext } from "react"
import ExampleOne from "./Component/ExampleOne"
 export const data = createContext();
 export const data1 = createContext();
 export const data2 = createContext();
const App = () => {
  const name = "Anugraha Tamang";
  const Age = 22;
  const Location = "USA";
  
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={Age}>
            <data2.Provider value={Location}>
                  <ExampleOne/>
            </data2.Provider>
        </data1.Provider>

      </data.Provider>
    </div>
  )
}

export default App