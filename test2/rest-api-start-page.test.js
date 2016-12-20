let supertest = require('supertest');
let assert = require('chai').assert;
let server = supertest.agent('http://localhost:3000');

describe('when open start page with RestAPI', () => {
	it('should return status 200 and welcome message in response (json)', (done) => {
	        server
			.get('/api/v1')
			.expect(200)
			.expect('Content-type', /json/)
			.end((error, response) => {
				assert.equal(response.status, 200);
				assert.equal(response.body.message, 'Welcome to REST API!');
				if (error) return done(error);
				done();			
			});
	});

});