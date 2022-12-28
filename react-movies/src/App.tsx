import { useEffect, useState } from 'react';
import './App.css';
import Menu from './movies/Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from'./route-config'
function App() {



// const inTheaters: movieDTO[]=[{
//   id:1,
//   title:'Spider-Man: Far From Home',
//   poster:'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
// },
// {
//   id:2,
//   title:'Luca',
//   poster:'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Luca_%282021_film%29.png/220px-Luca_%282021_film%29.png'
// }];

// const upcomingReleases:movieDTO[]=[
//   {
//     id:2,
//     title:'Soul',
//     poster:'https://upload.wikimedia.org/wikipedia/en/3/39/Soul_%282020_film%29_poster.jpg'
//   }
  // ]

  return (

    <BrowserRouter >
      <Menu />
      <div className='container'>
        <Switch>
          {
            routes.map(route =>
              <Route key={route.path} path={route.path} exact={route.exact}>
                <route.component/>
              </Route>
            )}

        </Switch>

      </div>
    </BrowserRouter>
  )
}

export default App;
