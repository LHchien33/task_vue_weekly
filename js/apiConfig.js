
const domain = 'https://vue3-course-api.hexschool.io';
const api_path = 'practice_chien';

const authPath = {
  login: 'admin/signin',
  logout: 'logout',
  check: 'api/user/check'
};

const productPath = {
  product: 'product',
  pageProducts: 'products',
  allProducts: ''
};

productPath.allProducts = `${productPath.pageProducts}/all`;

const cartPath = {
  cart: 'cart',
  delWholeCart: 'carts',
}

// 登入驗證 ${api.auth.base}/${api.auth.xx}
// 後台請求 ${api.apiBase}/admin/${api.paths.xx}
// 前台請求 ${api.apiBase}/${api.paths.xx}
export default {
  domain,
  auth: {
    base: `${domain}/v2`,
    ...authPath
  },
  apiBase: `${domain}/v2/api/${api_path}`,
  paths: {
    ...productPath,
    ...cartPath
  }
};
