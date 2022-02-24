import {useState, useEffect} from 'react'
import {csv, scaleLinear, scaleBand, max, format} from 'd3'
import BarChartAxisLeft from './BarChartAxisLeft'
import BarChartAxisBottom from './BarChartAxisBottom'
import BarChartMarks from './BarChartMarks'
import {Loader} from 'semantic-ui-react'

const BarChart = () => {
  const width = 1500
  const height = 844
  const margin = {top: 40, right: 40, bottom: 40, left: 40}

  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const csvURL = "https://raw.githubusercontent.com/govex/COVID-19/master/data_tables/vaccine_data/global_data/time_series_covid19_vaccine_global.csv"

  const useData = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
      const row = d => {
        d.Doses_Admin = +d.Doses_admin
        d.People_Fully_Vaccinated = +d.People_fully_vaccinated
        return d
      }
      csv(csvURL, row).then(data => {
        setData(data.filter(d => {
          return (d.Report_Date_String === '2021-06-01')
        }).slice(0, 15))
      })
    }, [])
    return data
  }
  const data = useData()

  if(!data){
    return <Loader active inline='centered' />
  }

  const xValue = d => d.Country_Region
  const yValue = d => d.People_Fully_Vaccinated

  const xScale = scaleBand()
    .domain(data.map(xValue))
    .range([0, innerWidth])
    .paddingInner(.2)
  
  const yScale = scaleLinear()
    .domain([0, max(data, yValue)])
    .range([0, innerHeight]) 

  return (
    <div className="chartContainer">
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <BarChartAxisBottom xScale={xScale} innerHeight={innerHeight} />
          <BarChartAxisLeft 
            yScale={yScale} 
            innerWidth={innerWidth}
            innerHeight={innerHeight} 
            tickFormat={n => format('.2s')(n)}/>
          <text x={innerWidth /2} y={-5} className="axisLabel">Number of People Fully Vaccinated Against COVID-19 as of 6/1/2021</text>
          <BarChartMarks 
            data={data} 
            xScale={xScale} 
            yScale={yScale} 
            innerHeight={innerHeight}
            xValue={xValue}
            yValue={yValue}
            markFormat={n => format(',')(n)}
            />
        </g>
      </svg>
    </div>
  )
}

export default BarChart