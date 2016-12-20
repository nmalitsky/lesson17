let supertest = require('supertest');
let assert = require('chai').assert;
let server = supertest.agent('http://localhost:3000');

describe('when POST /users ', () => {
	it('should return status 200 and message "User created"', (done) => {
	        server
			.post('/api/v1/users')
			.type('json')
    			.send('{"name": "Zoro", "score": "777"}')
			.expect(200)
			.expect('Content-type', /json/)
			.end((error, response) => {
				assert.equal(response.status, 200);
				assert.equal(response.body.message, 'User created');
				if (error) return done(error);
				done();			
			});
	});

});