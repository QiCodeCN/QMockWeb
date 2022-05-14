import {request} from 'umi';

export async function getProductList() {
  return request('/api/mock/project/list', {
    method: 'GET'
  });
}
