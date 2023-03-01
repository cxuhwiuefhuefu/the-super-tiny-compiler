// 词法分析 转化为 token
export enum TokenTypes {
  Paren,
  Name,
  Number,
}

export interface Token {
  type: TokenTypes
  value: string
}


export function tokenizer(code: string) {
  const tokens: Token[] = []
  let current = 0

  while (current < code.length) {
    let char = code[current]

    // 匹配是空格
    const WHITESSPACE = /\s/;
    if(WHITESSPACE.test(char)) {
      current ++;
      continue;
    }


    // 匹配是 (
    if (char === '(') {
      tokens.push({
        type: TokenTypes.Paren,
        value: char,
      })
      current ++;
      continue;
    }

    if (char === ') ') {
      tokens.push({
        type: TokenTypes.Paren,
        value: char,
      })
       current++
       continue
    }

    // 匹配是字母
    const LETTERS = /[a-z]/i
    if (LETTERS.test(char)) {
      let value = ''
      while (LETTERS.test(char) && current < code.length) {
        // 下一个字符还是字母的话
        value += char
        char = code[++current]
        console.log(char, current)
      }
      tokens.push({
        type: TokenTypes.Name,
        value,
      })
    }

    // 匹配是数字
    const Number = /[a-z]/i
    if (Number.test(char)) {
      let value = ''
      while (Number.test(char) && current < code.length) {
        // 下一个字符还是字母的话
        value += char
        char = code[++current]
        console.log(char, current)
      }
      tokens.push({
        type: TokenTypes.Number,
        value,
      })
    }
  }

  return tokens
}
