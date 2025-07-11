import request from 'supertest';
import app from '../src/server';

describe('API testings', () => {
    it('should return 200 success', () => {
        request(app)
            .get('/healths')
            .expect('Content-Type', /json/)
            .expect('Content-Length', '16')
            .expect(200, {
                success: true
            })
            .end(function (err, res) {
                if (err) throw err;
            });

    });
});