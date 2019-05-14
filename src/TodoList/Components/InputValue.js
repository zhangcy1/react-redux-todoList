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

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue
  };
};

const mapDispatchToProps = dispath => {
  return {
    getInputValue(params) {
      const value = params.target.value;
      dispath(actionCreators.getInputValueAction(value));
    },
    addInputValue(inputValue) {
      if (!inputValue) return message.warning("请输入新增内容");
      dispath(actionCreators.addInputValueAction());
    },
    selectInputValue(inputValue) {
      dispath(actionCreators.selectInputValueAction(inputValue))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputValue);
