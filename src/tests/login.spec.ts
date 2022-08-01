import * as dotenv from 'dotenv'
import endpoints from '../endpoint.json'
import Https from '../httpsMethods'
dotenv.config()

describe('desafio', () => {
    it('login', async () => {
        const endpoint = endpoints.token
        const payload = { email: process.env.USERNAME_TEST, senha: process.env.PASSWORD_TEST }
        const res = await Https.postToken(endpoint, payload)
        expect(res.statusCode).toEqual(200)
    })
})

