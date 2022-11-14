import axios from "axios";
import React,{ useState } from "react";

const validateEmail = (value)=>{
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return (value && !regex.test(value))? true : false;
}

export const Regs = (props) => {
  const [user, setUser] = useState({name: "", email: "", password: ""})
  const [invalidName, setInvalidName] = useState("")
  const [invalidEmail, setInvalidEmail] = useState("")
  const [invalidPass, setInvalidPass] = useState("")
  const [invalidRePass, setInvalidRePass] = useState("")

  const regsChangeHand = (e)=>{
    e.preventDefault();

    if(user.name!=="" && user.email!=="" && user.password!=="")
      if(!invalidName || !invalidEmail || !invalidPass || !invalidRePass ){
        axios.post('/api/user', user)
          .then(res=>{
            console.log(res.data);
            props.retUsername(res.data.name)
          })
          .catch(err=>console.log(err))
      }
  }

  const changeHandler = (e)=>{
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]: value
    })

    if(name==="username"){
      setInvalidName(()=> (value.length < 4)? true : false)
    }
    if(name==="email"){
      setInvalidEmail(()=>validateEmail(value))
    }
    if(name==="password" || name==="repass"){
      setInvalidPass(()=> (value.length < 4)? true : false)
    }
    if(name==="repass"){
      setInvalidRePass(()=> (user.password !== value)? true : false)
    }
  }

  return (
    <>
      <div className="regs">
        <h3>Ro'yxatdan o'tish</h3>
        <form method="post" onSubmit={regsChangeHand}>
          <input 
            type="text" 
            id="name" 
            name="username" 
            onChange={changeHandler} 
            placeholder="Ism"
          />
          {invalidName && (
              <div style={{ color: "red", marginTop: "-2px" }}>Name invalid</div>
            )}
          <input 
            type="email" 
            id="email" 
            name="email" 
            onChange={changeHandler}
            placeholder="Email" 
          />
          {invalidEmail && (
              <div style={{ color: "red", marginTop: "-2px" }}>Email invalid</div>
            )}
          <input
            type="password"
            id="password"
            name="password"
            onChange={changeHandler}
            placeholder="Parol"
          />
           {invalidPass && (
              <div style={{ color: "red", marginTop: "-2px" }}>Password invalid</div>
            )}
          <input
            type="password"
            id="repass"
            name="repass"
            onChange={changeHandler}
            placeholder="Parolni takrorlash"
          />
           {invalidRePass && (
              <div style={{ color: "red", marginTop: "-2px" }}>Password no equal</div>
            )}
          <br />
          <input type="submit" className="btn" value="Yuborish" />
          <p>
            Ro'yxatdan o'tgan bo'lsangiz <div className="btn-login" onClick={props.urlRegs}>kirish</div>ni bosing.
          </p>
        </form>
      </div>
    </>
  );
};

export const Login = (props) => {
  const [errMesg, setErrMesg] = useState(false);

  const [user, setUser] = useState({email: "", password: ""})
  const [invalidEmail, setInvalidEmail] = useState("")
  const [invalidPass, setInvalidPass] = useState("")

  const loginSubmitForm = (e)=>{
    e.preventDefault();
    if (user.email!=="" && user.password!=="" && !invalidEmail && !invalidPass ) {
      axios.get('/api/user', user)
        .then(res=>{
          console.log(res.data);
          props.retUsername(res.data.name)
        })
        .catch(err=>console.log(err))
    }else{
      setErrMesg(true)
    }
  }

  const changeHandle = (e)=>{
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });

    if(name==="email"){
      setInvalidEmail(()=>validateEmail(value))
    }
    if(name==="password"){
      setInvalidPass(()=>(value.length < 4)? true: false)
    }
  } 
  return (
    <>
      <div className="login">
        <h3>Tizimga kirish</h3>
        {errMesg && (
          <div className="errorTxt"> Maydonlar xato </div>
        )}
        

        <form method="post" onSubmit={loginSubmitForm}>
          <input
            type="email"
            id="name"
            name="email"
            placeholder="Email"
            onChange={changeHandle}
          />
          {invalidEmail && (
          <div style={{color: "red"}}> Email invalid </div>
        )}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Parol"
            onChange={changeHandle}
          />
          {invalidPass && (
            <div style={{color: "red", margin: "0px 0 -17px 0"}}> Password is 3 invalid </div>
          )}
          <br />
          <input type="submit" className="btn" value="Yuborish" />
          <p>
            Ro'yxatdan o'tmagan bo'lsangiz 
            <div onClick={props.urlRegs}>ro'yxatdan o'tish</div>ni
            bosing.
          </p>
        </form>
      </div>
    </>
  );
};

