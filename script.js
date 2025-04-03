document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("toggleSwitch");
  const searchBlock = document.getElementById("search-block");
  const mapBlock = document.getElementById("map-block");

  toggleSwitch.addEventListener("change", function () {
    if (this.checked) {
      mapBlock.style.display = "block";
      searchBlock.style.display = "none";
    } else {
      searchBlock.style.display = "block";
      mapBlock.style.display = "none";
    }
  });
});
