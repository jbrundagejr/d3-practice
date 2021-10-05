const AxisLeft = ({yScale, innerWidth, tickFormat}) => (
  yScale.ticks().map(tickValue => (
    <g key={tickValue} className="tick" transform={`translate(0, ${yScale(tickValue)})`}>
      <line
        y1={yScale(tickValue)}
        x2={innerWidth}
        y2={yScale(tickValue)}
        stroke="black"
      />
      <text>{tickFormat(tickValue)}</text>
    </g>
    )
  )
)

export default AxisLeft