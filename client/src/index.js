import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


// import React from 'react';
// import axios from 'axios';
// class App extends React.Component {
//     state = { data: "none data" }
//     componentDidMount(){
//         axios.get('/api/category')
//         // .then(res=>this.setState({data: res.data}))
//         .then(res=>console.log(res.data))
//         .catch(ex=>{
//             console.log(ex);
//         });
//   }
//   render() { 
//     return ( 
//         <>
//           <h1>{this.state.data}</h1>
//         </>
//      );
//   }
// }
