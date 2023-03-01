/*
 * @Author: Sunny
 * @Date: 2023-02-28 18:34:40
 * @LastEditors: Suuny
 * @LastEditTime: 2023-03-01 16:31:00
 * @Description: 
 * @FilePath: \the-super-tiny-compiler\tokenizer.spec.ts
 */
import {test, expect} from 'vitest'
import {tokenizer, TokenTypes} from './tokenizer'

test.skip('tokenizer', () => {
  const code = `(add 2 (subtract 4 2))`
  const tokens = [
    { type: TokenTypes.Paren, value: '(' },
    { type: TokenTypes.Name, value: 'add' },
    { type: TokenTypes.Number, value: '2' },
    { type: TokenTypes.Paren, value: '(' },
    { type: TokenTypes.Name, value: 'subtract' },
    { type: TokenTypes.Number, value: '4' },
    { type: TokenTypes.Number, value: '2' },
    { type: TokenTypes.Paren, value: ')' },
    { type: TokenTypes.Paren, value: ')' },
  ]

  expect(tokenizer(code)).toEqual(tokens)
})


test.skip('paren', () => {
  const code = `(`
  const tokens = [{ type: TokenTypes.Paren, value: "(" }];

  expect(tokenizer(code)).toEqual(tokens)
})

test.skip('right paren', () => {
  const code = `(`
  const tokens = [{ type: TokenTypes.Paren, value: "(" }];

  expect(tokenizer(code)).toEqual(tokens)
})



test.skip('add', () => {
  const code = `add`
  const tokens = [{ type: TokenTypes.Name, value: "add" }];

  expect(tokenizer(code)).toEqual(tokens)
})


test.skip('number', () => {
  const code = `22`
  const tokens = [{ type: TokenTypes.Number, value: "a" }];

  expect(tokenizer(code)).toEqual(tokens)
})


test.skip('(add 1 2)', () => {
  const code = `(add 1 2)`
  const tokens = [
    {type: TokenTypes.Paren, value: "("},
    {type: TokenTypes.Name, value: "add"},
    {type: TokenTypes.Number, value: "1"},
    {type: TokenTypes.Number, value: "2"},
    {type: TokenTypes.Paren, value: ")"},
  ];

  expect(tokenizer(code)).toEqual(tokens)
})
