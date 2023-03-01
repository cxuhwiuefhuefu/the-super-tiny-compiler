/*
 * @Author: Sunny
 * @Date: 2023-03-01 15:31:33
 * @LastEditors: Suuny
 * @LastEditTime: 2023-03-01 15:32:31
 * @Description: 
 * @FilePath: \the-super-tiny-compiler\parser.spec.ts
 */
// 表达式 number



import { test, expect } from 'vitest'
import { NodeTypes, parser } from './parser'
import { TokenTypes } from './tokenizer'


test('number', () => {
  const tokens = [
    {
      type: NodeTypes.Number,
      value: '2'
    }
  ]

  const ast = {
    type: 'Program',
    body: [
      {
        type: 'Number',
        value: '2'
      }
    ]
  }

  expect(parser(tokens)).toEqual(ast)
})