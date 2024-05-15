const passport = require("passport");

exports.isAuth = (req,res,done)=>{
   return passport.authenticate('jwt')
};

exports.sanitizeUser=(user)=>{
    return {id:user.id,role:user.role}
}


exports.cookieExtractor = function(req) {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }
    //TODO : this is temporary token for testing without cookies
    // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDRmN2VhOGZkMzgwNDhkYzRhMDFkNyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE1Nzk2MDEyfQ.tFUR904lNmyJLpR1ym9PEbZ3Dg8qvVWinwjXdt326oQ"
    return token;
  };