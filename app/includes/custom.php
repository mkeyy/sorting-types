<?php

/**
 * Generates inline svg with the appropriate classes
 * @param null $filename
 * @param null $additionalClasses
 * @return mixed|string
 */
function assetSvg($filename = null, $additionalClasses = null)
{
    $file = file_exists(DIRPATH . '/assets/images/icons/' . $filename . '.svg');
    $svg_path = DIRPATH . '/assets/images/icons/' . $filename . '.svg';

    // Check the SVG file exists
    if ($file) {
        $svg = file_get_contents($svg_path);

        if ($additionalClasses)
            return str_replace("<svg", '<svg class="st-svg-inline st-svg--' . basename($filename, ".svg") . ' ' . $additionalClasses . '"', $svg);
        else
            return str_replace("<svg", '<svg class="st-svg-inline st-svg--' . basename($filename, ".svg") . '"', $svg);
    }

    // Return a blank string if we can't find the file.
    return '';
}