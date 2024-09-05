
function init(selector) {
    // using d3 for convenience
    var scrolly = d3.select(selector);
    var figure = scrolly.select("img");
    var article = scrolly.select(".article");
    var step = article.selectAll(".step");

    // initialize the scrollama
    var scroller = scrollama();

    // generic window resize listener event
    function handleResize() {
        // 1. update height of step elements
        var stepH = Math.floor(window.innerHeight * 0.75);
        step.style("height", stepH + "px");

        var figureHeight = window.innerHeight / 2;
        var figureMarginTop = (window.innerHeight - figureHeight) / 2;

        figure
            .style("height", figureHeight + "px")
            .style("top", figureMarginTop + "px");

        // 3. tell scrollama to update new element dimensions
        scroller.resize();
    }


    // scrollama event handlers
    function handleStepEnter(response) {
        // console.log(response);
        // response = { element, direction, index }

        // // add color to current step only
        // step.classed("is-active", function (d, i) {
        //     return i === response.index;
        // });

        // var updateableFigure = document.getElementById('updateableFigure');
        // Make sure updateableFigure is querying the element under selector
        var updateableFigure = document.querySelector(selector + " #updateableFigure");
        // os.path.dirname(updateableFigure.src)
        var updateableFigurePath = updateableFigure.src.split("/").slice(0, -1).join("/");
        updateableFigure.src = updateableFigurePath + "/" + (response.index + 1) + ".svg";
    }

    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize();

    // 2. setup the scroller passing options
    // 		this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    const stepSelector = selector + " div.step";
    scroller
        .setup({
            step: stepSelector,
            offset: 0.2,
            debug: false
        })
        .onStepEnter(handleStepEnter);
}

function localizeSteps() {
    // Select all elements with the class 'step'
    const steps = document.querySelectorAll('.step');

    steps.forEach(step => {
        // Create a new div element with class 'has-background-white'
        const backgroundDiv = document.createElement('div');
        backgroundDiv.classList.add('has-background-white');

        // Find the title element within the current step
        const title = step.previousElementSibling;

        // If a title exists, append it to the new background div
        if (title) {
            backgroundDiv.appendChild(title);
        }

        // Append the current step content to the new background div
        backgroundDiv.appendChild(step.cloneNode(true));
        // Remove 'step' class from the cloned step
        backgroundDiv.querySelector('.step').classList.remove('step');

        // Replace the current step content with the new background div
        step.innerHTML = '';
        step.classList = ['step'];
        step.appendChild(backgroundDiv);
    });
}
    
function mobileCorrections() {
    // if (window.innerWidth < 768) {
        // add is-underlay to all #updateableFigure elements
        document.querySelectorAll("#updateableFigure").forEach(figure => {
            figure.parentElement.classList.add('is-underlay');
        });
        localizeSteps();
    // }
}