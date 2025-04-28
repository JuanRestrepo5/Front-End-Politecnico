
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 1269, hash: '2a3bd98542368cf555f2d7a4290c7342227c4593fd35291d2039ed7b57d496c7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1456, hash: '37a29dc443dc3270ee398d5db3d2732e35b0ede34cdb89d7ff94f10bb2131ce4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-OCO4WD6M.css': {size: 3373, hash: 'wr5Rw2Awfvg', text: () => import('./assets-chunks/styles-OCO4WD6M_css.mjs').then(m => m.default)}
  },
};
