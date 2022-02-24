import {NavLink, useHistory} from 'react-router-dom'

const Header = () => {
  const history = useHistory()

  const handleHomeClick = () => {
    history.push('/')
  }

  return (
    <div id='navContainer'>
      <div>
        <h1 onClick={handleHomeClick}>jon's d3.js</h1>
      </div>
      <nav>
        <NavLink className="headerLink" to='/'>Welcome</NavLink>
        <NavLink className="headerLink" to='/barChart'>Bar Chart</NavLink>
        <NavLink className="headerLink" to='/scatterPlot'>Scatter Plot</NavLink>
        <NavLink className="headerLink" to='/sankeyChart'>Sankey Chart</NavLink>
      </nav>
    </div>
  )
}

export default Header