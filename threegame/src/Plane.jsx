const PlaneModal=()=>{

    return(
        <mesh recieveShadow position={[0,-5,-20]} rotation={[-Math.PI / 2, 0, 1]}>
            <planeGeometry  args={[100,100]}/>
            <meshStandardMaterial color="green" />
        </mesh>
    )
}


export default PlaneModal
