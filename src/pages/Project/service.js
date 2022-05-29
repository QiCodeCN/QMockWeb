import {request} from 'umi';

export async function getProductList() {
  return request('/api/mock/project/list', {
    method: 'GET'
  });
}

export async function saveProduct(data) {
  return request('/api/mock/project/save', {
    method: 'POST',
    data
  });
}
