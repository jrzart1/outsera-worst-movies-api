"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../src/server"));
describe('API testings', () => {
    it('GET /healths should return 200 success', (done) => {
        (0, supertest_1.default)(server_1.default)
            .get('/healths')
            .expect('Content-Type', /json/)
            .expect(200, {
            success: true
        }, done);
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
        };
        (0, supertest_1.default)(server_1.default)
            .get('/awards-interval')
            .expect('Content-Type', /json/)
            .expect(200, resp, done);
    });
});
