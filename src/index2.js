import get from 'lodash/get'

const myData = {
  aaa: {
    bbb: {
      ccc: 'ddd'
    }
  }
}

console.log(get(myData, 'aaa.xxx.ccc'))
console.log(get(myData, 'aaa.bbb.ccc'))
