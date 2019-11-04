import { EReduxActionTypes } from '../helpers/rootReducer';
import { IReduxGetMoviesAction } from './../actions/actions';

export interface IMovie {
    backdrop_path: string;
    id: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
}

export interface IReduxMoviesState {
    movies: IMovie[];
    moviesLoaded: boolean;
    moviesLoadedAt?: number;
    movie?: IMovie;
    movieLoaded: boolean;
}

const initialState: IReduxMoviesState = {
    movies: [],
    moviesLoaded: false,
    moviesLoadedAt: undefined,
    movie: undefined,
    movieLoaded: false
};

type TMoviesReducerActions = IReduxGetMoviesAction;

export default function (state: IReduxMoviesState = initialState, action: TMoviesReducerActions) {
    switch (action.type) {
        case EReduxActionTypes.GET_MOVIES:
            return { ...state, movies: action.data, moviesLoaded: true, moviesLoadedAt: Date.now() };
        default:
            return state;
    }
}