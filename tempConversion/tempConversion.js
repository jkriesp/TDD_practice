const ftoc = function(ftemp) {
  let ctemp = (ftemp -32) * (5/9);
  return parseFloat(ctemp.toFixed(1));
}

const ctof = function(ctemp) {
  let ftemp = (ctemp * (9/5)) + 32;
  return parseFloat(ftemp.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
