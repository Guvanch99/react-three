import {useFBX} from "@react-three/drei";
import AirBusModel from './model/airbus.fbx'
const AirbusFBX=()=>{
    let fbx = useFBX(AirBusModel)
    return <primitive object={fbx}></primitive>
}

export default AirbusFBX
