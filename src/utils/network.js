import axios from 'axios';
import {EndPoint} from './constant';

const Network = axios.create({
  baseURL: EndPoint.kBaseURL,
});

export default Network;
