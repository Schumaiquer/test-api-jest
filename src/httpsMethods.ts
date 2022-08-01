import request from 'supertest'

export default class HttpsMethods {

    static postToken(
        endpoint: string,
        payload: object,
        host: string = 'https://barrigarest.wcaquino.me' || ''
    ) {
        return request(host).post(endpoint).send(payload)
    }
} 