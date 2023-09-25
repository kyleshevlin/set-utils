import {
  difference,
  intersection,
  isDisjoint,
  isSubset,
  isSuperset,
  setOf,
  symmetricDifference,
  union,
} from '../src/index'

test('setOf', () => {
  expect(setOf(1, 2, 3)).toEqual(new Set([1, 2, 3]))
  expect(setOf('a', true, undefined)).toEqual(new Set(['a', true, undefined]))
})

test('union', () => {
  expect(union(setOf(), setOf())).toEqual(setOf())
  expect(union(setOf(1, 2, 3), setOf(4, 5, 6))).toEqual(setOf(1, 2, 3, 4, 5, 6))
})

test('intersection', () => {
  expect(intersection(setOf(1, 2, 3), setOf(true, false))).toEqual(setOf())
  expect(intersection(setOf(1, 2, 3), setOf(2, 3, 4))).toEqual(setOf(2, 3))
})

test('difference', () => {
  expect(difference(setOf(1, 2, 3), setOf(4, 5, 6))).toEqual(setOf(1, 2, 3))
  expect(difference(setOf(1, 2, 3), setOf(3, 4, 5))).toEqual(setOf(1, 2))
  expect(difference(setOf(1, 2, 3), setOf(1, 2, 3))).toEqual(setOf())
})

test('symmetricDifference', () => {
  expect(symmetricDifference(setOf(1, 2, 3), setOf(3, 4, 5))).toEqual(
    setOf(1, 2, 4, 5)
  )
  expect(symmetricDifference(setOf(1, 2, 3), setOf(4, 5, 6))).toEqual(
    setOf(1, 2, 3, 4, 5, 6)
  )
  expect(symmetricDifference(setOf(1, 2, 3), setOf(1, 2, 3))).toEqual(setOf())
})

test('isSubset', () => {
  expect(isSubset(setOf(2, 3), setOf(1, 2, 3, 4))).toEqual(true)
  expect(isSubset(setOf(1, 2, 3, 4), setOf(2, 3))).toEqual(false)
})

test('isSubset', () => {
  expect(isSuperset(setOf(2, 3), setOf(1, 2, 3, 4))).toEqual(false)
  expect(isSuperset(setOf(1, 2, 3, 4), setOf(2, 3))).toEqual(true)
})

test('isDisjoint', () => {
  expect(isDisjoint(setOf(1, 2, 3), setOf(4, 5, 6))).toEqual(true)
  expect(isDisjoint(setOf(1, 2, 3), setOf(3, 4, 5))).toEqual(false)
})
