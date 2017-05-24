// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp
/*global window*/

function logCRP() {
    "use strict";
    var o = window.performance.timing;
    var n = o.domContentLoadedEventStart - o.domLoading;
    var t = o.domComplete - o.domLoading;
    var d = document.getElementById("crp-stats");
    d.textContent = "DCL: " + n + "ms, onload: " + t + "ms";
}
window.addEventListener("load", function () {
    "use strict";
    logCRP();
});
