import { api } from '../../api';

export async function getBandsRequest() {
  try {
    const response = await api.get('bands');

    return response;
  } catch (error) {
    console.error('Error getBandsRequest => ', error);
    return null;
  }
}

export async function getBandByIdRequest(bandId: string) {
  try {
    const response = await api.get(`/bands/${bandId}`);

    return response;
  } catch (error) {
    console.error('Error getBandsByIdRequest => ', error);
    return null;
  }
}
