var app = {
    init: function () {
        var chartWrapper = $('.st-charts'),
            chart = $('#st-chart'),
            btnStart = $('.st-js[data-sorting-types="start"]'),
            btnStop = $('.st-js[data-sorting-types="stop"]'),
            width = chartWrapper.innerWidth() - 40,
            height = chartWrapper.innerHeight() - 40;

        var ctx = chart[0].getContext('2d');
        ctx.canvas.width = width;
        ctx.canvas.height = height;

        var dataset = app.handleGenerateDataset(150, height);

        app.handleDrawChart(ctx, dataset, width, height);

        btnStart.on('click', function () {
            app.bubbleSort(ctx, dataset, width, height);
        })
    },

    handleSortSelect: function () {
        var item = $('.st-menu__item'),
            sortType = $('.st-menu__item.st-active').data('sorting-types');

        item.on('click', function () {
            item.removeClass('st-active');
            $(this).addClass('st-active');
            sortType = $(this).data('sorting-types');
        });

        console.log(sortType);
        return sortType;
    },

    handleGenerateDataset: function (size, range) {
        var arr = [];

        for (var i = 0; i < size; i++) {
            arr.push(Math.floor((Math.random() * Math.floor(range)) + 1));
        }

        return arr;
    },

    handleGenerateNewDataset: function () {
        $('.st-js[data-sorting-types="generate"]').on('click', function () {
            app.handleChartDraw();
        })
    },

    handleDrawChart: function (ctx, dataset, width, height) {
        ctx.scale(1, 1);

        barPadding = 1;
        barWidth = Math.floor(width / dataset.length);

        ctx.clearRect(0, 0, width, height);
        $.each(dataset, function (index, value) {
            app.drawBar(ctx, index * (barWidth + barPadding), height - value, barWidth - barPadding, value, '#6dcab7');
        });

        requestAnimationFrame(app.handleDrawChart)
    },

    drawBar: function (ctx, x, y, width, height, color) {
        ctx.save();
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
        ctx.restore();
    },

    bubbleSort: function (ctx, dataset, width, height) {
        var n = dataset.length;

        do {
            for (var i = 0; i < n - 1; i++) {
                if (dataset[i] > dataset[i + 1]) {
                    var x = dataset[i];
                    dataset[i] = dataset[i + 1];
                    dataset[i + 1] = x;

                    app.handleDrawChart(ctx, dataset, width, height);
                }
            }
            n--;
        } while (n > 1);
    }
};

jQuery("document").ready(function () {
    app.init();
});
