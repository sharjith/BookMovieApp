import React, { useState, useEffect } from "react";
import Header from "../../common/header/Header";
import './Home.css';
import MovieList from "./MovieList";


function Home(props) {

    const [movies, setMovies] = useState([
        /*{
            "id": "7d174a25-ba31-45a8-85b4-b06ffc9d5f8f",
            "title": "Sanju",
            "storyline": "Coming from a family of cinematic legends, East Indian actor Sanjay Dutt reaches dizzying heights of success -- but also battles numerous addictions and other personal demons",
            "genres": [
                "Drama"
            ],
            "duration": 162,
            "poster_url": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Sanju_-_Theatrical_poster.jpg/220px-Sanju_-_Theatrical_poster.jpg",
            "trailer_url": "https://www.youtube.com/watch?v=1J76wN0TPI4",
            "wiki_url": "https://en.wikipedia.org/wiki/Sanju",
            "release_date": "2018-06-29",
            "censor_board_rating": "UA",
            "rating": 4.0,
            "status": "RELEASED",
            "artists": [
                {
                    "id": "7c174b25-bb31-46a8-87b4-c06ffc9d5f8f",
                    "first_name": "Ranbir",
                    "last_name": "Kapoor",
                    "role_type": "ACTOR",
                    "profile_description": "Ranbir Kapoor (born 28 September 1982) is an Indian actor and film producer. He is one of the highest-paid actors of Hindi cinema and has featured in Forbes India's Celebrity 100 list since 2012. Kapoor is the recipient of several awards, including five Filmfare Awards",
                    "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/72/Ranbir_Kapoor_promoting_Bombay_Velvet.jpg",
                    "wiki_url": "https://en.wikipedia.org/wiki/Ranbir_Kapoor"
                },
                {
                    "id": "8c174b25-bb31-56a8-88b4-d06ffc9d5f89",
                    "first_name": "Manisha",
                    "last_name": "Koirala",
                    "role_type": "ACTOR",
                    "profile_description": "Manisha Koirala (born 16 August 1970) is a Nepalese actress who mainly appears in Hindi films, though she has worked in several South Indian and Nepali films. Noted for her acting prowess, Koirala is the recipient of several accolades, including four Filmfare Awards—and is one of India's most well-known actresses",
                    "profile_url": "https://upload.wikimedia.org/wikipedia/commons/2/20/Manisha_Koirala_graces_her_film_Dear_Maya%E2%80%99s_media_meet_%2805%29.jpg",
                    "wiki_url": "https://en.wikipedia.org/wiki/Manisha_Koirala"
                },
                {
                    "id": "9c174b25-cb31-66a8-98b4-d06ffc9d5f9f",
                    "first_name": "Rajkumar",
                    "last_name": "Hirani",
                    "role_type": "DIRECTOR",
                    "profile_description": "Rajkumar Hirani (born 20 November 1962) is an Indian film director and editor. He is widely regarded as one of the most successful and critically acclaimed filmmakers of the Hindi film industry. Hirani is known for directing the Hindi films Munna Bhai M.B.B.S (2003), Lage Raho Munnabhai (2006), 3 Idiots (2009), PK (2014) and Sanju (2018). All of his films have been huge commercial and critical successes.[2] Most have won several awards, including the national awards, and have often been regarded by the media and audiences as some of the most path-breaking films in the history of Indian cinema.[3][4] He has won 15 Filmfare Awards",
                    "profile_url": "https://upload.wikimedia.org/wikipedia/commons/4/44/Rajkumar_Hirani_2014.jpg",
                    "wiki_url": "https://en.wikipedia.org/wiki/Rajkumar_Hirani"
                }
            ]
        },
        {
            "id": "009ae262-a234-11e8-b475-720006ceb890",
            "title": "The Godfather",
            "storyline": "A chilling portrait of the Corleone familys rise and near fall from power in America along with balancing the story of the Sicilian clans ugly crime business in which they are engaged.",
            "genres": [
                "Drama",
                "Crime"
            ],
            "duration": 177,
            "poster_url": "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
            "trailer_url": "https://www.youtube.com/watch/?v=sY1S34973zA",
            "wiki_url": "https://en.wikipedia.org/wiki/The_Godfather",
            "release_date": "1972-03-15",
            "censor_board_rating": "A",
            "rating": 9.2,
            "status": "RELEASED",
            "artists": [
                {
                    "id": "f114b346-a237-11e8-9077-720006ceb890",
                    "first_name": "Marlon",
                    "last_name": "Brando",
                    "role_type": "ACTOR",
                    "profile_description": "Marlon Brando Jr. was an American actor and film director. He is credited with bringing realism to film acting and helping to popularize the Stanislavski system of acting having studied with Stella Adler in the 1940s. Regarded for his cultural influence on 20th century film, Brandos Academy Award-winning performances include that of Terry Malloy in On the Waterfront (1954) and Don Vito Corleone in The Godfather (1972). Brando was an activist for many causes, notably the civil rights movement and various Native American movements.",
                    "profile_url": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Marlon_Brando_%28cropped%29.jpg",
                    "wiki_url": "https://en.wikipedia.org/wiki/Marlon_Brando"
                },
                {
                    "id": "359f7e8a-a23b-11e8-9077-720006ceb890",
                    "first_name": "Al",
                    "last_name": "Pacino",
                    "role_type": "ACTOR",
                    "profile_description": "Alfredo James Pacino is an American actor and filmmaker. Pacino has had a career spanning over five decades, during which time he has received numerous accolades and honors both competitive and honorary, among them an Academy Award, two Tony Awards, two Primetime Emmy Awards, a British Academy Film Award, four Golden Globe Awards, the Lifetime Achievement Award from the American Film Institute, the Golden Globe Cecil B. DeMille Award, and the National Medal of Arts. He is also one of few performers to have won a competitive Oscar, an Emmy, and a Tony Award for acting, dubbed the Triple Crown of Acting.",
                    "profile_url": "https://upload.wikimedia.org/wikipedia/commons/9/98/Al_Pacino.jpg",
                    "wiki_url": "https://en.wikipedia.org/wiki/Al_Pacino"
                }
            ]
        },
        {
            "id": "00ae33e8-a235-11e8-9077-720006ceb890",
            "title": "The Revenant",
            "storyline": "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
            "genres": [
                "Drama",
                "Action",
                "Adventure"
            ],
            "duration": 156,
            "poster_url": "https://upload.wikimedia.org/wikipedia/en/b/b6/The_Revenant_2015_film_poster.jpg",
            "trailer_url": "https://www.youtube.com/watch?v=LoebZZ8K5N0",
            "wiki_url": "https://en.wikipedia.org/wiki/The_Revenant_(2015_film)",
            "release_date": "2015-12-16",
            "censor_board_rating": "UA",
            "rating": 8.0,
            "status": "RELEASED",
            "artists": [
                {
                    "id": "24614e76-a238-11e8-9077-720006ceb890",
                    "first_name": "Leonardo",
                    "last_name": "DiCaprio",
                    "role_type": "ACTOR",
                    "profile_description": "Leonardo Wilhelm DiCaprio is an American actor and film producer. DiCaprio began his career by appearing in television commercials in the late 1980s. He next had recurring roles in various television series, such as the soap opera Santa Barbara and the sitcom Growing Pains. DiCaprios portrayals of Howard Hughes in The Aviator (2004) and Hugh Glass in The Revenant won him the Golden Globe Award for Best Actor – Motion Picture Drama. His performance as Jordan Belfort in The Wolf of Wall Street won him the Golden Globe award for Best Actor – Motion Picture Musical or Comedy. He also won the Academy Award for Best Actor and BAFTA Award for his performance in The Revenant. DiCaprio is the founder of his own production company, Appian Way Productions.",
                    "profile_url": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Leonardo_DiCaprio_visited_Goddard_Saturday_to_discuss_Earth_science_with_Piers_Sellers_%2826105091624%29_cropped.jpg",
                    "wiki_url": "https://en.wikipedia.org/wiki/Leonardo_DiCaprio"
                },
                {
                    "id": "2461973c-a238-11e8-9077-720006ceb890",
                    "first_name": "Tom",
                    "last_name": "Hardy",
                    "role_type": "ACTOR",
                    "profile_description": "Edward Thomas Hardy is an English actor, producer, and former model. Hardy made his debut in the Ridley Scott film Black Hawk Down, and has since had notable roles in films such as Star Trek: Nemesis, RocknRolla, Bronson, Warrior, Tinker Tailor Soldier Spy, Lawless, Locke, The Drop, and The Revenant, for which he received a nomination for the Academy Award for Best Supporting Actor. In 2015, Hardy portrayed Mad Max Rockatansky in Mad Max: Fury Road and both Kray twins in Legend. He has also appeared in three Christopher Nolan films: Inception, as Bane in The Dark Knight Rises, and Dunkirk",
                    "profile_url": "https://upload.wikimedia.org/wikipedia/commons/3/30/Tom_Hardy_Locke_Premiere.jpg",
                    "wiki_url": "https://en.wikipedia.org/wiki/Tom_Hardy"
                }
            ]
        },
        {
            "id": "066e720c-a235-11e8-9077-720006ceb890",
            "title": "Annabelle: Creation",
            "storyline": "12 years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, where they soon become the target of the dollmakers possessed creation, Annabelle.",
            "genres": [
                "Horror",
                "Suspense"
            ],
            "duration": 109,
            "poster_url": "https://upload.wikimedia.org/wikipedia/en/0/08/Annabelle_Creation.jpg",
            "trailer_url": "https://www.youtube.com/watch?v=KisPhy7T__Q",
            "wiki_url": "https://en.wikipedia.org/wiki/Annabelle:_Creation",
            "release_date": "2017-08-11",
            "censor_board_rating": "A",
            "rating": 6.6,
            "status": "RELEASED",
            "artists": [
                {
                    "id": "246165d2-a238-11e8-9077-720006ceb890",
                    "first_name": "Anthony",
                    "last_name": "LaPaglia",
                    "role_type": "ACTOR",
                    "profile_description": "Anthony M. LaPaglia is an Australian actor. He played the role of Joe in the coming of age comedy Empire Records and John in the film Autumn In New York, as well as FBI agent Jack Malone on the American TV series Without a Trace, for which he won a Golden Globe Award for Best Actor – Television Series Drama. He also appeared in 8 episodes of Frasier as Daphne Moons alcoholic brother Simon.",
                    "profile_url": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Anthony_LaPaglia_and_Gia_Carides_at_the_Man_of_Steel_premiere_in_Sydney_%289123807673%29.jpg",
                    "wiki_url": "https://en.wikipedia.org/wiki/Anthony_LaPaglia"
                }
            ]
        },
        {
            "id": "0c364cd2-a235-11e8-9077-720006ceb890",
            "title": "Shahid",
            "storyline": "Shahid Azmi becomes an unlikely champion of human rights, particularly for Indias Muslim minority.",
            "genres": [
                "Drama",
                "Crime",
                "Social"
            ],
            "duration": 129,
            "poster_url": "https://upload.wikimedia.org/wikipedia/en/c/cd/Shahid_Poster_%282013%29.jpg",
            "trailer_url": "https://www.youtube.com/watch?v=XiQXmIn7qbI",
            "wiki_url": "https://en.wikipedia.org/wiki/Shahid_(film)",
            "release_date": "2013-10-18",
            "censor_board_rating": "U",
            "rating": 8.6,
            "status": "RELEASED",
            "artists": [
                {
                    "id": "24615f4c-a238-11e8-9077-720006ceb890",
                    "first_name": "Rajkummar",
                    "last_name": "Rao",
                    "role_type": "ACTOR",
                    "profile_description": "Rajkummar Rao, also known as Rajkumar Yadav, is an Indian actor. He has established a career in Hindi cinema and is the recipient of several awards, including a National Film Award, three Filmfare Awards, and an Asia Pacific Screen Award. He is cited in the media as one of the most talented actors of his generation.",
                    "profile_url": "https://en.wikipedia.org/wiki/Rajkummar_Rao#/media/File:Rajkummar_Rao_World_Premiere_Newton_Zoopalast_Berlinale_2017_02.jpg",
                    "wiki_url": "https://en.wikipedia.org/wiki/Rajkummar_Rao"
                },
                {
                    "id": "246162a8-a238-11e8-9077-720006ceb890",
                    "first_name": "Kay Kay",
                    "last_name": "Menon",
                    "role_type": "ACTOR",
                    "profile_description": "Kay Kay Menon is an Indian film, stage and television actor who works predominantly in Hindi cinema, and also in Gujarati, Tamil and Telugu cinema. He has also won the award for best actor for the film Shoonya from Festival of Arab and Asian cinema",
                    "profile_url": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Kay_Kay_Menon_at_libas_store.jpg",
                    "wiki_url": "https://en.wikipedia.org/wiki/Kay_Kay_Menon"
                }
            ]
        },
        {
            "id": "52974690-a235-11e8-9077-720006ceb890",
            "title": "The Dark Knight",
            "storyline": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            "genres": [
                "Drama",
                "Action",
                "Crime"
            ],
            "duration": 152,
            "poster_url": "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
            "trailer_url": "https://www.youtube.com/watch?v=EXeTwQWrcwY",
            "wiki_url": "https://en.wikipedia.org/wiki/The_Dark_Knight_(film)",
            "release_date": "2008-07-18",
            "censor_board_rating": "A",
            "rating": 9.0,
            "status": "RELEASED",
            "artists": [
                {
                    "id": "5485e5b4-a23b-11e8-9077-720006ceb890",
                    "first_name": "Christian",
                    "last_name": "Bale",
                    "role_type": "ACTOR",
                    "profile_description": "Christian Charles Philip Bale is an English actor and producer. He has starred both in blockbuster films and smaller projects from independent producers and art houses. Born in Haverfordwest, Wales, to English parents, he first caught the public eye at the age of 13, when he was cast in the starring role of Steven Spielbergs Empire of the Sun. After a string of semi-successful feature films, he portrayed Wall Street banker and serial killer Patrick Bateman in American Psycho to widespread critical acclaim. His reputation for going great lengths to portray characters in films was first noted in the psychological thriller The Machinist, where he lost 28.5 kg to play the main lead. Within six months he gained 45 kg to star as Batman in Christopher Nolans Batman Begins",
                    "profile_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Christian_Bale_2014_%28cropped%29.jpg/1024px-Christian_Bale_2014_%28cropped%29.jpg",
                    "wiki_url": "https://en.wikipedia.org/wiki/Christian_Bale"
                },
                {
                    "id": "5485eb18-a23b-11e8-9077-720006ceb890",
                    "first_name": "Heath",
                    "last_name": "Ledger",
                    "role_type": "ACTOR",
                    "profile_description": "Heath Andrew Ledger was an Australian actor and director. After performing roles in several Australian television and film productions during the 1990s, Ledger left for the United States in 1998 to further develop his film career. His work comprised nineteen films, including Brokeback Mountain and The Dark Knight. Ledger received numerous posthumous accolades for his critically acclaimed performance in the film The Dark Knight, including the Academy Award for Best Supporting Actor and Best Actor International Award at the 2008 Australian Film Institute Awards",
                    "profile_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Heath_Ledger_%28Berlin_Film_Festival_2006%29_revised.jpg/1024px-Heath_Ledger_%28Berlin_Film_Festival_2006%29_revised.jpg",
                    "wiki_url": "https://en.wikipedia.org/wiki/Heath_Ledger"
                }
            ]
        }*/
    ]);

    const getUpcomingMovies = async () => {
        const url = 'http://localhost:8085/api/v1/movies?limit=1000';
        const response = await fetch(url);
        const responseJson = await response.json();
        //console.log(responseJson);
        const published = responseJson.movies.filter((movie)=>{
            console.log(movie);
            if(movie.status == 'PUBLISHED')
                return movie;
        });
        console.log(published);
        setMovies(published);
    }

    useEffect(() => {
        getUpcomingMovies();
    }, [])


    return (
        <div>
            <Header>Header</Header>
            <div>
                <div id='movies-heading'>
                    Upcoming Movies
                </div>
                <div>
                    <MovieList movies={movies} />
                </div>

            </div>
        </div>
    );
}

export default Home;