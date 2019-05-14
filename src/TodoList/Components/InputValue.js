import React, { Component, Fragment } from "react";
import { Input, Button, message } from "antd";
import { connect } from "react-redux";
import * as actionCreators from "../store/actionCreators";

class InputValue extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { inputValue, addInputValue, selectInputValue } = this.props;
    return (
      <Fragment>
        <Input
          style={{ width: "500px", marginRight: "20px" }}
          placeholder="to do list"
          onChange={e => this.props.getInputValue(e)}
          value={inputValue}
        />
        <Button
          type="primary"
          style={{ marginRight: "20px" }}
          onClick={() => addInputValue(inputValue)}
        >
          新增
        </Button>
        <Button type="primary" onClick={() => selectInputValue(inputValue)}>
          搜索
        </Button>
      </Fragment>
    );
  }
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue
  };
};

// 映射dispatch到props上
const mapDispatchToProps = dispath => {
  return {
    // 获取输入框内容
    getInputValue(params) {
      const value = params.target.value;
      dispath(actionCreators.getInputValueAction(value));
    },
    // 新增
    addInputValue(inputValue) {
      if (!inputValue) return message.warning("请输入新增内容");
      dispath(actionCreators.addInputValueAction());
    },
    // 搜索
    selectInputValue(inputValue) {
      dispath(actionCreators.selectInputValueAction(inputValue));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputValue);
