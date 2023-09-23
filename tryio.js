document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtns = document.querySelectorAll(".dropdown-btn");

    dropdownBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle("show");
        });
    });

    window.addEventListener("click", function (e) {
        dropdownBtns.forEach((btn) => {
            const dropdownContent = btn.nextElementSibling;
            if (!btn.contains(e.target) && !dropdownContent.contains(e.target)) {
                dropdownContent.classList.remove("show");
            }
        });
    });
});
