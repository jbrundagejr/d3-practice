const ScatterPlotAxisLeft = ({yScale, innerWidth, tickOffset = 3}) => 
  yScale.ticks().map((tickValue, idx) => (
    <g className="tick" transform={`translate(0, ${yScale(tickValue)})`}>
      <line x2={innerWidth} />
      <text
        key={idx}
        className="countryTick"
        x={tickOffset}
        dy=".32em"
      >
        {tickValue}
      </text>
    </g>
  )
)

export default ScatterPlotAxisLeft