{
const table = document.querySelector(".main__table");
const tableCell = document.querySelectorAll(".main__tableCell");
const themeChange = document.querySelector(".js-main__table--themeChange");

themeChange.addEventListener("click", () => {
    table.classList.toggle("main__table--DarkTheme");
    tableCell.forEach(cell => cell.classList.toggle("main__table--cellDarkTheme"))
    themeChange.innerHTML = themeChange.textContent.includes("Włącz ciemny motyw") ?
        "Włącz jasny motyw" : "Włącz ciemny motyw";
});

}
