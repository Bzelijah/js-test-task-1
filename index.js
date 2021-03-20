function getRelevantPlace(places) {
  let minPeopleCount = places[0].peopleCount;
  let random = [];
  let index;

  for (let i = 1; i < places.length; i++) {
    if (minPeopleCount >= places[i].peopleCount) {
      minPeopleCount = places[i].peopleCount;
      index = i;
    }
  }

  for (let i = 0; i < places.length; i++) {
    if (minPeopleCount === places[i].peopleCount) {
      random.push(places[i]);
    }
  }

  if (random.length > 1) {
    index = Math.floor(Math.random() * Math.floor(random.length));
    return places[index].id;
  } else {
    return places[index].id;
  }
}

module.exports = {
  getRelevantPlace
}
