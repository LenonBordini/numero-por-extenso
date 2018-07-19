# Número por extenso

[![Build Status](https://travis-ci.org/LenonBordini/numero-por-extenso.svg?branch=master)](https://travis-ci.org/LenonBordini/numero-por-extenso)

Escreve números por extenso, números normais, monetários e porcentagens.
Fácil implementação de novos tipos.
> Não está totalmente testado ainda

## Instalação

```shell
npm i numero-por-extenso --save
```

## Uso (Node.js)

```js
const numero = require('numero-por-extenso');
```

## Exemplos

```js
numero.porExtenso(1); // 'um'
numero.porExtenso(1, numero.estilo.monetario); // 'um real'
numero.porExtenso(1, numero.estilo.porcentagem); // 'um porcento'

// 'um mil duzentos e trinta e quatro vírgula cinco'
numero.porExtenso(1234.50);

// 'um mil duzentos e trinta e quatro vírgula cinquenta'
numero.porExtenso('1234.50');

// 'um mil duzentos e trinta e quatro reais e cinquenta centavos'
numero.porExtenso(1234.5, numero.estilo.monetario);

// 'um mil duzentos e trinta e quatro vírgula cinco porcento'
numero.porExtenso(1234.50, numero.estilo.porcentagem);
// 'um mil duzentos e trinta e quatro vírgula cinquenta porcento'
numero.porExtenso('1234.50', numero.estilo.porcentagem);

// Issue #1: 1.000.090.000,00 - 'um bilhão e noventa mil reais'
numero.porExtenso('1000090000.00', numero.estilo.monetario);
```
