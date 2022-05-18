import {useEffect, useRef} from "react";
import {gsap} from 'gsap'
const CubeModal=()=>{
    const refCube=useRef()
    useEffect(()=>{
        if(!!refCube.current){
            gsap.to(refCube.current.position,{duration:20, x:300, ease:'power2.out'})
        }
    }, [refCube.current])
    return(
        <mesh castShadow ref={refCube} position={[1, 0.5, 0.2]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial  color='#fff' metalness={0.4} roughness={0.4}/>
        </mesh>

    )
}

export default CubeModal
