const numero = require('../index'),
    assert = require('assert');

let test = (description, assertTest) => {
    it(description, (done) => {
        try {
            assertTest();
            done();
        } catch (e) {
            done(e);
        }
    });
};

describe('testando estilo normal', () => {
    test('escrevendo do 0 ao 9', () => {
        ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove']
            .forEach((n, i) => assert.equal(numero.porExtenso(i), n));
    });

    test('escrevendo do 10 ao 19', () => {
        ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove']
            .forEach((n, i) => assert.equal(numero.porExtenso(i + 10), n))
    });

    test('escrevendo dezenas', () => {
        ['dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa']
            .forEach((n, i) => assert.equal(numero.porExtenso((i + 1) * 10), n))
    });

    test('escrevendo centenas', () => {
        ['dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa']
            .forEach((n, i) => assert.equal(numero.porExtenso((i + 1) * 10), n))
    });

    test('escrevendo milhares', () => {
        assert.equal(numero.porExtenso(1000), 'um mil');
        assert.equal(numero.porExtenso(2000), 'dois mil');
        assert.equal(numero.porExtenso(10000), 'dez mil');
        assert.equal(numero.porExtenso(20000), 'vinte mil');
    });

    test('escrevendo centenas de milhares', () => {
        ['cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']
            .forEach((n, i) => assert.equal(numero.porExtenso(((i + 1) * 100000)), n + ' mil'));
    });

    test('escrevendo números negativos', () => {
        assert.equal(numero.porExtenso(-1), 'menos um');
        assert.equal(numero.porExtenso(-200), 'menos duzentos');
        assert.equal(numero.porExtenso(-0.5), 'menos zero vírgula cinco');
    });
});

describe('testando README.md', () => {
    test('escrevendo exemplos', () => {
        assert.equal(numero.porExtenso(1), 'um');
        assert.equal(numero.porExtenso(1, numero.estilo.monetario), 'um real');
        assert.equal(numero.porExtenso(1, numero.estilo.porcentagem), 'um porcento');

        assert.equal(numero.porExtenso(1234.50), 'um mil duzentos e trinta e quatro vírgula cinco');
        assert.equal(numero.porExtenso('1234.50'), 'um mil duzentos e trinta e quatro vírgula cinquenta');

        assert.equal(numero.porExtenso(1234.5, numero.estilo.monetario), 'um mil duzentos e trinta e quatro reais e cinquenta centavos');

        assert.equal(numero.porExtenso(1234.50, numero.estilo.porcentagem), 'um mil duzentos e trinta e quatro vírgula cinco porcento');
        assert.equal(numero.porExtenso('1234.50', numero.estilo.porcentagem), 'um mil duzentos e trinta e quatro vírgula cinquenta porcento');
    });
});

describe('Issue #1', () => {
    test('escrevendo 1.000.090.000,00', () => {
        assert.equal(numero.porExtenso('1000090000.00', numero.estilo.monetario), 'um bilhão e noventa mil reais');
    });
});
