import React from 'react';
import StoryFirst from './storys/StoryFirst';
import StorySecond from './storys/StorySecond';
import StoryThird from './storys/StoryThird';
import StoryFourth from './storys/StoryFourth';
import './Story.css'

function Story() {
  return (
    <div className="story">
      <StoryFirst />
      <StorySecond />
      <StoryThird />
      <StoryFourth />
    </div>
  )
}

export default Story
