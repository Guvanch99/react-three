import {useFrame, useLoader} from "@react-three/fiber";
import {OrbitControls, Stars} from "@react-three/drei";
import {TextureLoader} from "three";
import * as THREE from 'three'
import EarthDay  from '../assets/textures/8k_earth_daymap.jpeg'
import EarthNormalMap  from '../assets/textures/8k_earth_normal_map.jpeg'
import EarthSpecularMap  from '../assets/textures/8k_earth_specular_map.jpeg'
import EarthCloudMap  from '../assets/textures/8k_earth_clouds.jpeg'
import EarthNightMap  from '../assets/textures/8k_earth_nightmap.jpeg'
import {useRef} from "react";

const Earth=()=>{
    const [colorMap,normalMap, specularMap, cloudsMap]=useLoader(
        TextureLoader,
        [EarthDay, EarthNormalMap, EarthSpecularMap, EarthCloudMap])

    const earthRef=useRef()
    const cloudsRef=useRef()
    useFrame(({clock})=>{
        const elapsedTime=clock.getElapsedTime()
        earthRef.current.rotation.y=elapsedTime/6
        cloudsRef.current.rotation.y=elapsedTime/6
    })

    return(
        <>
            {/*<ambientLight intensity={0.6}/>*/}
            <pointLight color='#f6f3ea' position={[0,2,2]} intensity={1.2}/>
            <Stars
                radius={300}
                depth={60}
                count={2000}
                factor={7}
                saturation={0}
                speed={10}
                fade/>
            <mesh ref={cloudsRef}>
                <sphereGeometry args={[1.004,32,32]}/>
                <meshPhongMaterial
                    map={cloudsMap}
                    opacity={0.4}
                    depthWrite={true}
                    transparent={true}
                    side={THREE.DoubleSide}/>
            </mesh>
            <mesh visible userData={{ hello: 'world' }} ref={earthRef}>
                <sphereGeometry args={[1,32,32]}/>
                <meshPhongMaterial specularMap={specularMap}/>
                <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7}/>
                <OrbitControls
                    enableZoom
                    enableDamping
                    enableRotate
                    enablePan
                    zoomSpeed={0.6}
                    panSpeed={0.5}
                    rotateSpeed={0.4}
                    dampingSpeed={0.4}
                />
            </mesh>
        </>
    )
}

export default Earth
