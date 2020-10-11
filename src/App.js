import React, { useEffect, useRef, useState } from 'react';
import {
  axisBottom,
  select,
  scaleLinear,
  axisRight
} from 'd3'

const App = () => {
  const [data, setData] = useState([25, 76, 45, 60, 20, 60, 30])
  const svgRef = useRef();



  useEffect(() => {
    const svg = select(svgRef.current)

    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300])

    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0])

    const xAxis = axisBottom(xScale).ticks(data.length).tickFormat(index => index + 1); // Creating x axis ticks 
    svg.select('.x-axis')
      .style("transform", "translateY(150px)")
      .call(xAxis)

    const yAxis = axisRight(yScale); // Creating y axis ticks 
    svg.select('.y-axis')
      .style("transform", "translateX(300px)")
      .call(yAxis)



  }, [data])

  return (
    <React.Fragment>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      <br />
      <div className="btns">
        <button onClick={() => setData(data.map(v => v + 5))}>
          Update Data
      </button>
        <button onClick={() => setData(data.filter(v => v < 35))}>
          Filter Data
      </button>
      </div>
    </React.Fragment>
  );
}

export default App;
