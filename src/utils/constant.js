import {
  adventure,
  gaming,
  goa,
  hawaii,
  london,
  nature,
  party,
  russia,
  sydney,
  user1,
  user2,
  user3,
  user4,
  user5,
  wedding,
} from '../../assets';

import {Dimensions} from 'react-native';
export const RouteName = {
  kHome: 'Home',
  kPublicAPI: 'PublicAPI',
  kRedux: 'Redux',
  kGreatDesign: 'GreatDesign',
};
// Static String Of app
export const Strings = {
  kPublicAPI: 'Public API',
  kRedux: 'Redux',
  kGreatDesign: 'Great Design',
  kSearchPlaceholder: 'Search for Destinations, places...',
};

// Endpoints of api
export const EndPoint = {
  kBaseURL: 'https://zoo-animal-api.herokuapp.com',
  kAnimals: '/animals/rand/10',
};

export const DESIGNDATA = [
  {
    title: 'Discover',
    items: [
      {
        name: 'London',
        image: london,
      },
      {
        name: 'Hawaii',
        image: hawaii,
      },
      {
        name: 'Goa',
        image: goa,
      },
      {
        name: 'Sydney',
        image: sydney,
      },
      {
        name: 'Russia',
        image: russia,
      },
    ],
  },
  {
    title: 'My Community',
    items: [
      {
        name: 'jane_smith',
        image: user1,
      },
      {
        name: 'sam_smith',
        image: user2,
      },
      {
        name: 'sara_parker',
        image: user3,
      },
      {
        name: 'james.black',
        image: user4,
      },
      {
        name: 'peter_noa',
        image: user5,
      },
    ],
  },
  {
    title: 'Trending Now',
    items: [
      {
        name: 'Adventure',
        image: adventure,
      },
      {
        name: 'Nature',
        image: nature,
      },
      {
        name: 'Party',
        image: party,
      },
      {
        name: 'Gaming',
        image: gaming,
      },
      {
        name: 'Wedding',
        image: wedding,
      },
    ],
  },
];

// Screen height and width
export const screenSize = Dimensions.get('window');
