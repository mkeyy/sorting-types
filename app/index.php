<!DOCTYPE html>
<html lang="en">
<?php include('head.php'); ?>
<body class="st-app">
<?php include('header.php'); ?>

<main class="st-panel">
    <aside class="st-sidebar">
        <div class="st-sorts">
            <span class="st-h4">Types</span>
            <ul class="st-menu">
                <li class="st-menu__item st-active" data-sorting-types="select">
                    <?= assetSvg('ic-select') ?>
                    <span><?= _('Select Sort') ?></span>
                </li>
                <li class="st-menu__item" data-sorting-types="heap">
                    <?= assetSvg('ic-heap') ?>
                    <span><?= _('Heap Sort') ?></span>
                </li>
                <li class="st-menu__item" data-sorting-types="quick">
                    <?= assetSvg('ic-quick') ?>
                    <span><?= _('Quick Sort') ?></span>
                </li>
                <li class="st-menu__item" data-sorting-types="bubble">
                    <?= assetSvg('ic-bubble') ?>
                    <span><?= _('Bubble Sort') ?></span>
                </li>
            </ul>
        </div>

        <button class="st-btn st-btn--primary st-btn--generate st-js" data-sorting-types="generate"><?= _('Generate New Dataset') ?></button>
    </aside>
    <div class="st-charts"><canvas id="st-chart" width="1000px" height="500px"></canvas></div>
</main>

<?php include('footer.php'); ?>
</body>
</html>
