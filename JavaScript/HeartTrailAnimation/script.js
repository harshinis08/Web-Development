const bodyEle = document.querySelector("body");

bodyEle.addEventListener("mousemove", (event) => {
    const xPosition = event.offsetX
    const yPosition = event.offsetY

    const spanEle = document.createElement("span");
    spanEle.style.top = yPosition + "px";
    spanEle.style.left = xPosition + "px";

    const size = Math.random() * 100;
    spanEle.style.height = size + "px";
    spanEle.style.width = size + "px";

    bodyEle.append(spanEle);

    setTimeout(() => {
        spanEle.remove();
    }, 3000);
});