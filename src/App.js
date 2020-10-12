import React, { useEffect, useRef, useState } from 'react';
import {
  axisBottom,
  select,
  scaleLinear,
  axisRight,
  scaleBand
} from 'd3'

// Scaleband - maps the amount between

const App = () => {
  const [data, setData] = useState([25, 76, 45, 60, 20, 60, 30])
  const svgRef = useRef();



  useEffect(() => {
    const svg = select(svgRef.current)

    const xScale = scaleBand()
      .domain(data.map((v, i) => i))
      .range([0, 300])
      .padding(0.5)

    const yScale = scaleBand()
      .domain([1, 2, 3, 4, 5])
      .range([150, 0])

    const xAxis = axisBottom(xScale).ticks(data.length).tickFormat(index => index + 1); // Creating x axis ticks 
    svg.select('.x-axis')
      .style("transform", "translateY(150px)")
      .call(xAxis)

    const yAxis = axisRight(yScale); // Creating y axis ticks 
    svg.select('.y-axis')
      .style("transform", "translateX(300px)")
      .call(yAxis)


    svg
      .selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')
      .attr('x', (v, i) => xScale(i))
      .attr('width', xScale.bandwidth())
      .attr('height', '50px')



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
