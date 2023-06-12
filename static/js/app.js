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
    // trace for sample data
    let trace1 = {
        x: sampleValues[0],
        y: otuIDs[0],
        text: otuLabels,
        type: 'bar',
        orientation: 'h'
    };
    // data trace array
    let traceData = [trace1];

    let layout = {
        title: 'OTU'
    };
    Plotly.newPlot('bar', traceData, layout)
});
