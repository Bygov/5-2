import { NavLink, Outlet } from 'react-router-dom'
import { Layout, Menu } from 'antd'

const { Header, Content } = Layout

const MainLayout = () => {
  const items = [
    {
      key: 'home',
      label: <NavLink to="/">Главная</NavLink>,
    },
    {
      key: 'users',
      label: <NavLink to="/users">Пользователи</NavLink>,
    },
  ]

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '24px 48px' }}>
        <div>
          <Outlet />
        </div>
      </Content>
    </Layout>
  )
}

export default MainLayout