import Movie from './movie';


describe('Movie', () => {
  test('getInfo method should return correct information', () => {
    const movie = new Movie(2012, 'США', 'Мстители', 'фантастика, боевик, фэнтэзи, приключения', 137);
    expect(movie.getInfo()).toBe('2012, США, Мстители, фантастика, боевик, фэнтэзи, приключения, 137 минут');
  });
});

