<?php
/**
 * Entry point for static resources (JS, CSS, etc.)
 *
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/*
# Add to htaccess file in media/
<IfModule mod_rewrite.c>
    RewriteEngine On

    ## you can put here your pub/static folder path relative to web root
    #RewriteBase /magento/pub/media/

    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-l
    RewriteRule .* ../media.php?resource=$0 [L]

</IfModule>
*/


// var_dump($_GET['resource']);

$proxyUrl = 'https://albaharonline.com/Store/pub/media/';
$content = file_get_contents($proxyUrl.$_GET['resource']);

$fileInfo = pathinfo($_GET['resource']);
if ($fileInfo['dirname']) {
    mkdir(__DIR__.'/media/'.$fileInfo['dirname']);
}
file_put_contents(__DIR__.'/media/'.$_GET['resource'], $content);
// var_dump(__DIR__.'/media/'.$_GET['resource']);die;
header("Content-Type: image/". ($pathInfo['extension'] ?? 'jpeg'));
echo $content;
