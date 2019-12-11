const estilos = {
    normal: 'normal',
    monetario: 'monetario',
    porcentagem: 'porcentagem'
};

module.exports = {
    porExtenso: porExtenso,
    estilo: estilos
};

function porExtenso(numero, estilo = estilos.normal, masculino = true) {
    return require('./lib/estilos/' + estilo)(numero, masculino);
}
