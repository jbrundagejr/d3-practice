const AxisLeft = ({yScale, innerWidth, tickFormat, innerHeight}) => (
  yScale.ticks().map(tickValue => (
    <g key={tickValue} className="tick">
      <line
        y1={innerHeight - yScale(tickValue)}
        x2={innerWidth}
        y2={innerHeight - yScale(tickValue)}
        stroke="black"
      />
      <text transform={`translate(0, ${innerHeight - yScale(tickValue)})`}>{tickFormat(tickValue)}</text>
    </g>
    )
  )
)

export default AxisLeft