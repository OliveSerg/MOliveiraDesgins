import React from 'react';
import images from "../images/images.js";
import THREE from "three";
import OBJLoader from "three-obj-loader";
OBJLoader(THREE);
import MTLLoader from "three-obj-loader";
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
        this.texture = new THREE.Texture()
        this.imgLoader = new THREE.ImageLoader(this.manager)
        this.loader = new THREE.OBJLoader(this.manager)
        this.state = {
            images: images.modeling,
            id,
        }
    }

    componentDidMount(){
        this.imgLoader.load('../images/Kart_Texture.png', (image)=> {
            console.log(image)
            this.texture.image = image
            this.texture.needsUpdate = true
            console.log(this.texture) 
            this.loader.load('../images/LemmyKart.obj', (object)=>{
                object.traverse((child)=>{
                    if(child instanceof THREE.Mesh){
                        child.material.color = new THREE.Color(0.2,0.2,0.2)
                        child.material.map = this.texture
                        console.log(child)
                    }
                })
                object.position.z = -100
                this.refs.object.add(object)
                console.log(object)
            })
        })
    }

    makeImgComp(array, folder){
        return array.map((image, index)=>{
            var source = image.source
            return <div className='gallery-item'><img id={folder + index} src={source}/><p className='caption hidden'>{image.caption}</p></div>
        })
    }

    movePerspective(ev){
        console.log(ev)
        console.log(ev.clientX)
    }

    render(){
        const {images, id} = this.state
        const imageComponents = this.makeImgComp(images, "s")
        const width = window.innerWidth;
        const height = window.innerHeight;

        return (
            <React3 clearColor={0xffffff} mainCamera="camera" width={width} height={height}>
                <scene >
                    <perspectiveCamera name='camera' fov={75} aspect={width /height} near={0.1} far={1000} position={this.cameraPosition}/>
                    <ambientLight color={0x404040} intensity={25}/>
                    <object3D ref='object' />
                </scene>
            </React3>
        );
                
    }
}
