exports.middlewareGlobal = (req, res, next) => {
  console.log('Sou middleware global');
  next();
}


exports.outroMiddleware = (req, res, next) => {
  console.log('Sou seu outro middleware');
  next();
}