const { myObj } = require('../spyon');

describe('spyon', () => {
  test('spyOn().mockReturnValue()', () => {
    const somethingSpy = jest.spyOn(myObj, 'doSomething').mockReturnValue();
    myObj.doSomething();
    expect(somethingSpy).toHaveBeenCalled();
  });
});


