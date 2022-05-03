const main = require('../../src/maths/main');
const math = require('../../src/maths/maths');

math.add = jest.fn();
math.subtract = jest.fn();

describe('maths', () => {
  it('calls math.add', () => {
    main.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
  });

  it('calls math.subtract', () => {
    main.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
  });
});
