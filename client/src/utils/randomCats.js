export const categories = [
    'geology',
    'science',
    'history',
    'animals',
    'general 1',
    'general 2',
    'HTML & CSS',
    'football',
    'javascript',
    'movies',
    'literature',
    'sports',
    'travel',
    'invention'
]

export function shuffleCategories(arr) {
    // Copy the input array to a new array
    const newArray = [...arr];
  
    // Select the first random element and remove it from the copied array
    const indexOne = Math.floor(Math.random() * newArray.length);
    const one = newArray.splice(indexOne, 1)[0];
  
    // Select the second random element from the modified array
    const indexTwo = Math.floor(Math.random() * newArray.length);
    const two = newArray[indexTwo];
    return { one, two };
  }

export const topicsData = [
  {
    image: 'https://cdn0.iconfinder.com/data/icons/earth-day-and-ecology-filled/64/earth_environment_ecology-70-64.png',
    topic: 'geology',
    description: 'Explore the Earth\'s structure and geological processes.'
  },
  {
    image: 'https://cdn3.iconfinder.com/data/icons/education-science-vol-2-1/512/atom_science_physics_energay-64.png',
    topic: 'science',
    description: 'Test your knowledge of various scientific disciplines.'
  },
  {
    image: 'https://cdn3.iconfinder.com/data/icons/education-science-vol-2-1/512/history_ancient_egypt_manuscript-64.png',
    topic: 'history',
    description: 'Travel back in time and learn about historical events.'
  },
  {
    image: 'https://cdn3.iconfinder.com/data/icons/developers-iconset/90/Developers_Colorai-07-64.png',
    topic: 'javascript',
    description: 'Challenge your JavaScript programming skills.'
  },
  {
    image: 'https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_Laptop-Web_Design-Web_development-Coding-64.png',
    topic: 'HTML & CSS',
    description: 'Explore the world of web development with HTML and CSS.'
  },
  {
    image: 'https://cdn0.iconfinder.com/data/icons/animal-kingdom-vol-1/512/panda_animal_zoo_animals-64.png',
    topic: 'animals',
    description: 'Discover fascinating facts about the animal kingdom.'
  },
  {
    image: 'https://cdn1.iconfinder.com/data/icons/present-4/64/gift-balloon-surprise-present-64.png',
    topic: 'general 1',
    description: 'Test your general knowledge with a variety of questions.'
  },
  {
    image: 'https://cdn2.iconfinder.com/data/icons/christmas-2265/64/Gift-bag-birthday-party-christmas-present-surprise-birthday-gift-present-bag-64.png',
    topic: 'general 2',
    description: 'More general knowledge questions to challenge you.'
  },
  {
    image: 'https://cdn3.iconfinder.com/data/icons/education-science-vol-2-1/512/soccer_football_sports_game-64.png',
    topic: 'football',
    description: 'Test your knowledge of the world\'s most popular sport.'
  },
  {
    image: 'https://cdn0.iconfinder.com/data/icons/movie-filled-outline/340/movie_film_board_cinema_clapper_action_clap_scene-64.png',
    topic: 'movies',
    description: 'Explore the magic of cinema and iconic film moments'
  },
  {
    image: 'https://cdn2.iconfinder.com/data/icons/history-19/496/chronicle-scroll-message-literature-letter-64.png',
    topic: 'literature',
    description: 'Dive into stories, authors, and literary masterpieces.'
  },
  {
    image: 'https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/cup-64.png',
    topic: 'sports',
    description: 'Celebrate athletes, games, and sporting achievements.'
  },
  {
    image: 'https://cdn2.iconfinder.com/data/icons/season-7/340/family_car_travel_vacation_trip_vehicle_happy-64.png',
    topic: 'travel',
    description: ' Journey to new places, cultures, and adventures'
  },
  {
    image: 'https://cdn3.iconfinder.com/data/icons/seo-and-digital-marketing-4-2/48/178-64.png',
    topic: 'invention',
    description: ' Innovations, creators, and technological breakthroughs.'
  }
];