const main = require('../../main_maths');
const math = require('../../maths');

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
