import React from 'react'
import ReactDom from 'react-dom'

import Header from './components/common/Header'
import List from './components/list/List'
import './index.css'


const App = () => (
  <div>
    <Header />
    <List />
  </div>
)

ReactDom.render(<App />, document.getElementById('root'))
