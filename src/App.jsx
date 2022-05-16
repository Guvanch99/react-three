import { useRef, useState, Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from "@react-three/drei";
import './App.css'
import Model from "./assets/shoe/Shoe";
const App=()=>{
    const [mesh, setMesh]=useState("#ffffff")
    const [stripes, setStripes]=useState("#ffffff")
    const [soul, setSoul]=useState("#ffffff")

    return(
        <div className="wrapper">
            <div className="card">
                <div className="product-canvas">
                        <Canvas>
                            <Suspense fallback={null}>
                                <ambientLight intensity={0.4}/>
                                <spotLight castShadow={true} intensity={1} angle={0.1} penumbra={1} position={[50,3000,400]}/>
                                <Model customColors={{mesh, stripes, soul}}/>
                                <OrbitControls/>
                            </Suspense>
                        </Canvas>
                </div>
                <h2>Color chooser</h2>
                <div className='colors'>
                    <div>
                        <input type="color" id="head" name="head"
                               value="#e66465" onChange={event => setMesh(event.target.value)}/>
                        <label htmlFor="head">Main</label>
                    </div>

                    <div>
                        <input type="color" id="body" name="body"
                               value="#f6b73c" onChange={event => setStripes(event.target.value)}/>
                        <label htmlFor="body">Stripes</label>
                    </div>
                    <div>
                        <input type="color" id="body" name="body"
                               value="#f6b73c" onChange={event => setSoul(event.target.value)}/>
                        <label htmlFor="body">Soul</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
