document.addEventListener("DOMContentLoaded", () => {
  const temples = [
      {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
      },
      {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
      {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      },
      {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      },
      {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },
      {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
          templeName: "Okinawa Japan",
          location: "Okinawa, Japan",
          dedicated: "2023, November, 12",
          area: 12437,
          imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/okinawa-japan-temple/okinawa-japan-temple-9974.jpg"
      },
      {
          templeName: "Recife Brazil",
          location: "Recife, Brazil",
          dedicated: "2000, December, 15",
          area: 37200,
          imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-1821.jpg"
      },
      {
          templeName: "Dallas Texas",
          location: "Dallas, Texas",
          dedicated: "1984, October, 24",
          area: 44207,
          imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-55221.jpg"
      }
  ];

  const templeCardsContainer = document.getElementById("temple-cards");

  const renderCards = (filterCategory = "all") => {
      templeCardsContainer.innerHTML = "";

      const filteredTemples = temples.filter(temple => {
          if (filterCategory === "all") return true;
          if (filterCategory === "old" || filterCategory === "new") {
              const year = parseInt(temple.dedicated.split(",")[0]);
              return filterCategory === "old" ? year < 1900 : year >= 2000;
          }
          if (filterCategory === "large" || filterCategory === "small") {
              return filterCategory === "large" ? temple.area > 50000 : temple.area <= 50000;
          }
          return false;
      });

      filteredTemples.forEach(temple => {
          const card = document.createElement("div");
          card.className = "temple-card";
          card.innerHTML = `
              <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}">
              <h3>${temple.templeName}</h3>
              <p>Location: ${temple.location}</p>
              <p>Dedicated: ${temple.dedicated}</p>
              <p>Area: ${temple.area} sq ft</p>
          `;
          templeCardsContainer.appendChild(card);
      });
  };

  document.querySelectorAll("nav a[data-filter]").forEach(link => {
      link.addEventListener("click", event => {
          event.preventDefault();
          const filter = event.target.getAttribute("data-filter");
          renderCards(filter);
      });
  });

  renderCards();

  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});
