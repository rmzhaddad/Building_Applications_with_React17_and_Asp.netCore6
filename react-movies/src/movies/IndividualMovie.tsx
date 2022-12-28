
import css from './IndividualMovie.module.css'
import { movieDTO } from './movies.model'

export default function IndividualMovie(props:movieDTO){
    const buildLink= () =>`/movie/${props.id}`
    return (
        <div className={css.div}>

            <a>
                <img alt="Poster" src={props.poster} />
            </a>
            <p> 
                <a href={buildLink()}>{props.title} </a></p>

        </div>
    )
}