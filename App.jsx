import {useMemo, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GeneralBtn from "./components/btn/btn.jsx";

function App() {
  const [count, setCount, setTitle] = useState(0)

     function ChangeTitle(count){
      return useMemo(()=>{
          return count % 2 === 0 ? "Editar" : "Crear"
      }, [count])
    }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {

            setCount((count) => count + 1);
            if (count % 2 === 0) {
                console.log("Armando")
                setTitle("Editar");
            } else {
                console.log("Borjas")
                setTitle("Crear");
            }
        }
        }>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <GeneralBtn title={ChangeTitle(count)}></GeneralBtn>
    </>
  )
}

export default App
