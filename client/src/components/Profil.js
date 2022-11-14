import React, { Component } from "react";

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="box">
          {this.props.username === "" && (
            <div
              style={{
                width: "50%",
                margin: "0 auto",
                border: "1px solid red",
                borderRadius: "10px",
                padding: "7px",
                color: "#f00",
                textAlign: "center",
              }}
            >
              Profil ma'lumotlarni ko'rish uchun ro'yxatdan o'ting.
            </div>
          )}
          <div className="container">
            <h2 className="doc">
              Assalomu alaykum {this.props.username}
              <br />
              Profil sahifasia xush kelibsiz. Bu yerda siz shaxsi ma'lumotlarni
              ko'rish va tahrirlashingiz munkin.
            </h2>
            <div className="row wrap">
              <div className="box-form">
                <h3>Shaxsiy ma'lumotlarni o'zgartirish</h3>
                <form>
                  <label for="name">Ism Familiya:</label>
                  <input type="text" name="name" id="name" value="" />

                  <label for="email">Email:</label>
                  <input type="text" name="email" id="email" value="" />
                  <input type="submit" value="Saqlash" id="logSub" />
                </form>
              </div>
              <div className="box-form">
                <h3>Maxfiylik: parolni o'zgartirish</h3>
                <form action="" method="post">
                  <label for="pass">Joriy parol:</label>
                  <input type="password" id="pass" name="pass" />

                  <label for="newPass">Yangi parol:</label>
                  <input type="password" id="newPass" name="newPass" />

                  <label for="rePass">Yangi parolni qayta kiriting</label>
                  <input type="password" id="rePass" name="rePass" />

                  <input type="submit" value="Saqlash" id="passSub" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="">

        </div>
        <footer>
          <span>
            Powerid by{" "}
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

export default Profil;
