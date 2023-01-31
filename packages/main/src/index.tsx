import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import { registerMicroApps, start } from 'qiankun';
import AppLayout from "./compoents/Layout";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

registerMicroApps([
  {
    name: 'react-app',
    entry: '//localhost:7101',
    container: '#container',
    activeRule: '/react',
  },
  {
    name: 'docs-app',
    entry: '//localhost:7102',
    container: '#container',
    activeRule: '/docs',
  },
  // {
  //   name: 'vue-app',
  //   entry: '//localhost:7102',
  //   container: '#container',
  //   activeRule: '/vue',
  // },
]);
// 启动 qiankun
start();

root.render(<StrictMode>
  <AppLayout />
</StrictMode>);