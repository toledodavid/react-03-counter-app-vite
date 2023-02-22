import { getUser, getUsuarioActivo } from '../../src/base-tests/05-funciones';

describe('Tests in 05-funciones', () => {

  test('getUser should return an object', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test('getUsuarioActivo should return an object', () => {
    const name = 'David';

    const activedUser = getUsuarioActivo(name);

    expect(activedUser).toEqual({uid: 'ABC567', username: name});
  });

});