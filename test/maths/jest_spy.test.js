const main = require('../../src/maths/main');
const math = require('../../src/maths/maths');

describe('maths', () => {
  it('calls math.add', () => {
    const addMock = jest.spyOn(math, 'add');

    // calls the original implementation
    expect(main.doAdd(1, 2)).toEqual(3);

    // and the spy stores the calls to add
    expect(addMock).toHaveBeenCalledWith(1, 2);
  });
});
