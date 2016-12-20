let supertest = require('supertest');
let assert = require('chai').assert;
let server = supertest.agent('http://localhost:3000');

describe('when GET /users ', () => {
	it('should return status 200 and list users (array)', (done) => {
	        server
			.get('/api/v1/users')
			.expect(200)
			.expect('Content-type', /json/)
			.end((error, response) => {
				assert.equal(response.status, 200);
				assert.isArray(response.body);
				if (error) return done(error);
				done();			
			});
	});

});