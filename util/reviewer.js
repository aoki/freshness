export const applovals = function(body) {
  const l = body.split('\r\n').filter(e => {
    return e.match(/^- \[[x ]{1}\] @.+/)
  });
  return l.map(e => {
    return {
      approval: (e.indexOf('[x]') !== -1),
      user: e.match(/@.+[^ ]/)[0].slice(1)
    }
  });
}
