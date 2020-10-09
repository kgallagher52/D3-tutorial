import React, { useEffect, useRef, useState } from 'react';
import { select } from 'd3'

const App = () => {
  const [data, setData] = useState([25, 30, 45, 60, 20])
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current)
    // Select all circles you find in my svg and sync them with my data 
    svg
      .selectAll("circle")
      .data(data)
      .join(
        enter => enter
          .append('circle')
          .attr("stroke", "teal")
          .attr("fill", "lightgreen"),
        update => update
          .attr("class", "update")
          .attr("fill", "red") // Define what you want to do with your elements
        // Update and sets class
      ).attr("r", v => v) // Create r is for radius
      .attr("cx", v => v * 2) // x coordinate 
      .attr("cy", v => v * 2)// y coordinate

  }, [data])

  return (
    <React.Fragment>
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={() => setData(data.map(v => v + 5))}>
        Update Data
      </button>
      <button onClick={() => setData(data.filter(v => v < 35))}>
        Filter Data
      </button>
    </React.Fragment>
  );
}

export default App;
