import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {BrowserRouter,Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  pageSize=5;
  state={
    progress:0
  }
 setProgress=(progress)=> {
  this.setState({progress:progress}
  )
 }
  render() {
    return (
    <div>
      <BrowserRouter>  
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={20}
        onLoaderFinished={() => this.setProgress(this.state.progress)}
      />
      <Routes>
      <Route path="/" element={<News setProgress={this.setProgress} key="general" page size={6} country ="in" category="general"/>}></Route>
      <Route path="business" element={<News setProgress={this.setProgress} key="business" page size={6} country ="in" category="business"/>}></Route>
      <Route path="entertainment" element={<News setProgress={this.setProgress} key="entertainment"page size={6} country ="in" category="entertainment"/>}></Route>
      <Route path="health" element={<News setProgress={this.setProgress} key="health" page size={6} country ="in" category="health"/>}></Route>
      <Route path="scinece" element={<News setProgress={this.setProgress} key= "science" page size={6} country ="in" category="science"/>}></Route>
      <Route path="sport" element={<News setProgress={this.setProgress} key ="sport" page size={6} country ="in" category="sport"/>}></Route>
      <Route path="technology" element={<News setProgress={this.setProgress} key ="technology" page size={6} country ="in" category="technology"/>}></Route>
      {/* <Route path="" element={<News setProgress={this.setProgress} page size={5} country ="in" category="general"/>}></Route> */}
      
      </Routes>
      </BrowserRouter>
      {/* <Navbar/> */}
      {/* <News setProgress={this.setProgress} page size={5} country ="in" category="general"/> */}
      </div>
    );
  }
}
