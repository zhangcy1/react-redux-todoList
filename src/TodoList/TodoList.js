import React, { Component } from "react";
import { List, Input } from "antd";
import "./TodoList.css";
import { connect } from "react-redux";
import * as actionCreators from "./store/actionCreators";
import InputValue from "./Components/InputValue";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInput: "" // 标识修改列表数据
    };
  }

  componentDidMount() {
    this.props.initInputValue();
  }

  updateItem = index => {
    this.setState({
      isInput: "isInput" + index
    });
    this.props.clickList(index);
  };

  inputOnBlur = index => {
    this.setState({
      isInput: ""
    });
    this.props.saveListValue(index);
  };

  render() {
    const {
      list,
      updateListValue,
      deleteInputValue,
      updateListValueFun
    } = this.props;
    return (
      <div className="todoList">
        <InputValue />
        <List
          style={{ width: "500px", marginTop: "20px" }}
          bordered
          itemLayout="horizontal"
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <span onClick={() => deleteInputValue(item)}>删除</span>
              ]}
            >
              <div
                style={{ width: "100%" }}
                onClick={() => this.updateItem(index)}
              >
                {this.state.isInput === "isInput" + index ? (
                  <Input
                    autoFocus
                    value={updateListValue}
                    onBlur={() => this.inputOnBlur(index)}
                    onChange={e => updateListValueFun(e)}
                  />
                ) : (
                  item
                )}
              </div>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list,
    selectList: state.selectList,
    updateListValue: state.updateListValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteInputValue(params) {
      dispatch(actionCreators.deleteInputValueAction(params));
    },
    initInputValue() {
      dispatch(actionCreators.initGetItemAction());
    },
    clickList(index) {
      dispatch(actionCreators.clickListAction(index));
    },
    updateListValueFun(e) {
      const value = e.target.value;
      dispatch(actionCreators.updateListValueAction(value));
    },
    saveListValue(index) {
      dispatch(actionCreators.saveListValueAction(index));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
