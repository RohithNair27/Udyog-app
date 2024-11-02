import React, {useState} from 'react';
import AppStatusContext from './AppStatusContext';

const AppContextProvider = ({children}) => {
  const [loading, setLoading] = useState();
  const [networkStatus, setNetworkStatus] = useState(true);

  const changeNetworkStatus = () => {
    setNetworkStatus(!networkStatus);
  };
  const changeLoadingStatus = () => {
    setLoading(!loading);
  };

  return (
    <AppStatusContext.Provider
      value={{
        changeNetworkStatus,
        changeLoadingStatus,
        loading,
        networkStatus,
      }}>
      {children}
    </AppStatusContext.Provider>
  );
};

export default AppContextProvider;
