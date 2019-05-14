import * as actionTypes from "./actionTypes";
import { localGetItem } from "../../Utils/Utils";

const initInputValueAction = value => ({
  type: actionTypes.INIT_INPUT_VALUE,
  value
});

export const getInputValueAction = value => ({
  type: actionTypes.GET_INPUT_VALUE,
  value
});

export const addInputValueAction = () => ({
  type: actionTypes.ADD_INPUT_VALUE
});

export const deleteInputValueAction = value => ({
  type: actionTypes.DELETE_INPUT_VALUE,
  value
});

export const selectInputValueAction = value => ({
  type: actionTypes.SELECT_INPUT_VALUE,
  value: value + ""
});

export const clickListAction = value => ({
  type: actionTypes.CLICK_LIST,
  value
});

export const updateListValueAction = value => ({
  type: actionTypes.UPDATE_LIST_VALUE,
  value
});

export const saveListValueAction = value => ({
  type: actionTypes.SAVE_LIST_VALUE,
  value
});

export const initGetItemAction = () => {
  return dispatch => {
    let getArr = localGetItem("allList")
      ? localGetItem("allList").split(",")
      : [];
    dispatch(initInputValueAction(getArr));
  };
};
