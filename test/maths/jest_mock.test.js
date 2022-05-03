const app = require('../../src/maths/main');
const math = require('../../src/maths/maths');

// Set all module functions to jest.fn
jest.mock('../../src/maths/maths');

describe('maths with jest.mock', () => {
  it('calls math.add', () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
  });

  it('calls math.subtract', () => {
    app.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
  });
});
