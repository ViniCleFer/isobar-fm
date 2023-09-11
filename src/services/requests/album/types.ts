import { Band } from '../band';
import { Track } from '../track';

export interface Album {
  name: string;
  id: string;
  releasedDate: string;
  image: string;
  band: Band;
  tracks: Array<Track>;
}
