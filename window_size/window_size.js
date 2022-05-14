
// const screenSize = document.querySelector('.window__screen');
// const screenInner = document.querySelector('.window__inner');
// const screenOuter = document.querySelector('.window__outer');
// const clientWidth = document.querySelector('.client__width');

// screenSize.textContent = window.screen;
// screenInner.textContent = window.innerWidth*window.innerHeight;
// screenOuter.textContent = window.outerWidth*window.outerHeight;
// clientWidth.textContent = window.documentElement.clientWidth;

window.onload = function () {

    const windowSize = document.querySelector('.window__screen');

    windowSize.textContent = `Window.Screen: ${screen.width}, ${screen.height}`;

    const windowOuter = document.querySelector('.window__outer');

    windowOuter.textContent = `window.Outer: ${window.outerWidth}, ${window.outerHeight}`;

    const windowInner = document.querySelector('.window__inner');

    windowInner.textContent = `window.Inner: ${window.innerWidth}, ${window.innerHeight}`;

    const windowClient = document.querySelector('.client_width');

    windowClient.textContent = `DocumentElement.ClientWidth: ${document.body.clientWidth}, ${document.body.clientHeight}`;

    window.addEventListener('resize', function () {

        const windowOuter = document.querySelector('.window__outer');

        windowOuter.textContent = `window.Outer: ${window.outerWidth}, ${window.outerHeight}`;

        const windowInner = document.querySelector('.window__inner');

        windowInner.textContent = `window.Inner: ${window.innerWidth}, ${window.innerHeight}`;

        const windowClient = document.querySelector('.client_width');

        windowClient.textContent = `DocumentElement.ClientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;

    });

}