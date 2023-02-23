import { getHeroeById, getHeroesByOwner } from '../../src/base-tests/08-imp-exp';
import heroesImp from '../../src/data/heroes';


describe('Test in 08-imp-exp', () => {

  test('getHeroeById should return an hero by id', () => {
    const hero = getHeroeById(1);

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('getHeroeById should return undefined if hero`s id does not exist', () => {
    const hero = getHeroeById(0);
    expect(hero).toBe(undefined);
  });

  test('getHeroesByOwner should return heroes filtered by DC', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual(heroesImp.filter(hero => hero.owner === owner));
  });

  test('getHeroesByOwner should return heroes filtered by Marvel', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(heroesImp.filter(hero => hero.owner === owner));
  });

});