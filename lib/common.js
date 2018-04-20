const nomes = require('./nomesExtenso/nomes'),
    dezenas = require('./nomesExtenso/dezenas'),
    casas = require('./nomesExtenso/casas');

module.exports = {
    getGroup: getGroup,
    numberInFull: numberInFull
};

function getGroup(number) {
    if (number == '100')
        return 'cem';

    let output = '';
    for (let i = 0; i < number.length; i++) {
        let c = number[i];
        if (output) {
            if (c == '0')
                continue;
            output += ' e ';
        }

        if (((number.length == 2 && i == 0) || (number.length == 3 && i == 1)) && c == '1')
            return output + dezenas[+number[i + 1]];

        output += nomes[number.length - i - 1][+c];
    }
    return output;
}

function numberInFull(number) {
    let output = '',
        numeros = [];

    number = number.toString();
    while (number.length > 0) {
        let pedaco = number.length <= 3 ? number : number.substr(number.length - 3, 3);
        numeros.push({ number: +pedaco, name: getGroup(pedaco) });
        number = number.length - 3 > 0 ? number.substr(0, number.length - 3) : '';
    }

    if (numeros.length == 1 && numeros[0].number == 0)
        return numeros[0].name;

    for (var i = numeros.length - 1; i > 0; i--)
        if (numeros[i].number != 0) {
            output += (i != numeros.length - 2 && numeros[i].number != 1 ? numeros[i].name + ' ' : '') + (numeros[i].number == 1 ? casas[i].replace('ões', 'ão') : casas[i]);
            if (numeros[i - 1].number > 0)
                output += ' ';
        }

    if (numeros.length && numeros[0].number > 0)
        output += `${(numeros.length > 1 && (numeros[0].number < 100 || numeros[0].number % 100 == 0) ? 'e ' : '')}${numeros[0].name}`;

    return output;
}
