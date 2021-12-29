import { Product } from '../types/Product';

export const useProduct = () => {
  const productRequest = async (prod: Product) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/api/products`,
      {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(prod), // body data type must match "Content-Type" header
      },
    );
    const res = await response.json();
    return res;
  };
  const addProduct = (p: Product) => {
    productRequest(p).then((res) => !res);
  };
};
