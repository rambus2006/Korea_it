import React from 'react';

// age 상수에 나이 설정
// 19세 이하
// 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// + age가 짝수라면 "당첨"
// + age가 짝수아니라면 "꽝"

const Jsx05 = () => {

    const age = 20;
    const isAdult = age >= 19;
    const isEven = age % 2 === 0;
    const [pass, notPass, lucky, unLucky] = ["입장 가능", "입장 불가", "당첨😎", "꽝😥"];

    const passComponent = (<div>{pass}</div>);
    const notPassComponent = (<div>{notPass}</div>);
    const luckyComponent = (<div>{lucky}</div>);
    const unLuckyComponent = (<div>{unLucky}</div>);

    const enter = isAdult ? passComponent : notPassComponent;
    const win = isEven ? luckyComponent : unLuckyComponent;



    return (
        <div>
            <p>당신의 나이는{age}입니다.</p>
            {enter}
            {win}
        </div>
    );
};

export default Jsx05;