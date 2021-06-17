import React from 'react';
import GlobalStyles from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  <GlobalStyles/>
  </>
)
 


export default App;
