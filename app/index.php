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
                <li class="st-menu__item st-active">
                    <?= assetSvg('ic-bubble') ?>
                    <span><?= _('Bubble Sort') ?></span>
                </li>
                <li class="st-menu__item">
                    <?= assetSvg('ic-select') ?>
                    <span><?= _('Selection Sort') ?></span>
                </li>
                <li class="st-menu__item">
                    <?= assetSvg('ic-merge') ?>
                    <span><?= _('Merge Sort') ?></span>
                </li>
                <li class="st-menu__item">
                    <?= assetSvg('ic-quick') ?>
                    <span><?= _('Quick Sort') ?></span>
                </li>
            </ul>
        </div>

        <button class="st-btn st-btn--primary st-btn--generate st-js" data-sorting-types="generate"><?= _('Generate New Dataset') ?></button>
    </aside>
    <div class="st-charts"></div>
</main>

<?php include('footer.php'); ?>
</body>
</html>
