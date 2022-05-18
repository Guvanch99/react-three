import {Environment} from "@react-three/drei";
import * as THREE from "three";

const EnvironmentModule=()=>{
    return(
        <Environment background>
            <mesh>
                <sphereGeometry args={[50, 100, 100]} />
                <meshBasicMaterial color="brown" side={THREE.BackSide} />
            </ mesh>
        </Environment>
    )
}

export default EnvironmentModule
