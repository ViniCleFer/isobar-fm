import { Album } from '../album/types';

export interface Band {
  name: string;
  image: string;
  genre: string;
  biography: string;
  numPlays: number;
  id: string;
  albums: Array<string>;
  foundedAlbums?: Array<Album>;
}
