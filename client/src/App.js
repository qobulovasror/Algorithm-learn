import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Regs,Login } from "./components/Regs";
import About from "./components/About";
import Chat from "./components/Chat";
import Contact from "./components/Contact";
import Home from "./components/Home";
import CreateAlgo from "./components/CreateAlgo";
import Profil from "./components/Profil";

class App extends Component {
  state = {
    regsWin: "", 
    responMenuStyle: "none",
    menuIcon: "img/menu-icon.png",
    userName: ""
  }

  isRegsHandle = (userName)=>{
    this.setState({ userName: userName });
  }

  closeRegs = ()=>{
    this.setState({ regsWin: "" })
  }
  regsChange = (e)=>{
    if(e.target.className==="btn-login"){
      this.setState ({
        regsWin: <div className="regWin">
          <div className="closeWin" onClick={this.closeRegs}>x</div>
            <Login retUsername={this.isRegsHandle} urlRegs={this.regsChange}/>
        </div>
      })
    }
    else{
      this.setState({ 
        regsWin :<div className="regWin">
          <div className="closeWin" onClick={this.closeRegs}>x</div>
            <Regs retUsername={this.isRegsHandle} urlRegs={this.regsChange}/>
        </div>
      })
    }
  }
  resMenuAct = ()=>{
    if(this.state.responMenuStyle === "none" )
      this.setState({ 
        responMenuStyle: "block",
        menuIcon: "img/x-icon.png"
      });
      else
      this.setState({ 
        responMenuStyle: "none",
        menuIcon: "img/menu-icon.png"
      });
    
  }
  render() {
    let profilBody = "";
    if (this.state.userName==="") {
      profilBody =<> <div className="btn" onClick={this.regsChange}>Ro'yxatdan o'tish</div> 
        | <div className="btn-login" onClick={this.regsChange}> Kirish </div> </>
    }else{
      profilBody = <div className="userName">{" "}{this.state.userName}
        <ul> 
          <li className="createAlgo"> <Link to="/me">profil sozlanmalari</Link> </li>
          <li className="createAlgo"><Link to="/create">algorithm yaratish</Link> </li>
        </ul>
      </div>
    }
    return (
      <>
        <BrowserRouter>
          <header>
            <div className="container">
              <div className="nav row between">
                <Link to="/" className="logo">
                  Algorithm.uz
                </Link>
                <ul className="row">
                  <li className="targetNav">
                    <Link to="/">Bosh sahifa </Link>
                  </li>
                  <li>
                    <Link to="/about">Biz haqimizda</Link>
                  </li>
                  <li>
                    <Link to="/chat">Chat</Link>
                  </li>
                  <li>
                    <Link to="/contact">Bog'lanish</Link>
                  </li>
                </ul>
                <div className="profil row">
                  {profilBody}
                </div>
                <div className="resMenu">
                  <img src={this.state.menuIcon} onClick={this.resMenuAct} alt="menu icon" />
                </div>
              </div>
              <div className="respNav" style={{display: this.state.responMenuStyle}}>
                <ul className="row" >
                    <li className="targetNav">
                      <Link to="/">Bosh sahifa </Link>
                    </li>
                    <li>
                      <Link to="/about">Biz haqimizda</Link>
                    </li>
                    <li>
                      <Link to="/chat">Chat</Link>
                    </li>
                    <li>
                      <Link to="/contact">Bog'lanish</Link>
                    </li>
                  </ul>
                  <div className="profil">
                    {profilBody}
                  </div>
              </div>
            </div>
          </header>
          {this.state.regsWin}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chat" element={<Chat username={this.state.userName} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/create" element={<CreateAlgo username={this.state.userName} />} />
            <Route path="/me" element={<Profil username={this.state.userName} />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
