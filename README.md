# Cálculo Índice Equilíbrio

Desafio de Programação: Retorna índice de equilibrio de um array.

## Descrição

Dado um vetor com N números inteiros, o índice de equilíbrio deste vetor é o número inteiro P (com 0 ≤ P < N) onde a soma dos elementos do vetor com índices inferiores a P é igual a soma dos elementos de índices superiores a P. Isto é:

A[0] + A[1] + ... + A[P−1] = A[P+1] + ... + A[N−2] + A[N−1]

Assumimos que a soma de zero elementos é igual a zero. Isso pode acontecer se P = 0 ou se P = N-1.

Por exemplo, tendo o seguinte vetor com 7 elementos:

A[0] = -7;
A[1] = 1;
A[2] = 5;
A[3] = 2;
A[4] = -4;
A[5] = 3;
A[6] = 0.

Então:

P = 3 é um índice de equilíbrio deste vetor, já que A[0] + A[1] + A[2] = A[4] + A[5] + A[6]
P = 6 também é um índice de equilíbrio deste vetor, já que A[0] + A[1] + A[2] + A[3] + A[4] + A[5] = 0 e não existem elementos com índices maiores que 6.

Escreva uma função que, dado um vetor A com índices iniciando em zero, com N número inteiros, retorna qualquer um de seus índices de equilíbrio. A função deve retornar -1 se o índice de equilíbrio não existir.

## Execução

```sh
npm install
npm test
```
