<a name="1.2.1"></a>
# 1.2.1 (2017-06-March)

+JS: Fix for ezpModel watching

Fixes from base elevate-zoom-plus (v.1.2.1) library:
+ NPM: Fixes delayed version 
+ NPM: Add main property to package.json to support vanilla require statement
+ CORE: add a update left
+ CORE: use a function to change the offset in new container
+ CORE: added lens override for window width to 0 (default value can create unwanted scroll on mobile devices);
+ CORE: tint image src changed to thumbnail src instead of zoom image src
+ CORE: fixed lensColour tint override to 'transparent' instead of 'none';
+ CORE: style reformated and removed duplicate rules applied in getWindowLensStyle();
+ CORE: added missing cursor rule for lens type.
+ CORE: fixed lens and inner zoom not working for touchmove action;
+ CORE: added lensColour as background-color to lens style;
+ CORE: style rules reformat;
+ CORE: isInteger IE fix

<a name="1.2.0"></a>
# 1.2.0 (2016-24-August)

+ JS: always update attrImageZoomSrc on ezpModel change (fixes #14)
+ JS: Fixes a bug where updating plugin options leaves an old zoomContainer on the page 
+ BUILD: use semantic version, keeping parity with elevate-zoom-plus
+ Update to latest EZP library (v.1.2.0).

Fixes from base elevate-zoom-plus (v.1.2.0) library:
+ BOWER: Fixes dependency missing on grunt wiredep
+ DOC: Correcting version in js and link for CDN
+ DOC: Correction option name for lens border 'lensSizeBorder'
+ BUILD: use semantic version, keeping parity with angular-elevate-zoom-plus 

<a name="1.1.18d"></a>
# 1.1.18d (2016-07-06)
+ Fix for zoom container bug. Destroy zoom container if $destroy was too late.

<a name="1.1.18b"></a>
# 1.1.18b (2016-17-05)
+ Fix for zoom container bug. Destroy old plugin before updating the the plugin when using dynamic options

<a name="1.1.18a"></a>
# 1.1.18a (2016-11-05)
+ Dynamic ezpOptions to deeply watch the options object. 
Also prevent the options watch from firing the options update on first plugin load

<a name="1.0.0"></a>
# 1.0.0 (2015-28-05)
+ build v1.0.1
+ Initial commit, it includes bower repository settings.
+ Refactor naming.
