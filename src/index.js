import React from 'react'
import ReactDom from 'react-dom'

import Header from './components/common/Header'

const App = () => (
  <div>
    <Header />
    <h1>Hola</h1>
    <p>Up to date crypto currencies financial data</p>
  </div>
)

ReactDom.render(<App />, document.getElementById('root'))
