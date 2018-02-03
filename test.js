'use strict'

const assert = require('assert')
const flatten = require('.')

describe('flatten()', function () {
  it('should flatten an array', function () {
    assert.strictEqual(JSON.stringify([1, 2, 3]), JSON.stringify(flatten([[[1], 2], [3]])))
  })

  it('should do nothing if depth is zero', function () {
    const arr = [[[1], 2], [3]]
    assert.strictEqual(JSON.stringify(arr), JSON.stringify(flatten(arr, {depth: 0})))
  })

  it('should only flatten up to a certain depth', function () {
    assert.strictEqual(JSON.stringify([[1], 2, 3]), JSON.stringify(flatten([[[1], 2], [3]], {depth: 1})))
  })

  it('should support the bind operator', function () {
    assert.strictEqual(JSON.stringify([1, 2, 3]), JSON.stringify(flatten.call([[[1], 2], [3]])))
  })
})
