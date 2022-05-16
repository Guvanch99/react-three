import { Suspense } from "react";
import './App.css'
import { Canvas } from "@react-three/fiber";
import { Select } from "@react-three/drei";
import BoxComponent from "./BoxComponent";
const App=()=>{

  return(
      <Canvas className='canvas'>
          <Suspense fallback={null}>
              <Select box multiple onChange={console.log} filter={items => items}>
                  <BoxComponent/>
              </Select>
          </Suspense>
      </Canvas>
  )
}

export default App
