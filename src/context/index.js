import { useTheme } from "next-themes";
import { createContext, useContext, useReducer, useMemo } from "react";

const App = createContext(null);

App.displayName = "AppContext";

function reducer(state, action) {
  switch (action.type) {
    case "SIDEBAR_STATUS": {
      return { ...state, sidebarStatus: action.value };
    }
    case "SIDEBAR_RIGHT_STATUS": {
      return { ...state, sidebarRightStatus: action.value };
    }
    case "FIXED_PLUGIN": {
      return { ...state, fixedStatus: action.value };
    }
    case "WEATHER_ALERT": {
      return { ...state, weatherAlert: action.value };
    }
    case "LAYOUT": {
      return { ...state, layout: action.value };
    }
    default: {
      throw new Error(`Error: ${action.type}`);
    }
  }
}

function AppControllerProvider({ children }) {

  const initialState = {
    sidebarStatus: false,
    sidebarRightStatus: false,
    fixedStatus: false,
    weatherAlert: true,
    layout: "weather",
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <App.Provider value={value}>{children}</App.Provider>;
}

function useAppController() {

  const context = useContext(App);

  if (!context) {
    throw new Error("useAppController should be used inside the AppControllerProvider.");
  }

  return context;
}


// Context module functions
const setSidebarStatus = (dispatch, value) => dispatch({ type: "SIDEBAR_STATUS", value });
const setSidebarRightStatus = (dispatch, value) => dispatch({ type: "SIDEBAR_RIGHT_STATUS", value });
const setFixedPluginStatus = (dispatch, value) => dispatch({ type: "FIXED_PLUGIN", value });
const setWeatherAlertStatus = (dispatch, value) => dispatch({ type: "WEATHER_ALERT", value });
const setLayout = (dispatch, value) => dispatch({ type: "LAYOUT", value });

function AppTheme() {
  const { setTheme } = useTheme();
  const nowtime = new Date();
  
  if(nowtime.getHours() >= 19 || nowtime.getHours() <= 6){
    setTheme('dark');
  }else{
    setTheme('light');
  }
};

export {
  AppControllerProvider,
  useAppController,
  setSidebarStatus,
  setSidebarRightStatus,
  setFixedPluginStatus,
  setWeatherAlertStatus,
  setLayout,
  AppTheme
};

