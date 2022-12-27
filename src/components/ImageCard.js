import React from 'react'

class ImageCard extends React.Component{
    constructor(props){
        super(props)
        this.state= {spans: 0}
        this.imageRef = React.createRef()
    }
    componentDidMount(){
        // console.log(this.imageRef);
        // console.log(this.imageRef.current.clientHeight)
        // in this case i am trying to access clientHeight before its loading!

        this.imageRef.current.addEventListener('load', this.setSpans)
    }
    setSpans = ()=>{
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10)
        this.setState({spans: spans})
    }

    render(){
        return (
            <div style={{gridRowEnd: `spans ${this.state.spans}`}}>
                <img 
                    ref={this.imageRef}
                    src={this.props.image.urls.small} 
                    alt={this.props.image.description}
                />
            </div>
          )
    }
}
export default ImageCard