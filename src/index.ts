export function setOf<T extends any[]>(...items: T) {
  return new Set<T extends (infer U)[] ? U : never>(items);
}

export function union<A, B>(a: Set<A>, b: Set<B>) {
  return new Set([...a, ...b]);
}

export function intersection<A, B>(a: Set<A>, b: Set<B>) {
  const result = new Set<A extends B ? A : never>();

  for (const item of a) {
    if (b.has(item as any)) {
      result.add(item as any);
    }
  }

  return result;
}

export function difference<A>(a: Set<A>, b: Set<any>) {
  const result = new Set<A>();

  for (const item of a) {
    if (!b.has(item)) {
      result.add(item);
    }
  }

  return result;
}

export function symmetricDifference<A, B>(a: Set<A>, b: Set<B>) {
  return union(difference(a, b), difference(b, a));
}

export function isSubset(a: Set<any>, b: Set<any>) {
  return [...a].every((item) => b.has(item));
}

export function isSuperset(a: Set<any>, b: Set<any>) {
  return [...b].every((item) => a.has(item));
}

export function isDisjoint(a: Set<any>, b: Set<any>) {
  return intersection(a, b).size === 0;
}
