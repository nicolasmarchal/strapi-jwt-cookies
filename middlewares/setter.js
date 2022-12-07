'use strict'

const { isFromFrontend } = require('../utils')
const {getCookies} = require("../lib/cookies");

module.exports = (config, { strapi }) => {
  return async ({ request, response, cookies }, next) => {
    await next()

    // split jwt into cookies
    if (
      isFromFrontend(request) &&
      response.status === 200 &&
      response.body.jwt
    ) {
      const [payload, headersAndSignature ] = getCookies(response.body.jwt)
      cookies.set(payload.name, payload.payload, payload.opts)
      cookies.set(headersAndSignature.name, headersAndSignature.payload, headersAndSignature.opts)
    }
  }
}
