import React, {Component} from "react";

class AlgorithmData extends Component {
    constructor(props){
      super(props);
      this.state = {}
    }
    
    itemChangeAlgoWin = (e)=>{
      if(e.target.className==="items")
        this.props.changeAlgo(e.target.firstChild.id);
      else if(e.target.id==="")
        this.props.changeAlgo(e.target.previousSibling.id);
      else
        this.props.changeAlgo(e.target.id);
    }
    render() { 
      let searchItem = this.props.searchItem;
      const data = []
      this.props.algoData.forEach(item=>{
        if(item.name.toLowerCase().indexOf(searchItem.toLowerCase())===-1)
          return
        data.push(item)
      })
        return (
          <>
            {data.map((item) => (
                <li 
                  className="items" 
                  key={item._id}
                  onClick={this.itemChangeAlgoWin}
                  >
                  <h4 id={item._id}>{item.name}</h4>
                  <p>{item.shortInfo}</p>
                </li>
              ))}
          </>
        );
    }
}
 
export default AlgorithmData;