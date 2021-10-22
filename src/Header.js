import {NavLink, useHistory} from 'react-router-dom'

const Header = () => {
  const history = useHistory()

  const handleHomeClick = () => {
    history.push('/')
  }

  return (
    <div id='navContainer'>
      <div>
        <h1 onClick={handleHomeClick}>Jon's d3.js</h1>
      </div>
      <nav>
        <NavLink className="headerLink" to='/'>Working Chart</NavLink>
        <NavLink className="headerLink" to='/barChart'>Bar Chart</NavLink>
        <NavLink className="headerLink" to='/scatterPlot'>Scatter Plot</NavLink>
      </nav>
    </div>
  )
}

export default Header