import React, { Component } from "react";

class LifeCycleComponent extends Component {
    // 함수형 컴포넌트가 클래스형 컴포넌트보다 선언하기 편하다.
    // 모던자바스크립트 이후 클래스가 생기고 기존에 만든 것들을 상속 받을 수 있게 됐다.
    // 클래스형 컴포넌트가 함수형 컴포넌트보다 메모를 더 차지한다.
    // 프로젝트 빌 후 배포할 때 함수형 컴포넌트가 파일크기가 더 작다
    // 리액트에서는 클래스형 컴포넌트보다 함수형 컴포넌트를 권장한다.

    state = {
        number: 0,
        color: null,
    };

    // 생성자
    // 부모에게 상속을 받기 위해서 사용한다.
    // 부모는 Component
    // 여기서 상속된 this 값들을 모두 받아온다.

    constructor(props) {
        super(props);
        console.log(props);
    }

    colorRef = null;

    onClickToIncrease = () => {
        this.setState({
            number: this.state.number + 1,
        });
    };

    // static : 정적메소드로 프로토타입에 연결되지 않는다.
    // 클래스 인스턴스에서 호출한다.
    // getDerivedStateFromProps static 키워드를 붙여서 사용해야한다.
    // 이유는 virtual DOM에서 사용해야하기 때문이다.
    // 그래서 LifeCycleComponents가 사용되면 안된다.
    // 처음부터 준비가 되어있어야 한다.

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps", nextProps, prevState);
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color };
        }
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount" + "마운트 직후");
    }

    // 다음 라이프사이클 메소드로 이동할 지, 멈출 지를 결정한다.
    // getDerivedStateFromProps 업데이트 발생했고
    // 이미 변경되어 있는 상태에서 prevProps가 아닌
    // 변경될 nextState를 볼 수 있다.
    shouldComponentUpdate(nextProps, nextState) {}

    render() {
        return (
            <div>
                <div
                    ref={(element) => (this.colorRef = element)}
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: this.state.color,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <h1>{this.state.number}</h1>
                </div>
                <button onClick={this.onClickToIncrease}>더하기 버튼</button>
            </div>
        );
    }
}

export default LifeCycleComponent;
