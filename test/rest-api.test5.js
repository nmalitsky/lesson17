let supertest = require('supertest');
let assert = require('chai').assert;
let server = supertest.agent('http://localhost:3000');

describe('when GET /users/:user_id ', () => {
	it('should return status 200 and json with field "name" and "score""', (done) => {
	        server
			.get('/api/v1/users/584f0a0b94e75a2fc028fea5')
			.expect(200)
			.expect('Content-type', /json/)
			.end((error, response) => {
				assert.equal(response.status, 200);
				assert.isDefined(response.body.name, '"name" has been defined');
				assert.isDefined(response.body.score, '"score" has been defined');
				if (error) return done(error);
				done();			
			});
	});

});