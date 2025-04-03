
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 716, hash: '66c465636c137827ab96c8346c74a17c4560e2ada9134141731202218461dc39', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: 'b2d977880c2065a5adb8aaba467a3dd3ff229779f1f01dc277bc6925bf67f9dc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-TEFPKD4N.css': {size: 306, hash: 'NbyJEvG1PMo', text: () => import('./assets-chunks/styles-TEFPKD4N_css.mjs').then(m => m.default)}
  },
};
