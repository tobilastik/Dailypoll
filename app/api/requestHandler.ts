import axios from 'axios';
const BASE_URL ='https://api.jsonbin.io/b';


export async function request(
  onResponse: any,
  data: any,
  type: string,
  featureURL: string,
) {
  if (type == 'GET') {
    try {
      const response = await axios.get(`${BASE_URL}${featureURL}`);
      onResponse.success(response.data);
    } catch (error: any) {
      onResponse.error(error);
    }
  }
  
}
