const nomes = require('./nomesExtenso/nomes'),
    dezenas = require('./nomesExtenso/dezenas'),
    casas = require('./nomesExtenso/casas');

module.exports = {
    getGroup,
    numberInFull
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
    let output = [],
        numbers = [];

    number = number.toString();
    while (number.length > 0) {
        let piece = number.length <= 3 ? number : number.substr(number.length - 3, 3);
        numbers.push({ number: +piece, name: getGroup(piece) });
        number = number.length - 3 > 0 ? number.substr(0, number.length - 3) : '';
    }

    if (numbers.length == 1 && numbers[0].number == 0)
        return numbers[0].name;
        
    for (var i = numbers.length - 1; i > 0; i--)
        if (numbers[i].number != 0)
            output.push(numbers[i].name + ' ' + (numbers[i].number == 1 ? casas[i].replace('ões', 'ão') : casas[i]));

    if (numbers.length && numbers[0].number > 0) 
        output.push(`${(numbers.length > 1 && (numbers[0].number < 100 || numbers[0].number % 100 == 0) ? 'e ' : '')}${numbers[0].name}`);
    else if (output.length > 1)
        output.splice(output.length - 1, 0, 'e');

    return output.join(' ');
}
