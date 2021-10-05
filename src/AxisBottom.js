const AxisBottom = ({xScale, innerHeight}) => 
  xScale.domain().map((tickValue, idx) => (
      <text
        key={idx}
        y={innerHeight + 30}
        dy=".71em"
        className="countryTick"
        x={xScale(tickValue) + xScale.bandwidth() /2}
      >
        {tickValue}
      </text>
  )
)

export default AxisBottom