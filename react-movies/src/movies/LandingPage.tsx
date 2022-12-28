import { useEffect, useState } from "react";
import { landingpageDTO } from "./movies.model";
import MoviesList from "./MoviesList";



export default function LandingPage(){
    const [movies,setMovies]=useState<landingpageDTO>({});

    useEffect(()=>{
    const timerId=setTimeout(()=>{
    
      setMovies({
        inTheaters:[{
          id:1,
          title:'Spider-Man: Far From Home',
          poster:'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
        },
        {
          id:2,
          title:'Luca',
          poster:'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Luca_%282021_film%29.png/220px-Luca_%282021_film%29.png'
        }]
        ,
        upcomingReleases:[
          {
            id:2,
            title:'Soul',
            poster:'https://upload.wikimedia.org/wikipedia/en/3/39/Soul_%282020_film%29_poster.jpg'
          }
        ]
      })
    
    },1000);
    return ()=>clearTimeout(timerId);
    });


    return(
        <>
         <h3> In Theaters</h3>
          <MoviesList movies={movies.inTheaters} />
          <h3>Upcoming Releases</h3>
          <MoviesList movies={movies.upcomingReleases} />
        </>
    )
}