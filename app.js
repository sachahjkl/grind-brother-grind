document.addEventListener("DOMContentLoaded", function () {
  const pointing = document.getElementById("pointing");
  const fingerDegreesOffest = 31.9;

  window.addEventListener("mousemove", function (event) {
    const x = event.clientX;
    const y = event.clientY;
    const origin = {
      x: pointing.clientWidth * 0.2,
      y: window.innerHeight - pointing.clientHeight * 0.1,
    };
    const rotation = (Math.atan2(y - origin.y, x - origin.x) * 180) / Math.PI;
    pointing.style.setProperty("--rotation", rotation + fingerDegreesOffest + "deg");

    const bindingBox = pointing.getBoundingClientRect();
    const xOver = x >= bindingBox.left && x <= bindingBox.right;
    const yOver = y >= bindingBox.top && y <= bindingBox.bottom;

    if (xOver && yOver) {
      pointing.classList.add("pointing-mouseover");
    } else {
      pointing.classList.remove("pointing-mouseover");
    }
  });

  const pics = document.getElementById("pics");
  pics.addEventListener("wheel", function (event) {
    event.preventDefault();
    const delta = -event.deltaY;
    const scrollLeft = pics.scrollLeft;
    pics.scrollLeft = scrollLeft - delta;
  });
});
