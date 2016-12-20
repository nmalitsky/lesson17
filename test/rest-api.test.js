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