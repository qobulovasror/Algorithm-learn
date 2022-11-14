import React, { Component } from "react";
import axios from "axios";

class FilterAlgo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorBar: [
          {name: "Barchasi", className: "target", targetKey: ""},
          {name: "Qidruv", className: "", targetKey: "search"},
          {name: "Saralash", className: "", targetKey: "sort"},
          {name: "Matematik", className: "", targetKey: "math"},
          {name: "Boshqalar", className: "", targetKey: "other"},
      ]
    };
  }
  componentDidMount(){
    let catgArr = [{name: "Barchasi", className: "target", targetKey: ""}];
    axios.get('/api/category')
      .then(res=>{
        catgArr = catgArr.concat(res.data);
        this.setState({categorBar: catgArr})
      })
      .catch(ex=>console.log(ex));
  }
  handlerFilter = (e)=>{
    if(e.target.className !== "target"){
        const navArr = [];
        let obj = {}
        this.state.categorBar.forEach(item=>{
            if(e.target.innerHTML===item.name){
                obj = { name: item.name, className: "target", targetKey: item.targetKey }
                this.props.onChangeCategory(`/?type=${item.targetKey}`)
            }
            else
                obj = { name: item.name, className: "", targetKey: item.targetKey}
            navArr.push(obj);
        })
        this.setState({ categorBar: navArr })
    }
  }
  render() {
    return (
      <>
        {
            this.state.categorBar.map(item=>(
                <li 
                    onClick={this.handlerFilter} 
                    key={item.name}
                    className={item.className}
                    >
                        {item.name}
                </li>
            ))
        }
      </>
    );
  }
}

export default FilterAlgo;
