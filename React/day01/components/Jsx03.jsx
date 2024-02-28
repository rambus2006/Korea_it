import React from 'react';

// 이름과 메세지를 넣어서 화면에 컴포넌트 출력하기
// 22분까지 4분:)

const Jsx03 = () => {

    const name = "김세환";
    const message = "리액트 정복!";

    return (
        <div>
            <p>{name}님</p>
            <p style={{ color: "blue" }}>{message}</p>
        </div>
    );
};

export default Jsx03;