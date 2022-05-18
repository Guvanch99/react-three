import {useFrame} from "@react-three/fiber";
import {useSelect, Select} from "@react-three/drei";
import {useRef} from "react";
import {useUpdate} from 'react-use';
import {useObservableContext} from "./state/useObservable";

const velocityMove=0.003
const gameOverValue=0
const gameWinValue='-3.5'

const SphereModel=()=>{
    const sphereRef=useRef()
    let selected = useSelect()[0]
    const update = useUpdate();
    const refDoll=useObservableContext()
    useFrame((state)=>{
        if(selected &&(refDoll.current&&refDoll.current.rotation.y===gameOverValue))
        {
            alert('Game over, Try Again')
            refDoll.current.rotation.y=0
            sphereRef.current.position.z=3
            selected=null
        }
        if(selected&&refDoll.current){
            sphereRef.current.position.z-=velocityMove
        }
        if(sphereRef.current?.position.z.toFixed(1)===gameWinValue){
            alert('Win')
            refDoll.current.rotation.y=0
            sphereRef.current.position.z=3
            selected=null

        }
    })

    return(
        <mesh ref={sphereRef} position={[-1,-1,3]}>
            <sphereGeometry args={[0.2,24,24]}/>
            <meshStandardMaterial color={'red'}/>
        </mesh>
    )
}

export default ()=>
    <Select box multiple onChange={console.log} filter={items => items}>
    <SphereModel/>
    </Select>
