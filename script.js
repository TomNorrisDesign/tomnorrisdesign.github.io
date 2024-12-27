document.getElementById("viewWorkTab").addEventListener("click", function () {
  const panel = document.getElementById("projectsPanel");
  panel.classList.toggle("open");
});

// Close panel when clicking outside
document.addEventListener("click", function (e) {
  const panel = document.getElementById("projectsPanel");
  const tab = document.getElementById("viewWorkTab");
  if (
    !panel.contains(e.target) &&
    !tab.contains(e.target) &&
    panel.classList.contains("open")
  ) {
    panel.classList.remove("open");
  }
});
