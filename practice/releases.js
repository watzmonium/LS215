let newReleases = [
  {
    'id': 123123123,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

// generate an array of objects that only has id: #, title: title 
// filter out movies without ids and titles
// map each entry to the new object type

const processReleaseData = films => {
  idTitles = films.filter(film => film.title && (film.id || film.id === 0));
  return idTitles.map(film => Object({id: film.id, title: film.title}));
}

// const processReleaseData = films => {
//   idTitles = films.filter(film => !!film.title && !!film.id);
//   return idTitles.map(film => { return {id: film.id, title: film.title}});
// }

console.log(processReleaseData(newReleases));

// should return:
//[{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];