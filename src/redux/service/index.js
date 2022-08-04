import {EndPoint} from '../../utils/constant';
import Network from '../../utils/network';

export const fetchAnimalsService = () =>
  new Promise((resolve, reject) => {
    try {
      let config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      console.log('url>>> ', EndPoint.kAnimals);
      Network.get(EndPoint.kAnimals, config)
        .then(response => {
          console.log('fetchStories>>>>', response);
          resolve(response);
        })
        .catch(error => {
          reject(error);
          console.log('fetchStoriesErr>>>>', error);
          console.log(JSON.stringify(error));
        });
    } catch (error) {
      console.log('fetchStoriesErr>>>>', error);
      console.log(error);
    }
  });
