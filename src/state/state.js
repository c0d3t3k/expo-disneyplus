import {atom, useAtom} from 'jotai'
import * as _ from 'lodash';

export const profilesAtom = atom([
    {id:1, name: 'Caleb', image="stormtrooper.jpg"},
    {id:2, name: 'Kim', image="elsa.jpg"}
])

export const uiStateAtom = atom(
    {profileId: 1, selectedMovie: 2}
)

export const downloadsAtom = atom([
    {id: 1, profileId: 1, movieId: 1},
    {id: 2, profileId: 1, movieId: 2},
    {id: 3, profileId: 2, movieId: 3},
    {id: 4, profileId: 2, movieId: 4}
])

export const watchlistAtom = atom([
    {id: 1, profileId: 1, movieId: 7},
    {id: 2, profileId: 1, movieId: 10},
    {id: 3, profileId: 2, movieId: 11},
    {id: 4, profileId: 2, movieId: 13}
])

export const categoriesAtom = atom([
   {category: "hdr", movies:[19, 15, 2, 4]},
   {category: "hits", movies:[22,21, 20, 15, 11]},
   {category: "originals", movies:[23,10,21,16,11,13,6]},
   {category: "recommended", movies:[2,4,9,24,19,8,18,5]},
   {category: "trending", movies:[2,23,25,9,21,27,1]},
   {category: "vault", movies:[1,3,6,7,12,10,14,16,17,20,26]},
])

export const movies = [
    {id: 1, title:"Aladdin", image: "a" },
    {id: 2, title:"Avengers", image: "ae" },
    {id: 3, title:"Alice in Wonderland", image: "aiw" },
    {id: 4, title:"A New Hope - Episode IV", image: "anhe4" },
    {id: 5, title:"Attack of the Clones - Episode II", image: "aotce2" },
    {id: 6, title:"Bambi", image: "b" },
    {id: 7, title:"Beauty and the Beast", image: "batb" },
    {id: 8, title:"Civil War - Captain America", image: "cacw" },
    {id: 9, title:"Captain Marvel", image: "cm", slide:"captain-marvel"},
    {id: 10, title:"Fantasia", image: "f" },
    {id: 11, title:"Frozen", image: "fz" },
    {id: 12, title:"Hercules", image: "h" },
    {id: 13, title:"Invincible", image: "i" },
    {id: 14, title:"Pocahantas", image: "p" },
    {id: 15, title:"Rogue One - A Star Wars Story", image: "roasws" },
    {id: 16, title:"Sleeping Beauty", image: "sb" },
    {id: 17, title:"Snow White", image: "swatsd" },
    {id: 18, title:"Empire Strikes Back - Episode V", image: "tesbe5" },
    {id: 19, title:"Force Awakens - Episode VII", image: "tfae7" },
    {id: 20, title:"Hunchback of Notre Dame", image: "thond" },
    {id: 21, title:"The Lion King", image: "tlk" },
    {id: 22, title:"The Little Mermaid", image: "tlm" },
    {id: 23, title:"The Mandalorian", image: "tm", slide: "star-wars-mandalorian" },
    {id: 24, title:"Phantom Menace - Episode I", image: "tpme1" },
    {id: 25, title:"The Simpsons", image: "ts" },
    {id: 26, title:"Sword in the Stone", image: "tsits" },
    {id: 27, title:"Zootopia", image: "z" },
    {id: 27, title:"Avatar", image: "avtr", slide: "avatar" },
    {id: 27, title:"Avengers End Game", image: "aveg", slide: "avengers-endgame" },
]

