import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ImageCard from './ImageCard'
import './ImageList.css'

const ImageList = (props) => {

    const image = props.images.map((image)=>{
        return <>
        <ImageCard key={image.id} image={image}/>
        </>
    })

    console.log(props.images)
  return (
    <>
    <h1>ImageList</h1>
    <div className='image-list'>{image}</div>
    </>
  )
}

export default ImageList