import React, { useState } from 'react';

// 10분

const Sound = () => {

    const style = {
        width: "300px",
        margin: "0 auto",
        textAlign : "center"
    };

    // 강아지 버튼을 눌렀을 때 "멍멍" 출력
    // 고양이 버튼을 눌렀을 때 "야옹" 출력
    const [sound, setSound] = useState("");
    
    const dogButton = () => {
        setSound("멍멍") 
    }

    const catButton = () => {
        setSound("야옹")
    }

    return (
        <div>
            <div style={style}>
                <p>{sound}</p>
                <div><button onClick={dogButton}>강아지 버튼</button></div>
                <div><button onClick={catButton}>고양이버튼</button></div>
            </div>
        </div>
    );

};

export default Sound;