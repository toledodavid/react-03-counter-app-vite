import { getImagen } from "../../src/base-tests/11-async-await";


describe('Tests for 11-async-await', () => {

  test('getImagen should return an image url', async() => {
    const url = await getImagen();

    expect(typeof url).toBe('string');
  });

});