if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

const render = () => import("@docusaurus/core/lib/client/clientEntry.js")

export async function bootstrap() {
    console.log('docusaurus app bootstraped');
}

export async function mount(props) {
    console.log('docusaurus app mount');
    render()
}

export async function unmount(props) {
    console.log('docusaurus app unmount');
}

