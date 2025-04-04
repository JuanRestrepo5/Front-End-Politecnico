
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 716, hash: 'ac18f259999e18157128dfdfa52b7acfe4345475464421f34780fbc878360563', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '118788830a25645b9c8cfa27a57157de1ef9130a52fa0d9817020c2eac6d2399', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-4D5RGNLT.css': {size: 2722, hash: 'MbJu14IAmVU', text: () => import('./assets-chunks/styles-4D5RGNLT_css.mjs').then(m => m.default)}
  },
};
