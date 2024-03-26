import avatar from '../../../assets/movies/avatar.jpg'
import avengers_endgame from '../../../assets/movies/avengers_endgame.jpg'
import avatar2 from '../../../assets/movies/avatarThe_Way_o_Water.jpg'
import { apiMovies } from '@/lib/api'

export const movies =[
  {
    "id": 1,
    "title": "Avatar",
    "year": 2009,
    "director": "James Cameron",
    "gross": "$2,923,706,026",
    "image": apiMovies + avatar.src
  },
  {
    "id": 2,
    "title": "Avengers: Endgame",
    "year": 2019,
    "director": "Joe Russo / Anthony Russo",
    "gross": "$2,799,439,100",
    "image":  apiMovies + avengers_endgame.src
  },
  {
    "id": 3,
    "title": "Avatar: The Way of Water",
    "year": 2022,
    "director": "James Cameron",
    "gross": "$2,320,250,281",
    "image": apiMovies + avatar2.src
  },
  {
    "id": 4,
    "title": "Titanic",
    "year": 1997,
    "director": "James Cameron",
    "gross": "$2,264,743,305"
  },
  {
    "id": 5,
    "title": "Star Wars: Episode VII - The Force Awakens",
    "year": 2015,
    "director": "J.J. Abrams",
    "gross": "$2,071,310,218"
  },
  {
    "id": 6,
    "title": "Avengers: Infinity War",
    "year": 2018,
    "director": "Joe Russo / Anthony Russo",
    "gross": "$2,052,415,039"
  },
  {
    "id": 7,
    "title": "Spider-Man: No Way Home",
    "year": 2021,
    "director": "Jon Watts",
    "gross": "$1,921,847,111"
  },
  {
    "id": 8,
    "title": "Jurassic World",
    "year": 2015,
    "director": "Colin Trevorrow",
    "gross": "$1,671,537,444"
  },
  {
    "id": 9,
    "title": "The Lion King",
    "year": 2019,
    "director": "Jon Favreau",
    "gross": "$1,663,075,401"
  },
  {
    "id": 10,
    "title": "The Avengers",
    "year": 2012,
    "director": "Joss Whedon",
    "gross": "$1,520,538,536"
  },
  {
    "id": 11,
    "title": "Furious 7",
    "year": 2015,
    "director": "James Wan",
    "gross": "$1,515,341,399"
  },
  {
    "id": 12,
    "title": "Top Gun: Maverick",
    "year": 2022,
    "director": "Joseph Kosinski",
    "gross": "$1,495,696,292"
  },
  {
    "id": 13,
    "title": "Frozen II",
    "year": 2019,
    "director": "Chris Buck / Jennifer Lee",
    "gross": "$1,453,683,476"
  },
  {
    "id": 14,
    "title": "Barbie",
    "year": 2023,
    "director": "Greta Gerwig",
    "gross": "$1,445,638,421"
  },
  {
    "id": 15,
    "title": "Avengers: Age of Ultron",
    "year": 2015,
    "director": "Joss Whedon",
    "gross": "$1,405,018,048"
  },
  {
    "id": 16,
    "title": "Frozen",
    "year": 2013,
    "director": "Chris Buck / Jennifer Lee",
    "gross": "$1,284,540,518"
  },
  {
    "id": 17,
    "title": "The Super Mario Bros. Movie",
    "year": 2023,
    "director": "Michael Jelenic / Aaron Horvath",
    "gross": "$1,360,325,400"
  },
  {
    "id": 18,
    "title": "Harry Potter and the Deathly Hallows: Part 2",
    "year": 2011,
    "director": "David Yates",
    "gross": "$1,342,359,942"
  },
  {
    "id": 19,
    "title": "Black Panther",
    "year": 2018,
    "director": "Ryan Coogler",
    "gross": "$1,349,926,083"
  },
  {
    "id": 20,
    "title": "Star Wars: Episode VIII - The Last Jedi",
    "year": 2017,
    "director": "Rian Johnson",
    "gross": "$1,334,407,706"
  },
  {
    "id": 21,
    "title": "Jurassic World: Fallen Kingdom",
    "year": 2018,
    "director": "J.A. Bayona",
    "gross": "$1,310,466,296"
  },
  {
    "id": 22,
    "title": "Beauty and the Beast",
    "year": 2017,
    "director": "Bill Condon",
    "gross": "$1,266,115,964"
  },
  {
    "id": 23,
    "title": "Incredibles 2",
    "year": 2018,
    "director": "Brad Bird",
    "gross": "$1,243,225,667"
  },
  {
    "id": 24,
    "title": "The Fate of the Furious",
    "year": 2017,
    "director": "F. Gary Gray",
    "gross": "$1,236,005,118"
  },
  {
    "id": 25,
    "title": "Iron Man 3",
    "year": 2013,
    "director": "Shane Black",
    "gross": "$1,215,577,205"
  },
  {
    "id": 26,
    "title": "Minions",
    "year": 2015,
    "director": "Kyle Balda / Pierre Coffin",
    "gross": "$1,159,444,662"
  },
  {
    "id": 27,
    "title": "The Lord of the Rings: The Return of the King",
    "year": 2003,
    "director": "Peter Jackson",
    "gross": "$1,147,633,833"
  },
  {
    "id": 28,
    "title": "Captain America: Civil War",
    "year": 2016,
    "director": "Joe Russo / Anthony Russo",
    "gross": "$1,155,046,416"
  },
  {
    "id": 29,
    "title": "Aquaman",
    "year": 2018,
    "director": "James Wan",
    "gross": "$1,148,528,393"
  },
  {
    "id": 30,
    "title": "Skyfall",
    "year": 2012,
    "director": "Sam Mendes",
    "gross": "$1,142,471,295"
  },
  {
    "id": 31,
    "title": "Spider-Man: Far from Home",
    "year": 2019,
    "director": "Jon Watts",
    "gross": "$1,131,927,996"
  },
  {
    "id": 32,
    "title": "Captain Marvel",
    "year": 2019,
    "director": "Ryan Fleck / Anna Boden",
    "gross": "$1,131,416,446"
  },
  {
    "id": 33,
    "title": "Transformers: Dark of the Moon",
    "year": 2011,
    "director": "Michael Bay",
    "gross": "$1,123,794,079"
  },
  {
    "id": 34,
    "title": "Jurassic Park",
    "year": 1993,
    "director": "Steven Spielberg",
    "gross": "$1,109,802,321"
  },
  {
    "id": 35,
    "title": "The Dark Knight Rises",
    "year": 2012,
    "director": "Christopher Nolan",
    "gross": "$1,084,939,099"
  },
  {
    "id": 36,
    "title": "Transformers: Age of Extinction",
    "year": 2014,
    "director": "Michael Bay",
    "gross": "$1,104,054,072"
  },
  {
    "id": 37,
    "title": "Joker",
    "year": 2019,
    "director": "Todd Phillips",
    "gross": "$1,074,458,282"
  },
  {
    "id": 38,
    "title": "Star Wars: Episode IX - The Rise of Skywalker",
    "year": 2019,
    "director": "J.J. Abrams",
    "gross": "$1,077,022,372"
  },
  {
    "id": 39,
    "title": "Toy Story 4",
    "year": 2019,
    "director": "Josh Cooley",
    "gross": "$1,073,841,394"
  },
  {
    "id": 40,
    "title": "Toy Story 3",
    "year": 2010,
    "director": "Lee Unkrich",
    "gross": "$1,067,316,101"
  },
  {
    "id": 41,
    "title": "Pirates of the Caribbean: Dead Man's Chest",
    "year": 2006,
    "director": "Gore Verbinski",
    "gross": "$1,066,179,747"
  },
  {
    "id": 42,
    "title": "Rogue One: A Star Wars Story",
    "year": 2016,
    "director": "Gareth Edwards",
    "gross": "$1,058,682,142"
  },
  {
    "id": 43,
    "title": "Aladdin",
    "year": 2019,
    "director": "Guy Ritchie",
    "gross": "$1,054,304,000"
  },
  {
    "id": 44,
    "title": "Pirates of the Caribbean: On Stranger Tides",
    "year": 2011,
    "director": "Rob Marshall",
    "gross": "$1,046,721,266"
  },
  {
    "id": 45,
    "title": "Despicable Me 3",
    "year": 2017,
    "director": "Pierre Coffin / Kyle Balda",
    "gross": "$1,034,800,131"
  },
  {
    "id": 46,
    "title": "Finding Dory",
    "year": 2016,
    "director": "Andrew Stanton / Angus MacLane",
    "gross": "$1,029,266,989"
  },
  {
    "id": 47,
    "title": "The Dark Knight",
    "year": 2008,
    "director": "Christopher Nolan",
    "gross": "$1,004,558,444"
  },
  {
    "id": 48,
    "title": "Star Wars: Episode I - The Phantom Menace",
    "year": 1999,
    "director": "George Lucas",
    "gross": "$1,027,082,707"
  },
  {
    "id": 49,
    "title": "Zootopia",
    "year": 2016,
    "director": "Byron Howard / Rich Moore / Jared Bush",
    "gross": "$1,025,521,689"
  },
  {
    "id": 50,
    "title": "Alice in Wonderland",
    "year": 2010,
    "director": "Tim Burton",
    "gross": "$1,025,468,216"
  }
]