import {useRef, useState} from "react"
import {useFrame} from "@react-three/fiber";
import {useSelect, useCursor, useIntersect} from "@react-three/drei";

const BoxComponent=()=>{
    const mesh=useRef(null)
    const selected = useSelect()[0]
    const [hovered, set] = useState()
    useCursor(hovered, /*'pointer', 'auto'*/)
    useIntersect((isVisible)=>console.log('isVisible', isVisible))
    useFrame(state => {
        if(mesh&& mesh.current && selected ){
            // const time = state.clock.getElapsedTime();
            // mesh.current.position.y = mesh.current.position.y + Math.sin(time*2)/100;
            // mesh.current.rotation.y = mesh.current.rotation.x += 0.01;
             selected.position.x+=state.mouse.x
             selected.position.y=state.mouse.y
        }
    })

    return(
        <>
        <mesh onPointerOver={() => set(true)} onPointerOut={() => set(false)} ref={mesh}>
                <spotLight position={[10, 10, 10]} />
                <pointLight position={[-10, -10, -10]} />
                <boxGeometry position={[-32, 32, 32]} />
                <meshStandardMaterial color={'orange'}/>

                {/*<boxGeometry position={[1, 0, 0]} />*/}
        </mesh>
            <mesh ref={mesh} >
                <spotLight position={[10, 10, 10]} />
                <pointLight position={[-10, -10, -10]} />
                <boxGeometry position={[-32, 32, 32]} />
                <meshStandardMaterial color={'red'}/>

                {/*<boxGeometry position={[1, 0, 0]} />*/}
            </mesh>
        </>
    )
}

export default BoxComponent
