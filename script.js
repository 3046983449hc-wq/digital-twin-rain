window.onload = function () {
    document.body.style.background = "white";
    document.body.style.color = "black";
    document.body.style.zIndex = "9999";

    document.body.innerHTML = `
        <div style="position:relative; z-index:9999;">
            <h1>TEST OK ✅</h1>
            <p>If you see this, JS is working</p>
        </div>
    `;
};
