const ScatterPlotMarks = ({data, xScale, yScale, xValue, yValue, markFormat, circleRadius }) => 
  data.map((d, idx) => (
    <circle 
      key={idx}
      className="mark"
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      r={circleRadius}
    >
      <title>{markFormat(xValue(d))}</title>
      </circle>
  )
)

export default ScatterPlotMarks