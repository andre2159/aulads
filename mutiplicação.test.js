
const  multiplicacao  = require('./mutiplicacao');

test('multiplica 2 por 3 e retorna 6', () => {
    expect(multiplicacao(2, 3)).toBe(6);
});

test('multiplica 5 por 0 e retorna 0', () => {
    expect(multiplicacao(5, 0)).toBe(0);
});

test('multiplica números negativos', () => {
    expect(multiplicacao(-2, 4)).toBe(-8);
});

test('multiplica 0 por qualquer número', () => {
    expect(multiplicacao(0, 5)).toBe(0);
});