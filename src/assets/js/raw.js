


function myFunction() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    // dots.style.display = "none";
    btnText.style.display = "none";
    // btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}



function addTooltipBehavior(pathElement, tooltipId) {
  pathElement.addEventListener('mouseenter', function() {
    const tooltipElement = document.getElementById(tooltipId);
    if (tooltipElement) {
      tooltipElement.classList.add('showTooltip');
    }
  });

  pathElement.addEventListener('mouseleave', function() {
    const tooltipElement = document.getElementById(tooltipId);
    if (tooltipElement) {
      tooltipElement.classList.remove('showTooltip');
    }
  });
}

const pathES = document.getElementById('ES');
const pathCA = document.getElementById('CA');
const pathGR = document.getElementById('GR');

addTooltipBehavior(pathES, 'tooltip-ES');
addTooltipBehavior(pathCA, 'tooltip-CA');
addTooltipBehavior(pathGR, 'tooltip-GR');



