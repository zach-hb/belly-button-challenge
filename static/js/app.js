let url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

d3.json(url).then(function(response) {
    console.log(response)
    // get sample values from samples array in response json
    let samples = response.samples;
    let sampleValues = samples.map(sample => sample.sample_values.slice(0,10));
    // set the label values
    let otuIDs = samples.map(sample => sample.otu_ids.slice(0,10));
    // create text for chart
    let otuLabels = samples.map(sample => sample.otu_labels.slice(0,10));
    // trace for bar chart data
    let barTrace = {
        x: sampleValues[0],
        y: otuIDs[0].map(id =>`OTU ${id}`),
        text: otuLabels,
        type: 'bar',
        orientation: 'h'
    };
    // data trace array
    let traceData = [barTrace];

    let layout = {
        title: 'OTU'
    };
    Plotly.newPlot('bar', traceData, layout)
// trace for bubble chart data
    let bubbleTrace = {
        x: otuIDs[0],
        y: sampleValues[0],
        mode: 'markers',
        marker: {
            color: sampleValues[0],
            size: sampleValues[0]
        },
        text: otuLabels,
        type: 'bubble'
    };
    let layoutBubble = {
        title: 'Bubble OTU'
    };
    Plotly.newPlot('bubble', [bubbleTrace], layoutBubble);
});

// select panel-body
// d3.select('.panel-body')