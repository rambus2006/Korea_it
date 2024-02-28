 import React, { useRef, useState } from 'react';
 
// 빨간색 버튼을 누르면 글자가 빨갛게
// 파란색 버튼을 누르면 글자를 파랗게
// 핑크색을 입력 시 글자의 색깔을 없앤다.

 const Color = () => {

    const [result, setResult] = useState("")
    const [color, setColor] = useState("");

    // result value 값 확인
    const onResult = (e) => {
        console.log(e.target.value)
        if(e.target.value === "핑크색"){
            setColor("")
        }
        setResult(e.target.value)
    }

    const colorRed = () => { 
        return setColor("red")
    }

    const colorBlue = () => {
        return setColor("blue")
    }

    const inputRef = useRef()
    const textReset = () => {
        console.log(inputRef)
        inputRef.current.value = "";
     }

    return (
        <div>
            <p style={{color}}>{result}</p>
            {/* ref={ (element) => {inputRef[0] = } element} */}
            <input type="text" placeholder='색깔을 입력하세요.' onChange={onResult} ref={inputRef}/>
            <button onClick={colorRed}>빨간색 버튼</button>
            <button onClick={colorBlue}>파란색 버튼</button>
            <button onClick={textReset}>값 초기화</button>
        </div>
    );
 };
 
 export default Color;