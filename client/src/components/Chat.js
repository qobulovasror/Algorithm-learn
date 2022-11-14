import React, { Component } from 'react';
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <div className="chat">
                    <div className="conatiner">
                        <div className="row">
                            <div className="chats-nav">
                                <input type="search" name="searchChat" id="searchChat" placeholder="Qidirish"/>
                                <ul className="chatsList">
                                    <li className="chatItem">Asosiy Chat </li>
                                </ul>
                            </div>
                            <div className="mainChat column">
                                <div className="chatHeader row">
                                    <img src="./img/fave-icon.jpg" alt=""/>
                                    <div className="chatTitle">Asosiy Chat</div>
                                </div>
                                <ul className="chatBody column">
                                    <li className="msg res row">
                                        <img src="./img/user-icon.jpg" alt="msg Img"/>
                                        <div className="text column">
                                        <span className="userName">User</span>
                                        <p>Salom</p>
                                        </div>
                                    </li>
                                    <li className="msg req row">
                                        <img src="./img/user-icon.jpg" alt="msg Img"/>
                                        <div className="text column">
                                        <span className="userName">Asror</span>
                                        <p>Salom</p>
                                        </div>
                                    </li>
                                    <li className="msg req row">
                                        <img src="./img/user-icon.jpg" alt="msg Img"/>
                                        <div className="text column">
                                        <span className="userName">Asror</span>
                                        <p>Salom</p>
                                        </div>
                                    </li>
                                    <li className="msg req row">
                                        <img src="./img/user-icon.jpg" alt="msg Img"/>
                                        <div className="text column">
                                        <span className="userName">Asror</span>
                                        <p>Salom</p>
                                        </div>
                                    </li>
                                    <li className="msg req row">
                                        <img src="./img/user-icon.jpg" alt="msg Img"/>
                                        <div className="text column">
                                        <span className="userName">Asror</span>
                                        <p>Salom</p>
                                        </div>
                                    </li>
                                    <li className="msg req row">
                                        <img src="./img/user-icon.jpg" alt="msg Img"/>
                                        <div className="text column">
                                        <span className="userName">Asror</span>
                                        <p>Salom</p>
                                        </div>
                                    </li>
                                    <li className="msg req row">
                                        <img src="./img/user-icon.jpg" alt="msg Img"/>
                                        <div className="text column">
                                        <span className="userName">Asror</span>
                                        <p>Salom</p>
                                        </div>
                                    </li>
                                    <li className="msg req row">
                                        <img src="./img/user-icon.jpg" alt="msg Img"/>
                                        <div className="text column">
                                        <span className="userName">Asror</span>
                                        <p>Salom</p>
                                        </div>
                                    </li>
                                    <li className="msg req row">
                                        <img src="./img/user-icon.jpg" alt="msg Img"/>
                                        <div className="text column">
                                        <span className="userName">Asror</span>
                                        <p>Salom</p>
                                        </div>
                                    </li>
                                    <li className="msg req row">
                                        <img src="./img/user-icon.jpg" alt="msg Img"/>
                                        <div className="text column">
                                        <span className="userName">User 1</span>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quod non a laborum doloremque eaque, officia maxime. Est aspernatur distinctio blanditiis incidunt? Necessitatibus delectus ab neque laborum nulla ducimus nobis.
                                        </p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="mesgSend row">
                                    {
                                        (this.props.username!=="")?  (<>
                                            <input type="text" placeholder="Xabar ..." />
                                            <button className="btn">Send</button>
                                        </>): (
                                            <div style={{
                                                width: "100%", border: "1px solid rgb(0, 0, 0)",
                                                borderRadius: "10px", padding: "7px",
                                                textAlign: "center"
                                            }}>Chatda yozish uchun ro'yxatdan o'ting.</div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <footer>
                    <span>
                        Powerid by {" "}
                        <a target="_blank" href="https://github.com/qobulovasror/" rel="noreferrer">
                            Qobulov Asror
                        </a>
                    </span>
                </footer>
            </>
         );
    }
}
 
export default Chat;