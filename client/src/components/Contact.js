import React, { Component } from "react";
class Contact extends Component {
  constructor(props) {
      super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div id="contact">
          <div className="container">
            <div className="idPointer">#Bog'lanish</div>
            <div className="row between">
              <div className="item">
                <h4>Title</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  dignissimos aspernatur doloremque placeat quod nihil?
                </p>
              </div>
              <div className="item">
                <h4>Sahifalarga linklar</h4>
                <ul>
                  <li>
                    <a href="/">Bosh sahifa</a>
                  </li>
                  <li>
                    <a href="/about">Biz haqimizda</a>
                  </li>
                  <li>
                    <a href="/chat">Chat</a>
                  </li>
                  <li>
                    <a href="/contact">Bog'lanish</a>
                  </li>
                </ul>
              </div>
              <div className="item">
                <h4>Bog'lanish uchun</h4>
                <ul>
                  <li className="row">
                    <b>Gmail: </b>
                    <a
                      target="_blank"
                      href="mailto:qobulovasror0@gmail.com"
                      rel="noreferrer"
                    >
                      qobulovasror0@gmail.com
                    </a>
                  </li>
                  <li className="row">
                    <b>Tel: </b>
                    <a
                      target="_blank"
                      href="tel:+998933582827"
                      rel="noreferrer"
                    >
                      +998 (93) 358 28 27
                    </a>
                  </li>
                  <li className="row">
                    <b>Talegram: </b>
                    <a
                      target="_blank"
                      href="https://t.me/Qobulov_Asror"
                      rel="noreferrer"
                    >
                      QobulovAsror
                    </a>
                  </li>
                </ul>
              </div>
              <from className="item">
                <input type="text" placeholder="Title" />
                <textarea
                  name="feedbek"
                  id="feetbek"
                  cols="30"
                  rows="7"
                  placeholder="Enter text"
                ></textarea>
                <input type="submit" className="btn" value="Submit" />
              </from>
            </div>
          </div>
        </div>
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

export default Contact;
