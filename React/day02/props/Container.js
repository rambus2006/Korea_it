import React from 'react';
import Component01 from './Component01';
import Component02 from './Component02';

const Container = () => {

    const name = "김세환";

    // 스타일 color:red로 넘겨주기 실습

    return (
        <div>
            <Component01 name={name} />
            <Component02>
                <span>자식 요소를 받을 수 있다.</span>
            </Component02>
        </div>
    );
};

export default Container;