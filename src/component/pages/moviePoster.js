import React from 'react';

// items 

import items from '../../Assets/files/items.json';
import Image1917 from './../../Assets/images/1917.jpg';
import ImageAmericanFactory from './../../Assets/images/american-factory.jpg';
import ImageBoomShell from './../../Assets/images/boomshell.jpg';
import ImageFordvsFer from './../../Assets/images/ford-vs-ferrari.jpg';
import ImageHairLove from './../../Assets/images/hair-love.jpg';
import ImageHollywood from './../../Assets/images/hollywood.jpg';
import ImageJojoRabbit from './../../Assets/images/jojo-rabbit.jpg';
import ImageJoker from './../../Assets/images/joker.jpg';
import ImageJudy from './../../Assets/images/judy.jpg';
import ImageLearningSkate from './../../Assets/images/learning-skateboard.jpg';
import ImageLittleWomen from './../../Assets/images/little-women.jpg';
import ImageMarriageStory from './../../Assets/images/marriage-story.jpg';
import ImageNeighborWindow from './../../Assets/images/neighbors-window.jpg';
import ImageParasite from './../../Assets/images/parasite.jpg';
import ImageRocketman from './../../Assets/images/rocketman.jpg';
import ImageToyStory4 from './../../Assets/images/toy-story4.jpg';

// build a card 

function MoviePoster(props) {

  const { id } = props
  const posterList = {
    "1": ImageParasite,
    "2": ImageJoker,
    "3": ImageJudy,
    "4": ImageHollywood,
    "5": ImageMarriageStory,
    "6": ImageJojoRabbit,
    "7": Image1917,
    "8": ImageAmericanFactory,
    "9": ImageBoomShell,
    "10": ImageFordvsFer,
    "11": ImageHairLove,
    "12": ImageLearningSkate,
    "13": ImageLittleWomen,
    "14": ImageNeighborWindow,
    "15": ImageRocketman,
    "16": ImageToyStory4
  }




  return <img src={posterList[props.id]} className="card-img-top" style={{ height: '300px' }} alt="..."  ></img>
}

export default MoviePoster;
