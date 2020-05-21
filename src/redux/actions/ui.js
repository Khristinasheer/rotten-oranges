/**
 * @file ui.js
 * @description Dispatch UI actions here.
 */

export const UIActions = {
  SET_ATTRIBUTE: "UI_SET_ATTRIBUTE",
};

export const UI__SetTheme = () => (dispatch, getState) => {
  const useLightMode = getState().uiReducer.useLightMode;
  dispatch({
    type: UIActions.SET_ATTRIBUTE,
    key: "useLightMode",
    value: !useLightMode,
  });
};
