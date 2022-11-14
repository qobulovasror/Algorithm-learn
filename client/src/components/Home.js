import React, { Component } from "react";
import TextWriter from './TextWriter';
import AlgoModalWin from "./algoModalWin";
import Category from "./categoryCom/Category";


class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {changeAlgoWin: "", algoModal: false}
  }
  // componentDidMount(){

  // }
  
  handleChangeAlgo = (changeAlgo)=>{
    this.setState({algoModal:true, changeAlgoWin: changeAlgo})
  }
  handleCloseAlgo = ()=>{
    this.setState({algoModal: false})
  }
    
  render() {
    let algo = "";
    if(this.state.algoModal) {
      algo = <AlgoModalWin changeAlgo={this.state.changeAlgoWin}  closeModal={this.handleCloseAlgo}/>
    }

    return (
      <>
        <div className="slider">
          <div className="back-fon">
            <div className="conatiner">
              <div className="slider-title">
                <h1>Xush kelibsiz</h1>
                <h2>
                  Algorithm.uz saytiga. Bu sayt orqali siz kerakli algoritm{" "}
                  <span className="titleList">
                    <TextWriter speed={80}/>
                  </span>{" "}
                  munkin !
                </h2>
              </div>
              <a href="#category" className="start">
                Boshlash
              </a>
            </div>
          </div>
        </div>
        <Category 
          changeAlgo={this.handleChangeAlgo}/>
          {algo}
        <footer>
          <span>
            Powerid by
            <a
              target="_blank"
              href="https://github.com/qobulovasror/"
              rel="noreferrer"
            >
              Qobulov Asror
            </a>
          </span>
        </footer>
      </>
    );
  }
}

export default Home;
