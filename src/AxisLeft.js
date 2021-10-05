const AxisLeft = ({yScale, innerWidth, innerHeight}) => (
  yScale.ticks().map(tickValue => (
    <g key={tickValue} transform={`translate(0, ${yScale(tickValue)})`}>
      <line
        y1={yScale(tickValue)}
        x2={innerWidth}
        y2={yScale(tickValue)}
        stroke="black"
      />
      <text className="populationTicks">{tickValue}</text>
    </g>
    )
  )
)

export default AxisLeft