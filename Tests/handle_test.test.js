const { expect }  = require('jest-mock');
import store from '../src/modules/Store.js';
const obj = {
    description: 'hi',
    completed: false,
    index: 1,
  };
describe('AddItem',()=>{
    test('testAdd',()=>{
               expect(store.add(obj)).toBe('success')
    });


}


);