import { FC, useState } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from 'antd';
import 'antd/dist/reset.css';
import AppSider from "../Sider";
import TopNav from "../TopNav";
import Home from "../../pages/home";
import About from "../../pages/about";

import './index.css';

const { Content } = Layout;

// main 应用 router, @TODO 这里有 RouterProvider 外不能使用 router 内 api 待解决
// const mainRouter = createBrowserRouter([
//   {
//       path: "/",
//       children: [
//         {
//           path: "home",
//           element: <Home />,
//         },
//         {
//           path: "about",
//           element: <About />,
//         },
//       ],
//     },
// ])

const AppLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className='app'>
      <TopNav />
      <Layout className="site-layout">
        <AppSider collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
          }}
        >
          <div id='container' />
            {/* <RouterProvider router={mainRouter} /> */}
          {/* </div> */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;