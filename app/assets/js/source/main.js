jQuery("document").ready(function () {
    var chartWrapper = $('.st-charts'),
        chart = $('#st-chart'),
        btnStart = $('.st-js[data-sorting-types="start"]'),
        btnStop = $('.st-js[data-sorting-types="stop"]'),
        width = chartWrapper.innerWidth() - 40,
        height = chartWrapper.innerHeight() - 40;

    var ctx = chart[0].getContext('2d');
    var dataset = handleGenerateDataset(50, height);
    var sortType = $('.st-menu__item.st-active').data('sorting-types');

    init();

    function init() {
        ctx.canvas.width = width;
        ctx.canvas.height = height;

        handleDrawChart();
        handleGenerateNewDataset();
        handleSortSelect();

        btnStart.on('click', function () {
            switch (sortType) {
                case 'select':
                    selectSort();
                    break;
                case 'heap':
                    heapSort();
                    break;
                case 'bubble':
                    bubbleSort();
                    break;
            }
        })
    }

    function handleSortSelect() {
        var item = $('.st-menu__item');

        item.on('click', function () {
            item.removeClass('st-active');
            $(this).addClass('st-active');
            sortType = $(this).data('sorting-types');
        });
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

    function handleDrawChart(firstID, secondID) {
        ctx.scale(1, 1);

        barPadding = 1;
        barWidth = (width - (dataset.length * barPadding)) / dataset.length;

        ctx.clearRect(0, 0, width, height);
        $.each(dataset, function (index, value) {
            ctx.save();
            if ((typeof firstID !== 'undefined' && firstID === index) || (typeof secondID !== 'undefined' && secondID === index)) {
                ctx.fillStyle = '#fa7252';
            } else {
                ctx.fillStyle = '#6dcab7';
            }
            ctx.fillRect(index * (barWidth + barPadding), height - value, barWidth, value);
            ctx.restore();
        });
    }

    function selectSort() {
        var n = dataset.length;

        function maxIndex(num) {
            var maxIndex = 0;
            for (var i = 0; i <= num; i++) {
                if (dataset[i] > dataset[maxIndex]) {
                    maxIndex = i;
                }
            }
            return maxIndex;
        }

        var selectSortLoop = function (i) {
            var max = maxIndex(i);
            handleDrawChart(i, max);

            var temp = dataset[i];
            dataset[i] = dataset[max];
            dataset[max] = temp;

            i = i - 1;

            if (i >= 0) {
                setTimeout(function () {
                    selectSortLoop(i)
                }, 100);
            } else {
                handleDrawChart();
                return 0;
            }
        };

        selectSortLoop(n - 1);
    }

    function buildHeap(length, i) {
        var largest = i,
            left = i * 2 + 1,
            right = left + 1;

        if (left < length && dataset[left] > dataset[largest]) {
            largest = left;
        }

        if (right < length && dataset[right] > dataset[largest]) {
            largest = right;
        }

        if (largest !== i) {
            [dataset[i], dataset[largest]] = [dataset[largest], dataset[i]];

            buildHeap(length, largest);
        }
    }

    function heapSort() {
        var length = dataset.length,
            i = Math.floor(length / 2 - 1),
            k = length - 1;

        while (i >= 0) {
            buildHeap(length, i);
            i--;
        }

        while (k >= 0) {
            [dataset[0].dataset[k]] = [dataset[k], dataset[0]];
            buildHeap(k, 0);
            k--;
        }

        console.log(dataset);
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
