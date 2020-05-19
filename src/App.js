import React from 'react';
import {Provider} from 'react-redux';
import { ThemeProvider } from 'styled-components/macro';
import Index from './screens/index';
import theme from './config/theme';

import createStore from './redux/configureStore';


const store = createStore();

// Clean up the handleTheme if you think it is necessary.
const App = () => {
  return (
    <Provider store={store} >
      <ThemeProvider theme={theme}>
        <Index/>
      </ThemeProvider>
    </Provider>
  );
}


export default App;
