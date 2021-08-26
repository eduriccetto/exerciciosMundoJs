const test = require('../1-ex-atravessarRua');

describe('testar função de atravessar rua do ex 1', () => {
    it('atravessarRua', () => {
        const variavel = jest.spyOn(test,'atravessaRua')
        test.atravessaRua(7,132,14)
        expect(variavel).toBeCalledWith(7,132,14);
    })
});