function searchCards() {
  const input = document.querySelector("#searchInput");
  const cards = document.querySelectorAll(".card");
  console.log(cards);
  cards.forEach((card) => {
    const title = card.querySelector(".title");
    const location = card.querySelector(".location");
    console.log(title);
    console.log(location);
    if (
      title.textContent.toLowerCase().includes(input.value.toLowerCase()) ||
      location.textContent.toLowerCase().includes(input.value.toLowerCase())
    ) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}