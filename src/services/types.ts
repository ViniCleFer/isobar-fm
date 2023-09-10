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

export interface Track {
  name: string;
  duration: string;
  id: string;
}

export interface Album {
  name: string;
  id: string;
  releasedDate: string;
  image: string;
  band: Band;
  tracks: Array<Track>;
}
