const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt
const passport = require('passport')
const User = require("../models/user")

let secretOrKey = process.env.secretOrKey

let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey
}

passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
        const { id } = jwt_payload
        const user = await User.findById(id);
        try {
            user ? done(null, user) : done(null, false)
        } catch (error) {
            console.log(error)
        }
    })
)

module.exports = isAuth = () => passport.authenticate("jwt", { session: false })