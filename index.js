// 40 ta davlat va bayroqlar ro'yxati
const countriesData = [
  { name: "Uzbekistan", flag: "https://flagcdn.com/w320/uz.png", population: "36,000,000", region: "Asia", capital: "Tashkent" },
  { name: "Germany", flag: "https://flagcdn.com/w320/de.png", population: "83,240,525", region: "Europe", capital: "Berlin" },
  { name: "United States of America", flag: "https://flagcdn.com/w320/us.png", population: "331,893,745", region: "Americas", capital: "Washington, D.C." },
  { name: "Brazil", flag: "https://flagcdn.com/w320/br.png", population: "214,326,223", region: "Americas", capital: "Brasília" },
  { name: "Iceland", flag: "https://flagcdn.com/w320/is.png", population: "372,520", region: "Europe", capital: "Reykjavík" },
  { name: "Afghanistan", flag: "https://flagcdn.com/w320/af.png", population: "40,099,462", region: "Asia", capital: "Kabul" },
  { name: "Åland Islands", flag: "https://flagcdn.com/w320/ax.png", population: "30,344", region: "Europe", capital: "Mariehamn" },
  { name: "Albania", flag: "https://flagcdn.com/w320/al.png", population: "2,811,666", region: "Europe", capital: "Tirana" },
  { name: "Algeria", flag: "https://flagcdn.com/w320/dz.png", population: "44,900,000", region: "Africa", capital: "Algiers" },
  { name: "Japan", flag: "https://flagcdn.com/w320/jp.png", population: "125,700,000", region: "Asia", capital: "Tokyo" },
  { name: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png", population: "67,330,000", region: "Europe", capital: "London" },
  { name: "France", flag: "https://flagcdn.com/w320/fr.png", population: "67,750,000", region: "Europe", capital: "Paris" },
  { name: "Italy", flag: "https://flagcdn.com/w320/it.png", population: "59,110,000", region: "Europe", capital: "Rome" },
  { name: "Canada", flag: "https://flagcdn.com/w320/ca.png", population: "38,250,000", region: "Americas", capital: "Ottawa" },
  { name: "Australia", flag: "https://flagcdn.com/w320/au.png", population: "25,690,000", region: "Oceania", capital: "Canberra" },
  { name: "South Korea", flag: "https://flagcdn.com/w320/kr.png", population: "51,740,000", region: "Asia", capital: "Seoul" },
  { name: "Turkey", flag: "https://flagcdn.com/w320/tr.png", population: "84,780,000", region: "Asia", capital: "Ankara" },
  { name: "Saudi Arabia", flag: "https://flagcdn.com/w320/sa.png", population: "35,950,000", region: "Asia", capital: "Riyadh" },
  { name: "Spain", flag: "https://flagcdn.com/w320/es.png", population: "47,420,000", region: "Europe", capital: "Madrid" },
  { name: "Argentina", flag: "https://flagcdn.com/w320/ar.png", population: "45,810,000", region: "Americas", capital: "Buenos Aires" },
  { name: "Egypt", flag: "https://flagcdn.com/w320/eg.png", population: "109,300,000", region: "Africa", capital: "Cairo" },
  { name: "South Africa", flag: "https://flagcdn.com/w320/za.png", population: "59,390,000", region: "Africa", capital: "Pretoria" },
  { name: "India", flag: "https://flagcdn.com/w320/in.png", population: "1,408,000,000", region: "Asia", capital: "New Delhi" },
  { name: "China", flag: "https://flagcdn.com/w320/cn.png", population: "1,412,000,000", region: "Asia", capital: "Beijing" },
  { name: "Mexico", flag: "https://flagcdn.com/w320/mx.png", population: "126,700,000", region: "Americas", capital: "Mexico City" },
  { name: "Netherlands", flag: "https://flagcdn.com/w320/nl.png", population: "17,530,000", region: "Europe", capital: "Amsterdam" },
  { name: "Switzerland", flag: "https://flagcdn.com/w320/ch.png", population: "8,703,000", region: "Europe", capital: "Bern" },
  { name: "Sweden", flag: "https://flagcdn.com/w320/se.png", population: "10,420,000", region: "Europe", capital: "Stockholm" },
  { name: "Norway", flag: "https://flagcdn.com/w320/no.png", population: "5,408,000", region: "Europe", capital: "Oslo" },
  { name: "Finland", flag: "https://flagcdn.com/w320/fi.png", population: "5,541,000", region: "Europe", capital: "Helsinki" },
  { name: "Poland", flag: "https://flagcdn.com/w320/pl.png", population: "37,750,000", region: "Europe", capital: "Warsaw" },
  { name: "Portugal", flag: "https://flagcdn.com/w320/pt.png", population: "10,330,000", region: "Europe", capital: "Lisbon" },
  { name: "Belgium", flag: "https://flagcdn.com/w320/be.png", population: "11,590,000", region: "Europe", capital: "Brussels" },
  { name: "Austria", flag: "https://flagcdn.com/w320/at.png", population: "8,956,000", region: "Europe", capital: "Vienna" },
  { name: "Greece", flag: "https://flagcdn.com/w320/gr.png", population: "10,640,000", region: "Europe", capital: "Athens" },
  { name: "United Arab Emirates", flag: "https://flagcdn.com/w320/ae.png", population: "9,365,000", region: "Asia", capital: "Abu Dhabi" },
  { name: "Kazakhstan", flag: "https://flagcdn.com/w320/kz.png", population: "19,000,000", region: "Asia", capital: "Astana" },
  { name: "New Zealand", flag: "https://flagcdn.com/w320/nz.png", population: "5,123,000", region: "Oceania", capital: "Wellington" },
  { name: "Morocco", flag: "https://flagcdn.com/w320/ma.png", population: "37,080,000", region: "Africa", capital: "Rabat" },
  { name: "Nigeria", flag: "https://flagcdn.com/w320/ng.png", population: "213,400,000", region: "Africa", capital: "Abuja" }
];

// Elementlarni tanlab olish
const countriesContainer = document.getElementById("countriesContainer");
const searchInput = document.getElementById("searchInput");
const regionSelect = document.getElementById("regionSelect");
const darkModeBtn = document.getElementById("darkModeBtn");
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const modalCloseBtn = document.getElementById("modalCloseBtn");

// Kartochkalarni chiqarish funksiyasi
function renderCountries(data) {
  countriesContainer.innerHTML = "";

  if (data.length === 0) {
    countriesContainer.innerHTML = "<p style='grid-column: 1/-1; text-align: center;'>Hech qanday davlat topilmadi...</p>";
    return;
  }

  data.forEach((country) => {
    const card = document.createElement("article");
    card.classList.add("country-card");

    card.innerHTML = `
      <img src="${country.flag}" alt="${country.name} bayrog'i" class="country-card__flag">
      <div class="country-card__body">
        <h2 class="country-card__title">${country.name}</h2>
        <ul class="country-card__info">
          <li><strong>Population:</strong> ${country.population}</li>
          <li><strong>Region:</strong> ${country.region}</li>
          <li><strong>Capital:</strong> ${country.capital}</li>
        </ul>
      </div>
    `;

    // Kartochka bosilganda modal oyna ochish
    card.addEventListener("click", () => openModal(country));

    countriesContainer.appendChild(card);
  });
}

// Modal oynada batafsil ko'rsatish
function openModal(country) {
  modalContent.innerHTML = `
    <div class="modal__detail">
      <img src="${country.flag}" alt="${country.name} bayrog'i" class="modal__flag">
      <div>
        <h2 class="modal__title">${country.name}</h2>
        <ul class="modal__info">
          <li><strong>Population:</strong> ${country.population}</li>
          <li><strong>Region:</strong> ${country.region}</li>
          <li><strong>Capital:</strong> ${country.capital}</li>
        </ul>
      </div>
    </div>
  `;
  modalOverlay.classList.add("active");
}

// Modalni yopish
modalCloseBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("active");
  }
});

// Qidiruv va Mintaqa bo'yicha filterlash
function filterData() {
  const searchValue = searchInput.value.toLowerCase().trim();
  const selectedRegion = regionSelect.value;

  const filtered = countriesData.filter((country) => {
    const matchesSearch = country.name.toLowerCase().includes(searchValue);
    const matchesRegion = selectedRegion === "All" || country.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  renderCountries(filtered);
}

// Event Listeners
searchInput.addEventListener("input", filterData);
regionSelect.addEventListener("change", filterData);

// Dark Mode rejimini yoqish/o'chirish
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// Dastlabki render qilish
renderCountries(countriesData);