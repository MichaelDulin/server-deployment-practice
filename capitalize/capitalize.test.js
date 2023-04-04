const capitalize = require('./capitalize.js');

describe('As a User I want a way to capitalize my strings', () => {

    test('Should capitalize a string', () => {
        let output = capitalize('michael');
        expect(output).toEqual('MICHAEL');
    });
});