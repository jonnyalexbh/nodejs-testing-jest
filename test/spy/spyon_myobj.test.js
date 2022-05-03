const { myObj } = require('../../src/spyon');

describe('spyon', () => {
  it('spyOn .toHaveBeenCalled()', () => {
    const somethingSpy = jest.spyOn(myObj, 'doSomething');
    myObj.doSomething();
    expect(somethingSpy).toHaveBeenCalled();
  });
});
