import React, { useEffect, useRef, useState } from 'react'
import {
    select,
    scaleLinear,
    max
} from 'd3'

const BarChart = () => {
    const [data, setData] = useState([25, 76, 45, 60, 20, 60, 30])
    const divRef = useRef();

    useEffect(() => {
        const div = select(divRef.current);

        const x = scaleLinear()
            .domain([0, max(data)])
            .range([0, 420])


        // Apply some styles to the chart container.
        div.style("font", "10px sans-serif");
        div.style("text-align", "right");
        div.style("color", "white");

        // Define the initial (empty) selection for the bars.
        const bar = div.selectAll("div")
            .data(data)
            .join("div")
            .style("background", "steelblue")
            .style("padding", "3px")
            .style("margin", "1px")
            .style("width", d => `${x(d)}px`)
            .text(d => d);
        // Bind this selection to the data (computing enter, update and exit).
        const barUpdate = bar.data(data);

        // Join the selection and the data, appending the entering bars.
        const barNew = barUpdate.join("div");

        // Apply some styles to the bars.
        barNew.style("background", "steelblue");
        barNew.style("padding", "3px");
        barNew.style("margin", "1px");

        // Set the width as a function of data.
        barNew.style("width", d => `${d * 10}px`);
        barNew.style("height", d => `${d * 10}px`);


        // Set the text of each bar as the data.
        barNew.text(d => d);


        // Return the chart container.
        return div.node();
    }, [data])

    return (
        <React.Fragment>
            <div ref={divRef}></div>
        </React.Fragment>
    )
}

export default BarChart
