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
        ['cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']
            .forEach((n, i) => assert.equal(numero.porExtenso((i + 1) * 100), n))
    });

    test('escrevendo milhares', () => {
        assert.equal(numero.porExtenso(1000), 'um mil');
        assert.equal(numero.porExtenso(2000), 'dois mil');
    });

    test('escrevendo dezenas de milhares', () => {
        assert.equal(numero.porExtenso(10000), 'dez mil');
        assert.equal(numero.porExtenso(30000), 'trinta mil');
    });

    test('escrevendo centenas de milhares', () => {
        ['cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']
            .forEach((n, i) => assert.equal(numero.porExtenso(((i + 1) * 100000)), n + ' mil'));
    });

    test('escrevendo números negativos', () => {
        assert.equal(numero.porExtenso(-1), 'menos um');
        assert.equal(numero.porExtenso(-200), 'menos duzentos');
        assert.equal(numero.porExtenso(-0.5), 'menos zero vírgula cinco décimos');
    });
});

describe('testando README.md', () => {
    test('escrevendo exemplos', () => {
        // Números inteiros
        assert.equal(numero.porExtenso(128), 'cento e vinte e oito');
        assert.equal(numero.porExtenso(128, numero.estilo.monetario), 'cento e vinte e oito reais');
        assert.equal(numero.porExtenso(128, numero.estilo.porcentagem), 'cento e vinte e oito por cento');

        // Números decimais
        assert.equal(numero.porExtenso(10.50), 'dez vírgula cinco décimos');
        assert.equal(numero.porExtenso(10.50, numero.estilo.monetario), 'dez reais e cinquenta centavos');
        assert.equal(numero.porExtenso(10.50, numero.estilo.porcentagem), 'dez vírgula cinco décimos por cento');

        // Números gigantes
        assert.equal(numero.porExtenso(9_876_543_210), 'nove bilhões oitocentos e setenta e seis milhões quinhentos e quarenta e três mil duzentos e dez');
        assert.equal(numero.porExtenso(-87_654_321, numero.estilo.monetario), 'menos oitenta e sete milhões seiscentos e cinquenta e quatro mil trezentos e vinte e um reais');
        assert.equal(numero.porExtenso(123_456.7891, numero.estilo.porcentagem), 'cento e vinte e três mil quatrocentos e cinquenta e seis vírgula sete mil oitocentos e noventa e um décimos de milésimo por cento');

        // Maior número possível (type number)
        assert.equal(numero.porExtenso(999_999_999_999_999.9), 'novecentos e noventa e nove trilhões novecentos e noventa e nove bilhões novecentos e noventa e nove milhões novecentos e noventa e nove mil novecentos e noventa e nove vírgula nove décimos');

        // Maior número possível (type string)
        assert.equal(numero.porExtenso('999999999999999999999999999999999999999999999.99999999999999999999'), 'novecentos e noventa e nove tredecilhões novecentos e noventa e nove duodecilhões novecentos e noventa e nove undecilhões novecentos e noventa e nove decilhões novecentos e noventa e nove nonilhões novecentos e noventa e nove octilhões novecentos e noventa e nove septilhões novecentos e noventa e nove sextilhões novecentos e noventa e nove quintilhões novecentos e noventa e nove quatrilhões novecentos e noventa e nove trilhões novecentos e noventa e nove bilhões novecentos e noventa e nove milhões novecentos e noventa e nove mil novecentos e noventa e nove vírgula noventa e nove quintilhões novecentos e noventa e nove quatrilhões novecentos e noventa e nove trilhões novecentos e noventa e nove bilhões novecentos e noventa e nove milhões novecentos e noventa e nove mil novecentos e noventa e nove centésimos de quintilionésimo');
    });
});

describe('Issue #1', () => {
    test('escrevendo 1.000.090.000,00', () => {
        assert.equal(numero.porExtenso('1000090000.00', numero.estilo.monetario), 'um bilhão e noventa mil reais');
    });
});

describe('Issue #4', () => {
    test('escrevendo percentuais com zeros a esquerda', () => {
        assert.equal(numero.porExtenso(3.01, numero.estilo.porcentagem), 'três vírgula um centésimo por cento');
        assert.equal(numero.porExtenso(50.05, numero.estilo.porcentagem), 'cinquenta vírgula cinco centésimos por cento');
        assert.equal(numero.porExtenso(1.049, numero.estilo.porcentagem), 'um vírgula quarenta e nove milésimos por cento');
    });
});
