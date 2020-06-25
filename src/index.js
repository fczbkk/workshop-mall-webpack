import get from 'lodash/get'
import { doSomething as doSomethingElse } from './utilities.js'

doSomethingElse()

const myData = {
  aaa: {
    bbb: {
      ccc: 'ddd'
    }
  }
}

console.log(get(myData, 'aaa.xxx.ccc'))
console.log(get(myData, 'aaa.bbb.ccc'))
