import {useFrame} from "@react-three/fiber";
import {useRef} from "react";
import {Image, OrbitControls} from '@react-three/drei'
import ImageUrl from '../assets/car.jpeg'

const Abstractions=()=>{
    const ref = useRef()

    useFrame(() => {
        ref.current.material.zoom = 1.05
        ref.current.material.grayscale = 0
          // ref.current.material.color.set(4,139,90)// mix-in color
       ref.current.material.opacity=.9
    })
  // console.log('ref', ref.current.material)
    return(
        <>
            <OrbitControls/>
            <Image  ref={ref} url={ImageUrl}/>
        </>
    )
}

export default Abstractions
