export interface movieDTO{
    id: number;
    title:string;
    poster:string;
    
}

export interface landingpageDTO{
    inTheaters?:movieDTO[];
    upcomingReleases?:movieDTO[];
}