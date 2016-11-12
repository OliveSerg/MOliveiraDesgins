import React from 'react';
import images from "../images/images.js";
import THREE from "three";
import OBJLoader from "three-obj-loader";
OBJLoader(THREE);
import React3 from "react-three-renderer";

export default class Modeling extends React.Component {
    constructor(props){
        super()
        const id = props.params.id ? props.params.id : null;
        this.cameraPosition = new THREE.Vector3(0,0,5)
        this.manager = new THREE.LoadingManager()
        this.manager.onProgress = function(item, loaded, total){
            console.log(item, loaded, total)
        }
        this.manager.onError = function(error){
            console.log(error)
        }
        this.loader = new THREE.OBJLoader(this.manager)
        this.state = {
            images: images.modeling,
            id,
        }
    }

    componentDidMount(){
        this.loader.load('../images/LemmyKart.obj', (object)=>{
            console.log(object)
            for(let child of object.children){
                child.material.side = THREE.DoubleSide
            }
            object.position.z = -100
            this.refs.object.add(object)
        })
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
        const width = window.innerWidth;
        const height = window.innerHeight;

        return (
            <React3 clearColor={0xffffff} mainCamera="camera" width={width} height={height}>
                <scene>
                    <perspectiveCamera name='camera' fov={75} aspect={width /height} near={0.1} far={1000} position={this.cameraPosition}/>
                    <object3D ref='object' />
                </scene>
            </React3>
        );
                
    }
}
