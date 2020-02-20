const common = require('../common');

module.exports = porExtenso;

function porExtenso(numero) {
    let numberStr = numero.toString().replace('-', '').split('.'),
        numberBefore = numberStr[0] || 0,
        numberAfter = (numberStr[1] + '00').substr(0, 2);

    let numberBeforeExtended = (numero < 0 ? 'menos ' : '') + common.numberInFull(numberBefore),
        numberAfterExtended = common.numberInFull(numberAfter);

    return (numberBefore > 0 ? numberBeforeExtended + (numberBefore == 1 ? ' real' : ' reais') : '') +
        (numberAfter > 0 ? (numberBefore > 0 ? ' e ' : '') + numberAfterExtended + (numberAfter == 1 ? ' centavo' : ' centavos') : '');
}
