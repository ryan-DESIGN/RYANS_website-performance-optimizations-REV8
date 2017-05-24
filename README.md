# Website Performance Optimizations - Project for Frontend Nanodegree

## Part 1: PageSpeedInsights for Cameron's Portfolio Site
* I optimized HTML by removing the whitespace in index.html
* I optimized CSS styling by uglifying the css file. PageSpeedInsights suggested that I inline 25% of the styles since that was above-the-fold content, but I don't believe in the necessity of prioritizing above-the-fold content since most people insta-scroll as soon as they see the page start to load nowadays. The whole site should be styled for full-functionality-first, rather than a pretty top 25% zone and choppy crap down where I want to scroll ASAP.
* I discovered Lighthouse and the Navigation Timing API.
* I eliminated redundant downloads by concatenating files of the same extension type.
* I reduced image sizes using an online compression service called Jpeg Optimizer which helped more than Photoshop.
* I could not specify the HTTP headers necessary to manipulate caching behavior in the client's browser while using a GitHub Pages server. :/ Therefore part of my PSI score was unattainable.
* PageSpeedInsights finally hit 92 on Mobile, 94 on Desktop.

## Part 2: Spiraling Pizzas and Resizing Pizzas
* I analyzed then optimized the Critical Rendering Path via Chrome Dev Tools.
* I utilized the FPS counter, as well as the Performance timeline to investigate slow responsiveness.
* `requestAnimationFrame()` helped to give the animation a stable framerate regardless of the user-agent/device.
* `willChange = "transform"` put the moving pizzas onto their own layer in the GPU.
* Decoupling DOM queries and calculations from inside for-loops made the framerate improve dramatically.
* Well below 0.3ms per 10 frames for scrolling animations.
* Below 0.6ms for resizing the pizzas.


## Usage Instructions
### Opening the Zip
1. Open the zip file and navigate to the top-level directory in a terminal. You should see a `src` directory, gulpfile.js, package.json, and README.md in there.
### npm gulp Build Process
2. Use `npm install --save-dev` to get all of this project's npm devDependencies installed just locally for this test use. The newly-created `node_modules` folder contains them.
4. Use `npm run gulp` to build the project (this command is a custom "scripts" property within the package.json file, which simplifies local setup for users who don't have matching global dependencies). The newly-created `dist` folder contains the production ready code.
### Using http-server For Testing
6. Use `npm run try-me` in order to run a simple local (on your home network) server to test the page.
7. Copy and load one of the two provided network addresses (e.g., 192.168.0.1:8) from within a Chrome browser window.
8. The application will open index.html and from there you can navigate to pizza.html
