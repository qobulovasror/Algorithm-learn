import React,{PureComponent} from "react";

class SearchAlgo extends PureComponent {

    handleFilterTextChange = (e)=>{
        this.props.onFilterTextChange(e.target.value);
    }

    state = {  }
    render() { 
        return ( 
            <input 
                placeholder="algorithm izlash" 
                type="search" 
                name="search" 
                value={this.props.filterText} 
                onChange={this.handleFilterTextChange}
            />
         );
    }
}
 
export default SearchAlgo;