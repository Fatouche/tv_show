export type TV_show_type = {
    id: string;
    backdrop_path: string;
    poster_path: string;
    vote_average: number;
    overview: string;
    name: string;
}

export type PopularResult = {
    results: Array<
        TV_show_type
    >
}