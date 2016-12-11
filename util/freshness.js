import {maybe} from 'perchance';

export const freshness = function (createdAt, from) {
  const c = new Date(createdAt);
  const now = maybe(from).unwrap(v => new Date(v), _ => new Date());
  const diff = now.getTime() - c.getTime();
  return diff / 1000 / 60 / 60 / 24;
};
