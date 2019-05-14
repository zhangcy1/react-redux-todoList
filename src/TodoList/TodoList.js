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
    // 初始化数据
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

// 映射Redux全局的state到组件的props上
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list,
    selectList: state.selectList,
    updateListValue: state.updateListValue
  };
};

// 映射dispatch到props上
const mapDispatchToProps = dispatch => {
  return {
    // 初始化列表（从本地获取）
    initInputValue() {
      dispatch(actionCreators.initGetItemAction());
    },
    // 删除
    deleteInputValue(params) {
      dispatch(actionCreators.deleteInputValueAction(params));
    },
    // 点击列表内容，输入框聚焦并回显数据
    clickList(index) {
      dispatch(actionCreators.clickListAction(index));
    },
    // 修改数据
    updateListValueFun(e) {
      const value = e.target.value;
      dispatch(actionCreators.updateListValueAction(value));
    },
    // 修改后，鼠标失去焦点保存数据
    saveListValue(index) {
      dispatch(actionCreators.saveListValueAction(index));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
