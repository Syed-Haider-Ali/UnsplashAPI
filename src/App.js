import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import unsplash from './api/unsplash';
// import axios from 'axios'; instead i am calling unsplash.js in which i've define axios
import Searchbar from './components/Searchbar';
// import ImageList from './components/ImageList'
import ImageList from './components/ImageList(1)'


// I will pass a callback to searchbar! in response to this callback searchbar will send input (text state) 
// to do this class is required instead functional
class App extends React.Component{

  state = {images: []}

   onSearchSubmit = async (term) =>{
    // console.log(term)
    const response = await unsplash.get('/search/photos',{
    params: {query: term}
    
    })
    // console.log(this)
    // console.log(response.data.results)
    this.setState({images: response.data.results})
  }

  render(){
    return (
      <>
      <div className='container' style={{marginTop: '10px'}}>
        <h1>App</h1>
        <Searchbar onSubmit={this.onSearchSubmit}/>
        {/* Found: {this.state.images.length} images  */}
        <ImageList images={this.state.images}/>
        </div>
      </>
    );
  }
}

export default App;
