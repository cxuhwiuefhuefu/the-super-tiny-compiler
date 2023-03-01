import { Token, TokenTypes } from './tokenizer'


export enum NodeTypes {
  Root,
  Number
}

interface Node {
   type: NodeTypes
}

interface RootNode extends Node {
  body: NumberNode[]
}

interface NumberNode extends Node {
  value: string
}

export function parser (tokens: Token[]) {

  const rootNode:RootNode = {
    type: 'Program',
    body: []
  }

  let current = 0;
  let token = tokens[current];
  if(token.type === TokenTypes.Number) {
    const numberNode: NumberNode = {
      type: NodeTypes.Number,
      value: token.value
    }
    rootNode.body.push(numberNode)
  }

  return {
     type: 'Program',
      body: [
        {
          type: 'Number',
          value: '2'
        }
      ]
  }
}