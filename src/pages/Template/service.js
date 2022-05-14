/* eslint-disable */
import { request } from 'umi';

/** Get方法请求-带参 */
export async function getApi(getParams) {
  return request('/api/get', {
    method: 'GET',
    params: getParams
  });
}

/** POST方法请求-带参 */
export async function postApi(reqBody) {
  return request('/api/post', {
    method: 'POST',
    data: reqBody
  });
}
