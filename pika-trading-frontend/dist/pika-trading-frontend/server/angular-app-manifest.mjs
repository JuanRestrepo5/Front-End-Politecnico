
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 829, hash: '0215857aa040a81d95324e1d4ef0ec6979fd8ed321d660b59cb2934ca842d618', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '1245a74b7cada87d2c4767c275c88ede5bba45277f855ff6725ffccae3046e8f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-BUJQ4HTL.css': {size: 3406, hash: '1EhB80v2MqE', text: () => import('./assets-chunks/styles-BUJQ4HTL_css.mjs').then(m => m.default)}
  },
};
