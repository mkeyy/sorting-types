jQuery("document").ready(function () {
    handleGenerateNewDataset();
    handleChartDraw();

    function handleGenerateArray(size, range) {
        var arr = [];

        for (var i = 0; i < size; i++) {
            arr.push(Math.floor((Math.random() * Math.floor(range)) + 1));
        }

        console.log(arr);

        return arr;
    }

    function handleGenerateNewDataset() {
        $('.st-js[data-sorting-types="generate"]').on('click', function () {
            handleChartDraw();
        })
    }

    function handleChartDraw() {
        d3.select('.st-charts > *').remove();
        var chart = d3.select('.st-charts')
            .append('svg')
            .attr('class', 'st-chart');

        var selector = $('.st-chart');
        var svgHeight = selector.innerHeight();

        var dataset = handleGenerateArray(20, svgHeight);

        var barPadding = 5;
        var barWidth = (selector.innerWidth() / dataset.length);

        chart.selectAll('rect')
            .data(dataset)
            .enter()
            .append('rect')
            .attr('class', 'st-chart__bar')
            .attr("y", function (d) {
                return svgHeight - d;
            })
            .attr("height", function (d) {
                return d;
            })
            .attr("width", barWidth - barPadding)
            .attr("transform", function (d, i) {
                var translate = [barWidth * i, 0];
                return "translate(" + translate + ")";
            });
    }
});
