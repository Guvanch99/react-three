import {useFrame} from "@react-three/fiber";
import {Physics, useBox, usePlane} from '@react-three/cannon'
import {OrbitControls, Stars, PresentationControls} from "@react-three/drei";
import * as THREE from 'three'

const Sun=()=>{
    return(
        <mesh position={[1,3,1]}>
            <ambientLight intensity={1}/>
            <meshStandardMaterial/>
            <meshPhongMaterial color={'yellow'}/>
            <sphereGeometry/>
            <OrbitControls/>
        </mesh>
    )
}

const Plane=()=>{
    const [ref]=usePlane(()=>({ rotation:[-Math.PI/2,0,0]}))
    return(
        <mesh ref={ref} position={[1,0,0]} rotation={[-Math.PI/2,0,0]}>
            <planeGeometry args={[100,100,10,10]}/>
            <meshBasicMaterial  />
            <meshPhongMaterial side={THREE.DoubleSide} color='blue'/>
            <OrbitControls/>
        </mesh>
    )
}

const Box=()=>{
    const [ref, api]=useBox(()=>({mass:1, position:[0,.7,0]}))
    return(
        <>
            <PresentationControls
                global={false} // Spin globally or by dragging the model
                cursor={true} // Whether to toggle cursor style on drag
                snap={false} // Snap-back to center (can also be a spring config)
                speed={1} // Speed factor
                zoom={1} // Zoom factor when half the polar-max is reached
                rotation={[0, 0, 0]} // Default rotation
                polar={[0, Math.PI / 2]} // Vertical limits
                azimuth={[-Infinity, Infinity]} // Horizontal limits
                config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
            >
        <mesh onClick={()=>{api.velocity.set(0,2,0)}} ref={ref} position={[0,.7,0]}>
            <ambientLight intensity={1}/>
            <meshBasicMaterial />
            <meshPhongMaterial color='red'/>
            <spotLight position={[11,16,10]} angle={0.3}/>
            <boxGeometry />
            <OrbitControls/>
        </mesh>
            </PresentationControls>
        </>
    )
}


const Attach=()=>{

    return(
        <>
            <Stars/>
            <Physics>
                <Sun/>
                <Plane/>
                <Box/>
            </Physics>
        </>
    )
}
export default Attach
