import React from 'react';
import images from "../images/images.js";
import THREE from "three";
import React3 from "react-three-renderer";

export default class Modeling extends React.Component {
    constructor(props){
        super()
        const id = props.params.id ? props.params.id : null;
        this.cameraPosition = new THREE.Vector3(0,0,5)
        this.state = {
            images: images.modeling,
            id,
            cubeRotation: new THREE.Euler()
        }
        this._onAnimate = () => {
            this.setState({
              cubeRotation: new THREE.Euler(
                    this.state.cubeRotation.x + 0.1,
                    this.state.cubeRotation.y + 0.1,
                    0
              ),
            });
        };
    }

    makeImgComp(array, folder){
        return array.map((image, index)=>{
            var source = image.source
            return <div className='gallery-item'><img id={folder + index} src={source}/><p className='caption hidden'>{image.caption}</p></div>
        })
    }

    render(){
        const {images, id} = this.state
        const imageComponents = this.makeImgComp(images, "s")
        const width = window.innerWidth; // canvas width
        const height = window.innerHeight; // canvas height

        return (<React3
                mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
                width={width}
                height={height}

                onAnimate={this._onAnimate}
                >
                <scene>
                <perspectiveCamera
                name="camera"
                fov={75}
                aspect={width / height}
                near={0.1}
                far={1000}

                position={this.cameraPosition}
                />
                <mesh
                rotation={this.state.cubeRotation}
                >
                <boxGeometry
                width={1}
                height={1}
                depth={1}
                />
                    <meshBasicMaterial
                    color={0x00ff00}
                />
                    </mesh>
                    </scene>
                    </React3>
          );
                
    }
}
