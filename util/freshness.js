export const freshness = function(createdAt) {
  const c = new Date(createdAt);
  const diff = new Date() - c;
  const f = diff / 1000 / 60 / 60 / 24;
  // console.log(`at: ${c}, diff: ${diff}, days: ${f}`);
  return f;
}
