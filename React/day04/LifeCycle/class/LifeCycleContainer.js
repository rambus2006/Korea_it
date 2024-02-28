import React, { Component } from "react";
import LifeCycleComponent from "./LifeCycleComponent";

// 랜덤 컬러로 만들기
const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

class LifeCycleContainer extends Component {
    state = {
        color: "#000000",
    };

    onClickToChangColor = () => {
        this.setState({
            color: getRandomColor(),
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.onClickToChangColor}>
                    색상변경 버튼
                </button>
                <LifeCycleComponent color={this.state.color} />
            </div>
        );
    }
}

export default LifeCycleContainer;
