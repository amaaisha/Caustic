import React, {useEffect} from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import Routes from './pages/routes/routes';
import 'rsuite/dist/styles/rsuite-default.css';
import {store,history} from './redux/store'

const {dispatch} = store;

const App = () =>{
  useEffect( ()=>{
    const init =async ()=> {
      const user = await localStorage.getItem('user');
      dispatch.user.isLoggedIn(JSON.parse(user));
    };
    init();
  },[]);
  return(
    <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>);
};


export default App;
