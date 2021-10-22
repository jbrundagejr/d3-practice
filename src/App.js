import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import CurrentChart from './CurrentChart'
import BarChart from './BarChart/BarChart'
import ScatterPlotChart from './ScatterPlot/ScatterPlotChart'

const App = () => {
  
  return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/'>
            <CurrentChart />
          </Route>
          <Route exact path='/barChart'>
            <BarChart />
          </Route>
          <Route exact path='/scatterPlot'>
            <ScatterPlotChart />
          </Route>
        </Switch>
      </div>
  )
}

export default App;