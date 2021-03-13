import store from '../redux/store';
import { scoresContainer } from './../index';


export default function setScores(){
    scoresContainer!.innerHTML = store.getState().score.toString()
}