import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ImageList.css'

const ImageList = (props) => {

    const image = props.images.map((image)=>{
        return <>
       
        <div className="col-sm-4 col-md-3 py-3">
            <div className="card border-primary">
                <img key={image.id} alt={image.description} src={image.urls.regular}/>
            </div>
        </div>
    

        </>
    })

    console.log(props.images)
  return (
    <>
    <h1>ImageList</h1>
    <div className="container py-2">
    <div className="row" >
    <div >{image}</div>
    </div>
</div>
    
    </>
  )
}

export default ImageList