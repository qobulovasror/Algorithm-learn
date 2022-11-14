import React, { Component } from "react";
import axios from 'axios';

class AlgoModalWin extends Component {
  constructor(props) {
    super(props);
    this.state = {algoData:""};
  }
  componentDidMount(){
    axios.get("/api/algorithm/"+this.props.changeAlgo)
      .then(res => {
        this.setState({algoData: res.data}) 
        console.log(this.props.changeAlgo);
      })
      .catch(ex=>console.log(ex))
    // const resJson = {
    //     name: "Bubble sort algoritmi",
    //     author: "Asror Qobulov",
    //     date: "20.08.2022",
    //     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum fugiat ex ab, alias fugit natus, sed ratione at consequatur harum similique esse doloremque hic dolorum. Tenetur at non dolore.",
    //     algoCode: "code in cpp",
    //     result: "Sorted array: 1 2 4 5 8"
    // }

    // this.setState({algoData: resJson});
  }
  render() {
    return (
      <div className="algoModalWin">
        <div className="modalWin">
          <div className="close" onClick={this.props.closeModal}>x</div>
          <div className="container">
            <h2>{this.state.algoData.header}</h2>
            <div className="author">
              <b>
                Muallif : <a href="##">{this.state.algoData.author}</a>
              </b>
              <br />
              <i>Yangilangan vaqti: {this.state.algoData.date}</i>
            </div>
            <p className="info">
              <b>Algorith haqida: </b> {this.state.algoData.info} 
            </p>
            <ul className="progLang row">
              <li className="targetItem">C++</li>
              <li>JavaScript</li>
              <li>
                <del>Python</del>
              </li>
              <li>
                <del>C#</del>
              </li>
              <li>
                <del>Php</del>
              </li>
              <li>
                <del>Java</del>
              </li>
            </ul>
            <ul className="programs">
              <li className="programCode lang-cpp">
                <div className="codHeader row between">
                  <h4>index.cpp</h4>
                  <div className="copy btn">Copy</div>
                </div>
                <code>
                    <pre>
                        {this.state.algoData.code}
                    </pre>
                </code>
              </li>
              <li className="programCode lang-js">
                <div className="codHeader">
                  <h4>index.js</h4>
                </div>
                <code>
                    <pre>
                        {this.state.algoData.code}
                    </pre>
                </code>
              </li>
            </ul>
            <div className="result">
              <h3>Output</h3>
              <pre>{this.state.algoData.result}</pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlgoModalWin;
