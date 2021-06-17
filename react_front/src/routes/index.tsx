import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../page/Home'

const Routes: React.FC = () => (
    <Switch>
      <Route path='/home/:id' exact component={Home} />
    </Switch>
  )
  
  export default Routes