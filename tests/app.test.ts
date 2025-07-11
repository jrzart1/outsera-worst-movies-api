import request from 'supertest';
import app from '../src/server';

describe('API testings', () => {
    it('GET /healths should return 200 success', (done) => {
        request(app)
            .get('/healths')
            .expect('Content-Type', /json/)
            .expect(200, {
                success: true
            }, done)
    });

    it('GET /awards-interval should return the winners', (done) => {

        const resp = {
            min: [
                {
                    producer: "Joel Silver",
                    interval: 1,
                    previousWin: "1990",
                    followingWin: "1991"
                }
            ],
            max: [
                {
                    producer: "Matthew Vaughn",
                    interval: 13,
                    previousWin: "2002",
                    followingWin: "2015"
                }
            ]
        }

        request(app)
            .get('/awards-interval')
            .expect('Content-Type', /json/)
            .expect(200, resp, done)
    });
});