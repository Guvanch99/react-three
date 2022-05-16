import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import {useFrame,useThree} from "@react-three/fiber";
import {useEffect, useRef, useState} from "react";
const Three=()=>{
  const [state, setState]=useState(false)
  console.log('s', state)
  const ref=useRef<any>()
   useFrame((props)=>{

     if(ref&& ref.current && state){
       ref.current.position.x+=props.mouse.x
     }
   })

  return(
    <>
      <ambientLight args={['#ffffff', 1]}/>
      { /* @ts-ignore*/}
      {/*<PerspectiveCamera makeDefault args={[0,1,5]}/>*/}
    <mesh castShadow onPointerOver={()=>setState(false)} onPointerDown={()=>setState(true)} ref={ref}>
      <sphereGeometry  args={[1,32,32]}/>
      <meshStandardMaterial color={'red'}/>
    </mesh>
      {/*<OrbitControls/>*/}
    </>
  )
}

export default Three

