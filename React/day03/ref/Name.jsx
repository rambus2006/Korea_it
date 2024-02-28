import React, { useRef, useState } from 'react';

const Name = () => {

    // 사용자가 입력한 이름을 P태그에 실시간으로 작성하도록 구현하고 // setResult

    // nameRef, inputRef 사용
    // 버튼을 클릭하면 이름 뒤에 p태그 뒤에 "님"이 붙도록 구현한다. 
    // 10분
    const [result, setResult] = useState("");
    const pRef = useRef();
    const inputRef = useRef();

    // 변화가 생길 때 result 값을 변경해주는 함수가 필요하다.
    const onChangeSetName = (e) => {
        // console.log(e.target.value)
        setResult(e.target.value)
    }

    // 완료 버튼 눌렀을 때 ref를 이용해서 "님을 붙여주고 싶다"

    const onClickToPutName = () => {
        setResult(pRef.current.innerText + "님");
        setResult(inputRef.current.value + "님");
        console.log(inputRef.current.value)
    }

    return (
        <div>
            <input type="text" onChange={onChangeSetName} value={result} ref={inputRef}/>
            <p ref={pRef}>{result}</p>
            <button onClick={onClickToPutName}>완료 버튼</button>
        </div>
    );
};

export default Name;