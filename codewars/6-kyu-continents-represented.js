// You will be given an array of objects (associative arrays in PHP) representing data about developers
// who have signed up to attend the next coding meetup that you are organising.
// Your task is to return:
// true if all of the following continents / geographic zones will be represented by at least one
// developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
// false otherwise.

function allContinents(list) {
  return ["Africa", "Americas", "Asia", "Europe", "Oceania"].every((x) =>
    list.some((y) => x == y.continent)
  );
}
