export function searchAccountByName() {
  document.getElementById("searchInput").addEventListener("input", function () {
    const input = this.value.toLowerCase();
    const results = document.querySelectorAll(".container-list__account-color");
    const clearButton = document.querySelector(".clear-search");
    const searchInput = document.querySelector(".input-search");

    results.forEach((result) => {
      const name = result.getAttribute("data-name").toLowerCase();
      if (name.includes(input)) {
        result.style.display = "block";
      } else {
        result.style.display = "none";
      }
    });

    clearButton.addEventListener("click", function () {
      searchInput.value = "";
      results.forEach((result) => {
        result.style.display = "block";
      });
    });
  });
}

export function searchServerByName() {
  document.getElementById("searchInput").addEventListener("input", function () {
    const input = this.value.toLowerCase();
    const results = document.querySelectorAll(".server-container");
    const clearButton = document.querySelector(".clear-search");
    const searchInput = document.querySelector(".input-search");

    results.forEach((result) => {
      const name = result.getAttribute("data-name").toLowerCase();
      if (name.includes(input)) {
        result.style.display = "block";
      } else {
        result.style.display = "none";
      }
    });

    clearButton.addEventListener("click", function () {
      searchInput.value = "";
      results.forEach((result) => {
        result.style.display = "block";
      });
    });
  });
}
