const estilos = {
    normal: 'normal',
    monetario: 'monetario',
    porcentagem: 'porcentagem'
};

module.exports = {
    porExtenso,
    estilo: estilos
};

function porExtenso(numero, estilo = estilos.normal) {
    if (!estilos[estilo])
        throw new Error(`Estilo "${estilo}" inválido. Possíveis valores: normal, monetario, porcentagem`);

    return require('./lib/estilos/' + estilo)(numero);
}

