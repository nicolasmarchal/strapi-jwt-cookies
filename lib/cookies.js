const {COOKIE_NAME, payloadOpts, headersAndSignatureOpts} = require("../config");
const {splitJwt} = require("../utils");

const getCookies = (jwt) => {
    const { payload, headersAndSignature } = splitJwt(jwt)
    return [
        {name: COOKIE_NAME.PAYLOAD, payload: payload, opts: payloadOpts},
        {name:  COOKIE_NAME.HEADER_SIGNATURE, payload: headersAndSignature, opts: headersAndSignatureOpts}
    ]
}

module.exports = {
    getCookies
}