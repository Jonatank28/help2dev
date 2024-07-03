import avatar from '@/assets/movies/avatar.jpg'
import avengers_endgame from '@/assets/movies/avengers_endgame.jpg'
import avatar2 from '@/assets/movies/avatarThe_Way_o_Water.jpg'
import titanic from '@/assets/movies/titanic.jpg'
import star_Wars_The_Force_Wars from '@/assets/movies/star_wars_ep_VII.jpg'
import avengers_infinity_war from '@/assets/movies/Avengers_Infinity_War.jpg'
import spider_man_no_way_home from '@/assets/movies/Spider-Man_No_Way_Home.jpg'
import jurassic_World from '@/assets/movies/jurassic_World.jpg'
import the_lion_king from '@/assets/movies/The_Lion_King.webp'
import the_Avengers from '@/assets/movies/the_Avengers.webp'
import furious_7 from '@/assets/movies/Furious_7.jpg'
import top_Gun_Maverick from '@/assets/movies/top_Gun_Maverick.jpg'
import frozen_II from '@/assets/movies/Frozen_II.jpg'
import barbie from '@/assets/movies/Barbie.jpg'
import avengers_Age_of_Ultron from '@/assets/movies/Avengers_Age_of_Ultron.jpg'
import frozen from '@/assets/movies/Frozen.jpg'
import the_Super_Mario from '@/assets/movies/The_Super_Mario_Bros.jpg'
import harry_Potter_and_the_Deathly_Hallows_Part_2 from '@/assets/movies/harry_Potter_and_the_Deathly_Hallows_Part 2.jpg'
import black_Panther from '@/assets/movies/black_Panther.jpg'
import star_Wars_VIII from '@/assets/movies/star_Wars_Episode_VIII_The_Last_Jedi.jpg'
import jurassic_World_Fallen_Kingdom from '@/assets/movies/Jurassic_World_Fallen_Kingdom.webp'
import beauty_and_the_Beast from '@/assets/movies/beauty_and_the_Beast.jpg'
import incredibles_2 from '@/assets/movies/Incredibles_2.jpg'
import furious_8 from '@/assets/movies/the_Fate_of_the_Furious_8.webp'
import iron_Man_3 from '@/assets/movies/Iron_Man_3.jpg'
import minions from '@/assets/movies/Minions.webp'
import the_Lord_of_the_Rings_3 from '@/assets/movies/the_Lord_of_the_Rings_3.jpg'
import captain_America_Civil_War from '@/assets/movies/Captain_America_Civil_War.jpg'
import aquaman from '@/assets/movies/Aquaman.jpg'
import skyfall from '@/assets/movies/Skyfall.webp'
import spider_Man_Far_from_Home from '@/assets/movies/spider-Man_Far_from_Home.jpg'
import captain_Marvel from '@/assets/movies/captain_Marvel.jpg'
import transformers_Dark_of_the_Moon from '@/assets/movies/Transformers_Dark_of_the_Moon.jpg'
import jurassic_Park from '@/assets/movies/Jurassic_Park.webp'
import the_Dark_Knight_Rises from '@/assets/movies/The_Dark_Knight_Rises.jpg'
import transformers_Age_of_Extinction from '@/assets/movies/transformers_Age_of_Extinction.jpg'
import joker from '@/assets/movies/Joker.jpg'
import star_Wars_IX from '@/assets/movies/Star_Wars_Episode_IX-The_Rise_Skywalker.jpg'
import toy_Story_4 from '@/assets/movies/Toy_Story_4.webp'
import toy_Story_3 from '@/assets/movies/Toy_Story_3.webp'
import pirates_of_the_Caribbean_Dead_Mans_Chest from '@/assets/movies/Pirates_of_the_Caribbean_Dead_Mans_Chest.jpg'
import rogue_One from '@/assets/movies/rogue_One_A_Star_Wars_Story.jpg'
import aladdin from '@/assets/movies/Aladdin.webp'
import pirates_of_the_Caribbean_On_Stranger_Tides from '@/assets/movies/Pirates_of_the_Caribbean_On_Stranger_Tides.jpg'
import despicable_Me_3 from '@/assets/movies/Despicable_Me_3.jpg'
import finding_Dory from '@/assets/movies/Finding_Dory.jpg'
import the_Dark_Knight from '@/assets/movies/The_Dark_Knight.jpg'
import star_Wars_I from '@/assets/movies/Star_Wars_Episode_I-The_Phantom_Menace.jpg'
import zootopia from '@/assets/movies/Zootopia.jpg'
import alice_in_Wonderland from '@/assets/movies/Alice_in_Wonderland.jpg'
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
    "gross": "$2,264,743,305",
    "image": apiMovies + titanic.src 
  },
  {
    "id": 5,
    "title": "Star Wars: Episode VII - The Force Awakens",
    "year": 2015,
    "director": "J.J. Abrams",
    "gross": "$2,071,310,218",
    "image": apiMovies + star_Wars_The_Force_Wars.src
  },
  {
    "id": 6,
    "title": "Avengers: Infinity War",
    "year": 2018,
    "director": "Joe Russo / Anthony Russo",
    "gross": "$2,052,415,039",
    "image": apiMovies + avengers_infinity_war.src
  },
  {
    "id": 7,
    "title": "Spider-Man: No Way Home",
    "year": 2021,
    "director": "Jon Watts",
    "gross": "$1,921,847,111",
    "image": apiMovies + spider_man_no_way_home.src
  },
  {
    "id": 8,
    "title": "Jurassic World",
    "year": 2015,
    "director": "Colin Trevorrow",
    "gross": "$1,671,537,444",
    "image": apiMovies + jurassic_World.src
  },
  {
    "id": 9,
    "title": "The Lion King",
    "year": 2019,
    "director": "Jon Favreau",
    "gross": "$1,663,075,401",
    "image": apiMovies + the_lion_king.src
  },
  {
    "id": 10,
    "title": "The Avengers",
    "year": 2012,
    "director": "Joss Whedon",
    "gross": "$1,520,538,536",
    "image": apiMovies + the_Avengers.src
  },
  {
    "id": 11,
    "title": "Furious 7",
    "year": 2015,
    "director": "James Wan",
    "gross": "$1,515,341,399",
    "image": apiMovies + furious_7.src
  },
  {
    "id": 12,
    "title": "Top Gun: Maverick",
    "year": 2022,
    "director": "Joseph Kosinski",
    "gross": "$1,495,696,292",
    "image": apiMovies + top_Gun_Maverick.src
  },
  {
    "id": 13,
    "title": "Frozen II",
    "year": 2019,
    "director": "Chris Buck / Jennifer Lee",
    "gross": "$1,453,683,476",
    "image": apiMovies + frozen_II.src
  },
  {
    "id": 14,
    "title": "Barbie",
    "year": 2023,
    "director": "Greta Gerwig",
    "gross": "$1,445,638,421",
    "image": apiMovies + barbie.src
  },
  {
    "id": 15,
    "title": "Avengers: Age of Ultron",
    "year": 2015,
    "director": "Joss Whedon",
    "gross": "$1,405,018,048",
    "image": apiMovies + avengers_Age_of_Ultron.src
  },
  {
    "id": 16,
    "title": "Frozen",
    "year": 2013,
    "director": "Chris Buck / Jennifer Lee",
    "gross": "$1,284,540,518",
    "image": apiMovies + frozen.src
  },
  {
    "id": 17,
    "title": "The Super Mario Bros. Movie",
    "year": 2023,
    "director": "Michael Jelenic / Aaron Horvath",
    "gross": "$1,360,325,400",
    "image": apiMovies + the_Super_Mario.src
  },
  {
    "id": 18,
    "title": "Harry Potter and the Deathly Hallows: Part 2",
    "year": 2011,
    "director": "David Yates",
    "gross": "$1,342,359,942",
    "image": apiMovies + harry_Potter_and_the_Deathly_Hallows_Part_2.src
  },
  {
    "id": 19,
    "title": "Black Panther",
    "year": 2018,
    "director": "Ryan Coogler",
    "gross": "$1,349,926,083",
    "image": apiMovies + black_Panther.src
  },
  {
    "id": 20,
    "title": "Star Wars: Episode VIII - The Last Jedi",
    "year": 2017,
    "director": "Rian Johnson",
    "gross": "$1,334,407,706",
    "image": apiMovies + star_Wars_VIII.src
  },
  {
    "id": 21,
    "title": "Jurassic World: Fallen Kingdom",
    "year": 2018,
    "director": "J.A. Bayona",
    "gross": "$1,310,466,296",
    "image": apiMovies + jurassic_World_Fallen_Kingdom.src
  },
  {
    "id": 22,
    "title": "Beauty and the Beast",
    "year": 2017,
    "director": "Bill Condon",
    "gross": "$1,266,115,964",
    "image": apiMovies + beauty_and_the_Beast.src
  },
  {
    "id": 23,
    "title": "Incredibles 2",
    "year": 2018,
    "director": "Brad Bird",
    "gross": "$1,243,225,667",
    "image": apiMovies + incredibles_2.src
  },
  {
    "id": 24,
    "title": "The Fate of the Furious",
    "year": 2017,
    "director": "F. Gary Gray",
    "gross": "$1,236,005,118",
    "image": apiMovies + furious_8.src
  },
  {
    "id": 25,
    "title": "Iron Man 3",
    "year": 2013,
    "director": "Shane Black",
    "gross": "$1,215,577,205",
    "image": apiMovies + iron_Man_3.src
  },
  {
    "id": 26,
    "title": "Minions",
    "year": 2015,
    "director": "Kyle Balda / Pierre Coffin",
    "gross": "$1,159,444,662",
    "image": apiMovies + minions.src
  },
  {
    "id": 27,
    "title": "The Lord of the Rings: The Return of the King",
    "year": 2003,
    "director": "Peter Jackson",
    "gross": "$1,147,633,833",
    "image": apiMovies + the_Lord_of_the_Rings_3.src
  },
  {
    "id": 28,
    "title": "Captain America: Civil War",
    "year": 2016,
    "director": "Joe Russo / Anthony Russo",
    "gross": "$1,155,046,416",
    "image": apiMovies + captain_America_Civil_War.src
  },
  {
    "id": 29,
    "title": "Aquaman",
    "year": 2018,
    "director": "James Wan",
    "gross": "$1,148,528,393",
    "image": apiMovies + aquaman.src
  },
  {
    "id": 30,
    "title": "Skyfall",
    "year": 2012,
    "director": "Sam Mendes",
    "gross": "$1,142,471,295",
    "image": apiMovies + skyfall.src
  },
  {
    "id": 31,
    "title": "Spider-Man: Far from Home",
    "year": 2019,
    "director": "Jon Watts",
    "gross": "$1,131,927,996",
    "image": apiMovies + spider_Man_Far_from_Home.src
  },
  {
    "id": 32,
    "title": "Captain Marvel",
    "year": 2019,
    "director": "Ryan Fleck / Anna Boden",
    "gross": "$1,131,416,446",
    "image": apiMovies + captain_Marvel.src
  },
  {
    "id": 33,
    "title": "Transformers: Dark of the Moon",
    "year": 2011,
    "director": "Michael Bay",
    "gross": "$1,123,794,079",
    "image": apiMovies + transformers_Dark_of_the_Moon.src
  },
  {
    "id": 34,
    "title": "Jurassic Park",
    "year": 1993,
    "director": "Steven Spielberg",
    "gross": "$1,109,802,321",
    "image": apiMovies + jurassic_Park.src
  },
  {
    "id": 35,
    "title": "The Dark Knight Rises",
    "year": 2012,
    "director": "Christopher Nolan",
    "gross": "$1,084,939,099",
    "image": apiMovies + the_Dark_Knight_Rises.src
  },
  {
    "id": 36,
    "title": "Transformers: Age of Extinction",
    "year": 2014,
    "director": "Michael Bay",
    "gross": "$1,104,054,072",
    "image": apiMovies + transformers_Age_of_Extinction.src
  },
  {
    "id": 37,
    "title": "Joker",
    "year": 2019,
    "director": "Todd Phillips",
    "gross": "$1,074,458,282",
    "image": apiMovies + joker.src
  },
  {
    "id": 38,
    "title": "Star Wars: Episode IX - The Rise of Skywalker",
    "year": 2019,
    "director": "J.J. Abrams",
    "gross": "$1,077,022,372",
    "image": apiMovies + star_Wars_IX.src
  },
  {
    "id": 39,
    "title": "Toy Story 4",
    "year": 2019,
    "director": "Josh Cooley",
    "gross": "$1,073,841,394",
    "image": apiMovies + toy_Story_4.src
  },
  {
    "id": 40,
    "title": "Toy Story 3",
    "year": 2010,
    "director": "Lee Unkrich",
    "gross": "$1,067,316,101",
    "image": apiMovies + toy_Story_3.src
  },
  {
    "id": 41,
    "title": "Pirates of the Caribbean: Dead Man's Chest",
    "year": 2006,
    "director": "Gore Verbinski",
    "gross": "$1,066,179,747",
    "image": apiMovies + pirates_of_the_Caribbean_Dead_Mans_Chest.src
  },
  {
    "id": 42,
    "title": "Rogue One: A Star Wars Story",
    "year": 2016,
    "director": "Gareth Edwards",
    "gross": "$1,058,682,142",
    "image": apiMovies + rogue_One.src
  },
  {
    "id": 43,
    "title": "Aladdin",
    "year": 2019,
    "director": "Guy Ritchie",
    "gross": "$1,054,304,000",
    "image": apiMovies + aladdin.src
  },
  {
    "id": 44,
    "title": "Pirates of the Caribbean: On Stranger Tides",
    "year": 2011,
    "director": "Rob Marshall",
    "gross": "$1,046,721,266",
    "image": apiMovies + pirates_of_the_Caribbean_On_Stranger_Tides.src
  },
  {
    "id": 45,
    "title": "Despicable Me 3",
    "year": 2017,
    "director": "Pierre Coffin / Kyle Balda",
    "gross": "$1,034,800,131",
    "image": apiMovies + despicable_Me_3.src
  },
  {
    "id": 46,
    "title": "Finding Dory",
    "year": 2016,
    "director": "Andrew Stanton / Angus MacLane",
    "gross": "$1,029,266,989",
    "image": apiMovies + finding_Dory.src
  },
  {
    "id": 47,
    "title": "The Dark Knight",
    "year": 2008,
    "director": "Christopher Nolan",
    "gross": "$1,004,558,444",
    "image": apiMovies + the_Dark_Knight.src
  },
  {
    "id": 48,
    "title": "Star Wars: Episode I - The Phantom Menace",
    "year": 1999,
    "director": "George Lucas",
    "gross": "$1,027,082,707",
    "image": apiMovies + star_Wars_I.src
  },
  {
    "id": 49,
    "title": "Zootopia",
    "year": 2016,
    "director": "Byron Howard / Rich Moore / Jared Bush",
    "gross": "$1,025,521,689",
    "image": apiMovies + zootopia.src
  },
  {
    "id": 50,
    "title": "Alice in Wonderland",
    "year": 2010,
    "director": "Tim Burton",
    "gross": "$1,025,468,216",
    "image": apiMovies + alice_in_Wonderland.src
  }
]