module.exports = (req, res, next) => {
    console.log(`Ip client: ${req.connection.remoteAddress}`);
    next();
}

// error 
/**
 module.exports= (req, res, next) =>{
    console.log(`Ip client: ${req.connection.remoteAdress}`)
    next()
}
 */