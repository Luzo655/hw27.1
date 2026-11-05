const watchlist = ["Inception", "Interstellar", "The Matrix", "Gladiator", "Dune"];

const weekendFilms = watchlist.slice().sort().slice(0, 3);

weekendFilms.push("Oppenheimer", "Arrival");

weekendFilms
  .slice()
  .sort()
  .forEach((film, index) => {
    console.log(`${index + 1}. ${film}`);
  });

console.log(watchlist);