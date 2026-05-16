
    const films = [
      "dexter",
      "golden hands",
      "nanny mcphee",
      "ninjaturtles",
    ]

    let index = 0;

    const filmName = document.getElementById("filmName");
    filmName.textContent = films[index];

    function nextFilm() {
      index++;
      if (index >= films.length) {
        index = 0; 
      }
      filmName.textContent = films[index];
    }

 function prevFilm() {
      index--;
      if (index < 0) {
        index = films.length - 1;
      }
      filmName.textContent = films[index];
    }