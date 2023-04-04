'use strict';

const supertest = require('supertest');
const app = require('./server.js');
const request = supertest(app);

describe('As a user I want to send a request and get a capitalized message', () => {
    test('Should return MICHAEL when sending a GET request to /capitalize-me', async () => {
        let response = await request.get('/capitalize-me?message=Michael');
        expect(response.text).toEqual('MICHAEL');
    });
});