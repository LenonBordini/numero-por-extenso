# Número por extenso

[![Build Status](https://travis-ci.org/LenonBordini/numero-por-extenso.svg?branch=master)](https://travis-ci.org/LenonBordini/numero-por-extenso)

Escreve números por extenso: normais, monetários e porcentagens.
Fácil implementação de novos tipos.

---

## Instalação

```shell
npm i numero-por-extenso
```

---

## Uso

```js
const numero = require('numero-por-extenso');
```

### Estilos existentes

- normal (padrão)
- monetario
- porcentagem

### Exemplos

Números inteiros:

```js
numero.porExtenso(128);
// 'cento e vinte e oito'

numero.porExtenso(128, numero.estilo.monetario);
// 'cento e vinte e oito reais'

numero.porExtenso(128, numero.estilo.porcentagem);
// 'cento e vinte e oito por cento'
```

Números decimais:

```js
numero.porExtenso(10.50);
// 'dez vírgula cinco décimos'

numero.porExtenso(10.50, numero.estilo.monetario);
// 'dez reais e cinquenta centavos'

numero.porExtenso(10.50, numero.estilo.porcentagem);
// 'dez vírgula cinco décimos por cento'
```

Números gigantes:

```js
numero.porExtenso(9_876_543_210);
// 'nove bilhões oitocentos e setenta e seis milhões quinhentos e quarenta e três mil duzentos e dez'

numero.porExtenso(-87_654_321, numero.estilo.monetario);
// 'menos oitenta e sete milhões seiscentos e cinquenta e quatro mil trezentos e vinte e um reais'

numero.porExtenso(123_456.7891, numero.estilo.porcentagem);
// 'cento e vinte e três mil quatrocentos e cinquenta e seis vírgula sete mil oitocentos e noventa e um décimos de milésimo por cento'
```

Maior número possível (type number):

- 999_999_999_999_999.9

Maior número possível (type string):

- '999999999999999999999999999999999999999999999.99999999999999999999'

---

## Licença

MIT License - Copyright (c) 2020 Lenon Bordini
