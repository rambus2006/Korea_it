import React, { useState } from 'react';

// useState

const Count = () => {
    
    // 상태를 바꿀때는 setter메서드로만 상태를 변경할 수 있다.
          //변수     //메서드           //초기값
    const [result, setResult] = useState(0)

    const increase = () => {
        setResult(result + 1)
    }

    // 22분 풀어보자!

    // 버튼눌렀을 때 decreate 함수가 실행

    const decreate = () => {
        console.log("이벤트 추가 되었음😁")
        // result - 1
        // setter 메서드를 통해서 전달해줘야한다.
        setResult( result - 1)
    }
 
    const style = {
        width: "300px",
        margin: "0 auto",
        textAlign : "center"
    };


    return (
        <div style={style}>
            <p>{result}</p>
            <div><button onClick={increase}>증가</button></div>
            <div><button onClick={decreate}>감소</button></div>
        </div>
    );
};

export default Count;