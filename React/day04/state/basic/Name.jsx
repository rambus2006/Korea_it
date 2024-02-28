import React, { useState } from 'react';

const Name = () => {
        
        // 사용자가 입력한 값을 화면에 출력해보기
        const [result, setResult] = useState("")
        // 33분까지

        const viewResult = (e) => {
            console.log(e)
            setResult(e.target.value)
        }


        

    return (
        <div>
            <p>{result}</p>
            <input type="text" onChange={viewResult} placeholder='내용을 입력하세요'/>
        </div>
    );
};

export default Name;