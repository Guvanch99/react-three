import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import './App.css'
import PlaneModal from "./Plane";
import Girl from "./Girl";
import CubeSquad from "./CubeSquad";
import SphereModel from "./Sphere";
import {ObservableProvider} from "./state/useObservable";

const App=()=>{

  return(
      <div className='app'>
          <Canvas className='canvas' camera={{position:[0,3,7]}} >
              <Suspense fallback={null}>
                  <ambientLight args={['#fff', 1]}/>
                  <ObservableProvider>
                  <Girl/>
                  <SphereModel/>
                  </ObservableProvider>
                  <CubeSquad position={[-5.4,0,-3]}  rotation={[0,Math.PI/2,0]} boxGeometry={[5,3,1]}/>
                  <CubeSquad position={[0,0,-5]} rotation={[0,0,0]} boxGeometry={[10,3,1]}/>
                  <CubeSquad position={[5.4,0,-3]}  rotation={[0,Math.PI/2,0]} boxGeometry={[5,3,1]}/>
                  <PlaneModal/>
                  {/*<OrbitControls/>*/}
              </Suspense>
          </Canvas>
      </div>
  )
}

export default App



{/*<Canvas className='canvas'  camera={{position:[ 0, -25, 8 ], fov:30}} shadows  recieveShadow shadowMap linear={true} frameloop='demand'>*/}
{/*    <Suspense fallback={null}>*/}
{/*        <spotLight castShadow args={['#fff',1.5 ,7,1]} position={[-3,1,3]}/>*/}
{/*        <CubeModal/>*/}
{/*        <PlaneModal/>*/}
{/*        <ambientLight args={['#fff', 1]}/>*/}
{/*     */}
{/*  <OrbitControls />*/}
{/*    </Suspense>*/}
{/*</Canvas>*/}
