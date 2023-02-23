import { retornaArreglo } from '../../src/base-tests/07-deses-arr';


describe('Tests in 07-deses-arr', () => {

  test('should return an string and a number', () => {
    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    expect(letters).toEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));
  });

});