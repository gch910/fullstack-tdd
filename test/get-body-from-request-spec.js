const EventEmitter = require('events');
const { expect } = require('chai');
const { getBodyFromRequest } = require('../get-body-from-request');
const { callbackify } = require('util');
describe("The getBodyFromRequest function", () => {
  let fakeReq = null;

  beforeEach(() => {
    fakeReq = new EventEmitter();
  });

  it('returns an empty string for no body', done => {

    const bodyPromise = getBodyFromRequest(fakeReq);
    fakeReq.emit('end');
    bodyPromise
      .then(body => {
        if (body === '') {
          done()
        } else {
          done(`Failed. got ${body}`)
        }
      })
  });

  it('returns the data read from the stream', done => {
    const bodyPromise = getBodyFromRequest(fakeReq);
    const data1 = "This is some";
    const data2 = " data from the browser";

    fakeReq.emit('data', data1);
    fakeReq.emit('data', data2);

    fakeReq.emit('end');

    bodyPromise
      .then(body => {
        if (body === data1 + data2) {
          done()
        } else {
          done(`Failed. Got ${body}`)
        }
      })

  });
});
