//request, response, next() -- if not next() middleware will catch the request and not pass it on

const isSignedIn = (req, res, next) => {
    if(req.session.user) { //checks if there is a user in the system
        return next() // run next middleware (if applicable) or next route
    }
    res.redirect('/auth/sign-in') //if there is not a user then they need to sign up
};

module.exports = isSignedIn;
