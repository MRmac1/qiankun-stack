import React from 'react';
import { Button, Result } from 'antd';

const About: React.FC = () => (
  <Result
    status="success"
    title="关于我们"
    subTitle="页面建设中"
    extra={<Button type="primary">Back Home</Button>}
  />
);

export default About;