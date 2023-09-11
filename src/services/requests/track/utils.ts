import { api } from '../../api';

export async function getTracksRequest() {
  try {
    const response = await api.get('tracks');

    return response;
  } catch (error) {
    console.error('Error getTracksRequest => ', error);
    return null;
  }
}

export async function getTrackByIdRequest(trackId: string) {
  try {
    const response = await api.get(`/tracks/${trackId}`);

    return response;
  } catch (error) {
    console.error('Error getTracksByIdRequest => ', error);
    return null;
  }
}
