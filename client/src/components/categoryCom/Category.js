import React, {Component} from "react";
import axios from "axios";

import AlgorithmData from "./AlgorithmData";
import FilterAlgo from "./filterAlgo";
import SearchAlgo from "./searchAlgo";

class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterText: "", 
            changeCategory: "",
            algoItems: [
                {_id:"1", name: "Bubble sort", shortInfo: "Qatorni saralash"},
                {_id:"2", name: "Merge Sort", shortInfo: "Qatorni saralash"},
                {_id:"3", name: "Insertion Sort", shortInfo: "Qatorni saralash"},
                {_id:"4", name: "Bucket Sort", shortInfo: "Qatorni saralash"},
                {_id:"5", name: "Quick sort", shortInfo: "Qatorni saralash"}
              ]
        }
    }
    handleFilterTextChange = (filterText)=>{
        this.setState({filterText: filterText})
    }
    handleChangeCategory = (changeCategory)=>{
        axios.get("/api/algorithm"+changeCategory)
            .then(res => {
                this.setState({algoItems: res.data})
            })
            .catch(ex=>console.log(ex))
        this.setState({})
    }

    componentDidMount(){
        axios.get("/api/algorithm/")
            .then(res => {
              this.setState({algoItems: res.data})
            })
            .catch(ex=>console.log(ex))
    }

    render() { 
        return ( 
            <>
               <div id="category">
                <div className="container">
                    <div className="idPointer">#Bo'limlar</div>
                    <div className="nav-category row between">
                        <ul className="row">
                            <FilterAlgo
                                onChangeCategory={this.handleChangeCategory}
                            />
                        </ul>  
                        <div className="search ">
                            <SearchAlgo 
                                onFilterTextChange={this.handleFilterTextChange}
                            />
                        </div>
                    </div>
                    <ul className="algoriths row">
                        <AlgorithmData
                            searchItem={this.state.filterText}
                            changeAlgo={this.props.changeAlgo}
                            algoData={this.state.algoItems}
                        />
                    </ul>
                    <div className="pagenation row">
                        <div className="prev">Oldingi</div>
                        <div className="thisPage">
                            <div className="btn">1</div>
                        </div>
                        <div className="next">Keyingi</div>
                    </div>
                </div>
            </div> 
            </>
         );
    }
}
 
export default Category;