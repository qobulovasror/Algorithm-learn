import React, { Component } from 'react';
// import '../style/inAlgo.css'
class CreateAlgo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <div className="box1">
                    <div className="container">
                        <h2>Algorithm kiritish</h2>
                        <form>
                            <label for="title">
                                <h3>Sarlavha</h3>
                            </label>
                            <input type="text" id="title" placeholder="Sarlavha" name="name" />
                            
                            <label for="algoType">
                                <h3>Algorithm turi</h3>
                            </label>
                            <select name="algoType">
                                <option>Math</option>
                                <option>Sort</option>
                                <option>Search</option>
                                <option>Other</option>
                            </select>

                            <label for="intoText">
                                <h3>Qisqacha vazifasi</h3>
                            </label>
                            <input 
                                type="text" 
                                name="intoText" 
                                id="intoText"   
                                maxlength="20"
                                placeholder="masalan: massiv saralash"/>
                            <div className="text-box">
                                <label for="algoInfo">
                                    <h3>Algorithm haqida</h3>
                                </label>
                                <textarea name="algoInfo" id="algoInfo" placeholder="Algorithm haqida...">

                                </textarea>
                            </div>

                            <div className="text-box">
                                <label for="algo">
                                    <h3>Algorithm</h3>
                                </label>
                                <textarea name="text" id="algo" placeholder="Algorithm"></textarea>
                            </div>
                            {
                                (this.props.username!=="")? (
                                    <div className="btn" id="forsubbtn">Yuborish</div>
                                ) : (
                                    <div style={{
                                        width: "100%", border: "1px solid rgb(0, 0, 0)",
                                        borderRadius: "10px", padding: "7px",
                                        textAlign: "center"
                                    }}>Algoritm kiritish yozish uchun ro'yxatdan o'ting.</div>
                                )
                            }
                        </form>
                    </div>
                </div>
            </>
         );
    }
}
 
export default CreateAlgo;