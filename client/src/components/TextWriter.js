import React, { useState, useEffect } from "react";

const TextWriter = (props) => {
    const [text, setText] = useState("");
    const [idx, setIdx] = useState(1);
    const [item, setItem] = useState(0);
    const [lenZero, setLenZero] = useState(true);
    const textArr = [
        "topishingiz",
        "joylashingiz",
        "izlashingiz"
    ];

    useEffect(()=>{
        let Time = setInterval(()=>{
            writeText()
        },props.speed);
        return ()=>{clearInterval(Time)}
    })

    const writeText = ()=>{
        if(lenZero){
            setText(textArr[item].slice(0,idx));
            setIdx(idx+1)
            if(idx > textArr[item].length){
                setLenZero(false);
            }
        }else{
            setText(textArr[item].slice(0,idx));
            setIdx(idx-1)
            if(idx === 1){
                setLenZero(true);
                if(item+1===textArr.length)
                    setItem(0)
                else setItem(item+1)
            }
        }
        
    }
  return (
    <>
      {text}
    </>
  );
};
export default TextWriter;
