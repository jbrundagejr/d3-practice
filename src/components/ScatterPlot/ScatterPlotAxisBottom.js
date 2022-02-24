const ScatterPlotAxisBottom = ({xScale, innerHeight, tickOffset = 3}) => (
  xScale.ticks().map(tickValue => (
    <g key={tickValue} className="tick" transform={`translate(${xScale(tickValue)}, 0)`}>
      <line y2={innerHeight}/>
      <text dy='.71em' y={innerHeight + tickOffset}>
        {tickValue}
      </text>
    </g>
    )
  )
)

export default ScatterPlotAxisBottom