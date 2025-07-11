import { IAwardsIntervalResponse, IMoviesItem } from "../@types";

const mock = {
    min: [{
        producer: 'Producer min',
        interval: 1,
        previousWin: 2,
        followingWin: 3
    }],
    max: [{
        producer: 'Producer max',
        interval: 1,
        previousWin: 2,
        followingWin: 3
    }]
}

export default class AwardsIntervalModel {

    calculate(data: Array<IMoviesItem>): IAwardsIntervalResponse {
        console.log(data);
        return mock;
    }
}