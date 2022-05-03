const { myObj } = require('../../src/spyon');

describe('spyon', () => {
  it('spyOn().mockReturnValue()', () => {
    const somethingSpy = jest.spyOn(myObj, 'doSomething').mockReturnValue();
    myObj.doSomething();
    expect(somethingSpy).toHaveBeenCalled();
  });
});
