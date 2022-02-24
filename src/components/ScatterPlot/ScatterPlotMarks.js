const ScatterPlotMarks = ({data, xScale, yScale, xValue, yValue, markFormat, circleRadius, innerHeight}) =>  
data.map((d, idx) => (
    <circle 
      key={idx}
      className={`${d.species}`}
      cx={xScale(xValue(d))}
      cy={innerHeight - yScale(yValue(d))}
      r={circleRadius}
    >
      <title> {d.species} Sepal Length: {markFormat(xValue(d))}, Sepal Width: {markFormat(yValue(d))}</title>
    </circle>
  )
)

export default ScatterPlotMarks