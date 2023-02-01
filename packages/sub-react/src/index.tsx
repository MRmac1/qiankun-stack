import { unmountComponentAtNode } from "react-dom";
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import 'antd/dist/reset.css';
import router from './router';

if ((window as any).__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = (window as any).__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

function render(props: any) {
  const containerWillMount = props.container ? props.container.querySelector('#root') : document.getElementById('root');
  createRoot(containerWillMount).render(<RouterProvider router={router} />)
}

export async function bootstrap() {
  console.log('[react18] react app bootstraped');
}

export async function mount(props: any) {
  render(props)
}

export async function unmount(props: any) {
  const containerDidMount = props.container ? props.container.querySelector('#root') : document.getElementById('root')
  unmountComponentAtNode(containerDidMount);
}

export async function update(props: any) {
  console.log('[react18] react app update', props);
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}