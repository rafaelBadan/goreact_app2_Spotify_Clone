import React from 'react';

import { Content, Current } from './styles';

const Player = () => (
  <Content>
    <Current>
      <img
        src="https://i.pinimg.com/originals/46/77/44/46774421fcc29d0339ed739e826a2427.jpg"
        alt="Cover"
      />
      <div>
        <span>Gimme Shelter</span>
        <small>Rolling Stones</small>
      </div>
    </Current>
  </Content>
);

export default Player;
