const Marks = ({data, xScale, yScale, innerHeight, xValue, yValue}) => 
  data.map((d, idx) => (
    <rect 
      key={idx}
      className="mark"
      x={xScale(xValue(d))}
      y={innerHeight - yScale(yValue(d))}
      width={xScale.bandwidth()}
      height={yScale(yValue(d))}
    >
      <title>Fully Vacinated: {yValue(d)}</title>
      </rect>
  )
)

export default Marks