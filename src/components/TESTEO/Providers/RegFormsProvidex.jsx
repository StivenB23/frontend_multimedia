import { createContext, useContext, useReducer } from "react";

const RegFormContext = createContext();

export const useRegFormcontext = () => {
  return useContext(RegFormContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USER_INFO": {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...action.data,
        },
      };
    }

    case "CHANGE_PERCENT": {
      return { ...state, percent: action.data.percent };
    }
  }
  return state;
};

export const RegFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { percent: 0 });
  return (
    <RegFormContext.Provider value={[state, dispatch]}>
      {children}
    </RegFormContext.Provider>
  );
};
