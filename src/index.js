import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/common/Header'
import List from './components/list/List'
import Detail from './components/detail/Detail'
import NotFound from './components/notFound/NotFound'
import './index.css'


const App = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Switch>
        <Route path='/' component={List} exact />
        <Route path='/currency/:id' component={Detail} exact />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </BrowserRouter>
)

ReactDom.render(<App />, document.getElementById('root'))


// https://github.com/udilia/learn-react-by-building-a-web-app/tree/master/stages