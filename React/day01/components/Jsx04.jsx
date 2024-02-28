import React from 'react';

// if문을 사용할 수 가없다.

const Jsx04 = () => {

    const name = undefined || '김세환';
    const login = false;
    const guest = true;

    return (
        <div>
            {login && guest && (
                <div>
                    <h1>비회원으로 로그인 되었습니다.</h1>
                </div>
            )}


            {/* {조건식 ? true : false} */}
            {/* {조건식 ? (<div>true</div>) : (<div>false</div>)} */}


            {login ? (
                <div>
                    <h1>{name}님 환영합니다.</h1>
                </div>
            ) : (
                <div>
                    <h1>로그인 실패 😋</h1>
                </div>
            )

            }

        </div>
    );
};

export default Jsx04;