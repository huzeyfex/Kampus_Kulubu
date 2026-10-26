const searchInput = document.querySelector("#event-search");
const clearButton = document.querySelector("#clear-search");
const eventCards = Array.from(document.querySelectorAll("#event-list article"));
const eventCount = document.querySelector("#event-count");
const emptyResults = document.querySelector("#empty-results");

function filterEvents() {
  const searchTerm = searchInput.value.trim().toLocaleLowerCase("tr-TR");
  let visibleCount = 0;

  eventCards.forEach((card) => {
    const title = card.querySelector("h2").textContent.trim().toLocaleLowerCase("tr-TR");
    const matches = title.includes(searchTerm);

    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  eventCount.textContent = `${visibleCount} etkinlik gösteriliyor.`;
  emptyResults.hidden = visibleCount > 0;
}

searchInput.addEventListener("input", filterEvents);
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  filterEvents();
  searchInput.focus();
});

filterEvents();