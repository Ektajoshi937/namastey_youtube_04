import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import store from './utils/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
       <div className="App">
      <Head/>
      <Body/>
    </div>
    </Provider>
   
  );
}

export default App;
