// var utils  = require('course-utilities');
const hello = require('./hello');
describe('My hello', () => {
  test('works', () => {
    expect(hello.hello()).toEqual('Hello World');
  });
});
