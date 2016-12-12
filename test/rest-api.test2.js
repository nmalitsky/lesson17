let supertest = require('supertest');
let assert = require('chai').assert;
let server = supertest.agent('http://localhost:3000');

describe('when open undefined url on RestAPI host', () => {
	it('should return status 400 and error message in response (json)', (done) => {
	        server
			.get('/qqq')
			.expect(400)
			.expect('Content-type', /json/)
			.end((error, response) => {
				assert.equal(response.status, 400);
				assert.equal(response.body.message, 'Undefinded URL - use /api/v1/');
				if (error) return done(error);
				done();			
			});
	});

});