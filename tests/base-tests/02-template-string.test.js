import { getSaludo } from '../../src/base-tests/02-template-string';


describe('Tests in 02-template-string', () => {

  test('getSaludo should return "Hola David"', () => {
    const name = 'David';
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`);
  });

});