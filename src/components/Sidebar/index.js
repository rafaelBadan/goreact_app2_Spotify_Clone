import React from 'react';

import { Container, NewPlaylist, Nav } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="/">Navegar</a>
        </li>
        <li>
          <a href="/">Rádio</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>Sua Biblioteca</span>
        </li>
        <li>
          <a href="/">Seu Daily Mix</a>
        </li>
        <li>
          <a href="/">Tocados recentemente</a>
        </li>
        <li>
          <a href="/">Músicas</a>
        </li>
        <li>
          <a href="/">Álbuns</a>
        </li>
        <li>
          <a href="/">Artistas</a>
        </li>
        <li>
          <a href="/">Estações</a>
        </li>
        <li>
          <a href="/">Arquivos locais</a>
        </li>
        <li>
          <a href="/">Vídeos</a>
        </li>
        <li>
          <a href="/">Podcasts</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>Playlists</span>
        </li>
        <li>
          <a href="/">Brasileiras</a>
        </li>
        <li>
          <a href="/">Reggae</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
      Nova Playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
