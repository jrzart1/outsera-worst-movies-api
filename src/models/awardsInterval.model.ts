import { IAwardsIntervalResponse, IMoviesItem } from "../@types";

export default class AwardsIntervalModel {

    calculate(data: Array<IMoviesItem>): IAwardsIntervalResponse {

        // filtrar apenas vencedores
        const winners = data.filter(i => i.winner);

        // obtém lista de produtores individualmente
        const producers = [... new Set(winners.map(w => w.producers.split(/,| and /).map(p => p.trim())).flat().filter(f => f))]

        // extrapola array original, cria nova lista de filmes por produtor
        const moviesByProducer = []
        producers.map(p => {
            winners.map(w => {
                if (w.producers.indexOf(p) > -1) {
                    moviesByProducer.push({
                        year: w.year,
                        title: w.title,
                        studios: w.studios,
                        producer: p
                    })
                }
            })
        })

        // ordena por year
        const moviesSort = moviesByProducer.sort((a, b) => (a.year - b.year));

        // calcula intervalo para cada produtor, remove unicos e ordena
        const intervalByProducer = producers.map(p => {
            const producerMovies = moviesSort.filter(mv => mv.producer === p);
            return {
                producer: p,
                interval: producerMovies[producerMovies.length - 1].year - producerMovies[0].year,
                previousWin: producerMovies[0].year,
                followingWin: producerMovies[producerMovies.length - 1].year
            }
        }).filter(f => f.interval).sort((a, b) => (a.interval - b.interval))

        // define intervalo vencedor
        const minWinner = intervalByProducer[0].interval;
        const maxWinner = intervalByProducer[intervalByProducer.length - 1].interval;

        // retorna
        return {
            min: intervalByProducer.filter(i => i.interval === minWinner),
            max: intervalByProducer.filter(i => i.interval === maxWinner)
        }
    }
}