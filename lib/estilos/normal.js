const common = require('../common'),
    casasDecimais = require('../nomesExtenso/casasDecimais');

module.exports = porExtenso;

function porExtenso(numero) {
    let numberStr = numero.toString().replace('-', '').split('.'),
        numberBefore = numberStr[0] || 0,
        numberAfter = numberStr[1];

    let numberBeforeExtended = (numero < 0 ? 'menos ' : '') + common.numberInFull(numberBefore),
        numberAfterExtended = '';

    if (+numberAfter) {
        numberAfter = numberAfter.replace(/0+$/g, '');
        numberAfterExtended = ` vírgula ${common.numberInFull(numberAfter)}`;

        let casaDecimal = descobreNomeCasaDecimal(numberAfter);
        if (casaDecimal)
            numberAfterExtended += ` ${casaDecimal}`;
    }

    return numberBeforeExtended + numberAfterExtended;
}

function descobreNomeCasaDecimal(numberAfter) {
    let casaDecimal = casasDecimais[numberAfter.length - 1] || '';

    // plural
    if (casaDecimal && +numberAfter !== 1) {
        casaDecimal = casaDecimal.split(' ');
        casaDecimal[0] = casaDecimal[0] + 's';
        casaDecimal = casaDecimal.join(' ');
    }

    return casaDecimal;
}
