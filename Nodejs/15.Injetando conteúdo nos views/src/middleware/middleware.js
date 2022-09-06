exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este é o valor da variárvel local.'
  next();
}


exports.outroMiddleware = (req, res, next) => {
  next();
}