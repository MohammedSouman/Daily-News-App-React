import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

export default class App extends Component {
  pageSize = 6
  apiKey = process.env.REACT_APP_NEW_API
  state = {
    mode : "light",
    textColor: "dark",
    searchKey: ""
  }

  toggleMode = () => {
    if(this.state.mode === "light") {
        this.setState({
          mode : "dark",
          textColor: "light"
        })
        document.body.style.background = "#1b1b3a"
    }
    else {
      this.setState({
        mode : "light",
        textColor: "dark"
      })
      document.body.style.background = "white"
    }
  }

  searchFunc = (e) => {
      this.setState({searchKey: e.target.previousSibling.value})
      e.target.previousSibling.value = ""
  }

  render() {
    return (
      <div>
        {/* <News mode={this.state.mode} textColor={this.state.textColor} apiKey={this.apiKey}/> */}
        <BrowserRouter>
        <Navbar toggleMode={this.toggleMode} mode={this.state.mode} textColor={this.state.textColor} apiKey={this.apiKey} searchFunc={this.searchFunc}/>
        <Routes>
          <Route path="/" element={
            <News mode={this.state.mode} textColor={this.state.textColor} apiKey={this.apiKey} key="general" pageSize={this.pageSize} category="general"/>
          }></Route>
          <Route path="/business" element={
            <News mode={this.state.mode} textColor={this.state.textColor} apiKey={this.apiKey} key="business" pageSize={this.pageSize} category="business"/>
          }></Route>
          <Route path="/entertainment" element={
            <News mode={this.state.mode} textColor={this.state.textColor} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} category="entertainment"/>
          }></Route>
          <Route path="/health" element={
            <News mode={this.state.mode} textColor={this.state.textColor} apiKey={this.apiKey} key="health" pageSize={this.pageSize} category="health"/>
          }></Route>
          <Route path="/science" element={
            <News mode={this.state.mode} textColor={this.state.textColor} apiKey={this.apiKey} key="science" pageSize={this.pageSize} category="science"/>
          }></Route>
          <Route path="/sports" element={
            <News mode={this.state.mode} textColor={this.state.textColor} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} category="sports"/>
          }></Route>
          <Route path="/technology" element={
            <News mode={this.state.mode} textColor={this.state.textColor} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} category="technology"/>
          }></Route>
          <Route path="/search" element={
            <News mode={this.state.mode} textColor={this.state.textColor} apiKey={this.apiKey} key="search" pageSize={this.pageSize} search={this.state.searchKey}/>
          }></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

