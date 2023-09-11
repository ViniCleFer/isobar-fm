import { api } from '../../api';

export async function getAlbumsRequest() {
  try {
    const response = await api.get('albums');

    return response;
  } catch (error) {
    console.error('Error getAlbumsRequest => ', error);
    return null;
  }
}

export async function getAlbumByIdRequest(albumId: string) {
  try {
    const response = await api.get(`/albums/${albumId}`);

    return response;
  } catch (error) {
    console.error('Error getAlbumByIdRequest => ', error);
    return null;
  }
}
