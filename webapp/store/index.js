export const SET_TOKEN = 'SET_TOKEN'
export const SET_USER = 'SET_USER'
const cookieparser = require('cookieparser')

export const actions = {
  async nuxtServerInit(store, { ssrContext }) {
    const { cookie } = ssrContext.req.headers
    if (!cookie) {
      await store.dispatch('logout')
      return
    }
    const parsed = cookieparser.parse(cookie)
    if (parsed['apollo-token']) {
      await store.dispatch('auth/login', parsed['apollo-token'])
    } else {
      await store.dispatch('auth/logout')
    }
  },
}
