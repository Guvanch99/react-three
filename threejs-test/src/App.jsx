import styled from "styled-components";
import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import './app.css'
import Earth from "./components/Earth";
import Attach from "./components/Attach";
import Abstractions from "./components/Abstractions";

const CanvasContainer=styled.div`
  width: 100%;
  height: 100%;
`

const App=()=>{
  return(
      <CanvasContainer>
          <Canvas shadows>
              <Suspense fallback={null}>
                  <Earth/>
                  {/*<Attach/>*/}
                  {/*<Abstractions/>*/}
              </Suspense>
          </Canvas>
      </CanvasContainer>
  )
}

export default App
