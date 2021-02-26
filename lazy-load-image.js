<!--// lazy load images for magento 2, add it to footer of the page after body end-->
<script>
var allImages = [].slice.call(document.querySelectorAll("img"));
allImages.forEach(function(image) {
    if (!(image.getBoundingClientRect().top <= window.innerHeight && image.getBoundingClientRect().bottom >= 0) && getComputedStyle(image).display !== "none") {
        image.setAttribute('data-src', image.src);
        image.setAttribute('data-srcset', image.src + ' 1x');
        image.classList.add('lazy');
        image.src = '/pub/media/logo/stores/1/gcc-header-logo.png';
    }
});
document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;
    const lazyLoad = function() {
        if (active === false) {
            active = true;

            setTimeout(function() {
                lazyImages.forEach(function(lazyImage) {
                    if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.srcset = lazyImage.dataset.srcset;
                        lazyImage.classList.remove("lazy");

                        lazyImages = lazyImages.filter(function(image) {
                            return image !== lazyImage;
                        });

                        if (lazyImages.length === 0) {
                            document.removeEventListener("scroll", lazyLoad);
                            window.removeEventListener("resize", lazyLoad);
                            window.removeEventListener("orientationchange", lazyLoad);
                        }
                    }
                });

                active = false;
            }, 200);
        }
    };
    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
});
</script>
