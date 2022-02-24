import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Welcome from './components/welcome'
import BarChart from './components/BarChart/BarChart'
import ScatterPlotChart from './components/ScatterPlot/ScatterPlotChart'
import SankeyChart from './components/SankeyChart/sankeyChart'

const App = () => {
  
  return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Welcome />
          </Route>
          <Route exact path='/barChart'>
            <BarChart />
          </Route>
          <Route exact path='/scatterPlot'>
            <ScatterPlotChart />
          </Route>
          <Route exact path='/sankeyChart'>
            <SankeyChart />
          </Route>
        </Switch>
      </div>
  )
}

export default App;