// Simple Add to Cart Alert
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.innerText === "Add to Cart") {
            alert("Item added to cart!");
        }
    });
});
