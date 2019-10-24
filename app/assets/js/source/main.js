jQuery("document").ready(function () {
    var chartWrapper = $('.st-charts'),
        chart = $('#st-chart'),
        btnStart = $('.st-js[data-sorting-types="start"]'),
        btnStop = $('.st-js[data-sorting-types="stop"]'),
        width = chartWrapper.innerWidth() - 40,
        height = chartWrapper.innerHeight() - 40;

    var ctx = chart[0].getContext('2d');
    var dataset = handleGenerateDataset(50, height);

    init();

    function init() {
        ctx.canvas.width = width;
        ctx.canvas.height = height;

        handleDrawChart();
        handleGenerateNewDataset();

        btnStart.on('click', function () {
            bubbleSort();
        })
    }

    function handleSortSelect() {
        var item = $('.st-menu__item'),
            sortType = $('.st-menu__item.st-active').data('sorting-types');

        item.on('click', function () {
            item.removeClass('st-active');
            $(this).addClass('st-active');
            sortType = $(this).data('sorting-types');
        });

        return sortType;
    }

    function handleGenerateDataset(size, range) {
        var arr = [];

        for (var i = 0; i < size; i++) {
            arr.push(Math.floor((Math.random() * Math.floor(range)) + 1));
        }

        return arr;
    }

    function handleGenerateNewDataset() {
        $('.st-js[data-sorting-types="generate"]').on('click', function () {
            dataset = handleGenerateDataset(50, height);
            handleDrawChart();
        })
    }

    function handleDrawChart(id) {
        ctx.scale(1, 1);

        barPadding = 1;
        barWidth = (width - (dataset.length * barPadding)) / dataset.length;

        ctx.clearRect(0, 0, width, height);
        $.each(dataset, function (index, value) {
            ctx.save();
            if (typeof id != 'undefined' && id === index) {
                ctx.fillStyle = '#fa7252';
            } else {
                ctx.fillStyle = '#6dcab7';
            }
            ctx.fillRect(index * (barWidth + barPadding), height - value, barWidth, value);
            ctx.restore();
        });
    }

    function bubbleSort() {
        var n = dataset.length,
            swaps = 0;

        var bubbleSortLoop = function (i) {
            if (dataset[i] > dataset[i + 1]) {
                var temp = dataset[i];
                dataset[i] = dataset[i + 1];
                dataset[i + 1] = temp;
                swaps++;
            }

            handleDrawChart(i + 1);

            if (i < n) {
                setTimeout(function () {
                    bubbleSortLoop(i + 1)
                }, 5);
            } else if (swaps !== 0) {
                swaps = 0;
                setTimeout(function () {
                    bubbleSortLoop(0)
                }, 10);
            } else {
                return 0;
            }
        };

        bubbleSortLoop(0);
    }
});
