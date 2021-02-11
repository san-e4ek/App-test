import { Route, Switch } from 'react-router'

import { Paths } from './data'

import { Dashboard, Finalize, Results } from './Components'

import './App.scss'

export default function App() {
  return (
    <div className='app'>
      <Switch>
        <Route path={Paths.DASHBOARD} exact component={Dashboard} />
        <Route path={Paths.FINALIZE} exact component={Finalize} />
        <Route path={Paths.RESULTS} exact component={Results} />
      </Switch>
    </div>
  )
}
