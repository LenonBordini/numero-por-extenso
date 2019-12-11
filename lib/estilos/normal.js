const common = require('./../common'),
    nomes = require('./../nomesExtenso/nomes');

module.exports = porExtenso;

function porExtenso(numero) {
    let numberStr = numero.toString().split('.'),
        numberBefore = +numberStr[0] || 0,
        numberAfter = +numberStr[1] || 0;

    let numberBeforeExtended = (numero < 0 ? 'menos ' : '') + common.numberInFull(numberBefore.toString().replace('-', ''));
    numberAfterExtended = '';

    if (numberAfter) {
        if (numberAfter >= -999 && numberAfter <= 999)
            numberAfterExtended = common.numberInFull(numberAfter);
        else
            numberAfterExtended = numberAfter.toString().split('').map(x => nomes[0][+x]).join(' ');
    }

    return numberBeforeExtended + (numberAfter > 0 ? ' vírgula ' + numberAfterExtended : '');
}
