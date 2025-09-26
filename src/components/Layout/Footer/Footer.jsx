import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      ©{new Date().getFullYear()} Created by Qadir
    </Footer>
  );
};

export default AppFooter;
