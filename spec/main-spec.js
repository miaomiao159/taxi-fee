const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it('行程在两公里以内', function() {

        var result = main(2, 1);
        expect(result).toEqual(6);
    });

    it('行程在两公里到八公里之间', function() {

        var result = main(8, 3);
        expect(result).toEqual(12);
    });

    it('行程在八公里以上', function() {

        var result = main(10, 5);
        expect(result).toEqual(14);
    });
});
