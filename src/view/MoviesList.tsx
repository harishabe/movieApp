import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
// component
import Movie from '../component/Movie';

// Action
import { getMovies } from '../actions/actions';

// Reducer
import { IMovie } from '../reducers/reducer';

// root reducers
import { AppState } from '../helpers/rootReducer';

class MoviesList extends PureComponent<ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>, {}>{
    public componentDidMount() {
        const { getMovies, isLoaded, moviesLoadedAt } = this.props;
        const oneHour = 60 * 60 * 1000;
        if (!isLoaded || !moviesLoadedAt || Date.now() - moviesLoadedAt > oneHour) {
            getMovies();
        }
    }

    public render() {
        const { movies, isLoaded } = this.props;
        if (!isLoaded) {
            return <h1>Loading...</h1>;
        }
        return (
            <div>
                {movies.map((movie: IMovie) => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    movies: state.movies.movies,
    isLoaded: state.movies.moviesLoaded,
    moviesLoadedAt: state.movies.moviesLoadedAt
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
    bindActionCreators(
        {
            getMovies
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesList);