const CubeSquad=({rotation, boxGeometry, position})=>{
    return(
        <mesh position={position}  rotation={rotation}>
            <boxGeometry args={boxGeometry} />
            <meshStandardMaterial color='yellow'/>
        </mesh>
    )
}

export default CubeSquad
