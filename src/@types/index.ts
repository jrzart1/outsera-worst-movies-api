export interface IMoviesItem {
    year: string;
    title: string;
    studios: string;
    producers: string;
    winner: string;
}

export interface IAwardsIntervalResponseItem {
    producer: string;
    interval: number;
    previousWin: number;
    followingWin: number;
}

export interface IAwardsIntervalResponse {
    min: Array<IAwardsIntervalResponseItem>;
    max: Array<IAwardsIntervalResponseItem>;
}


/*
{
    "min": [
        {
            "producer": "Producer 1",
            "interval": 1,
            "previousWin": 2008,
            "followingWin": 2009
        },
        {
            "producer": "Producer 2",
            "interval": 1,
            "previousWin": 2018,
            "followingWin": 2019
        }
    ],
    "max": [
        {
            "producer": "Producer 1",
            "interval": 99,
            "previousWin": 1900,
            "followingWin": 1999
        },
        {
            "producer": "Producer 2",
            "interval": 99,
            "previousWin": 2000,
            "followingWin": 2099
        }
    ]
}
*/