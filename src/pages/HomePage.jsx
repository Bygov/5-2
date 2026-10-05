import { Typography, Button } from 'antd'
import { NavLink } from 'react-router-dom'

const { Title, Paragraph } = Typography

const HomePage = () => {
  return (
    <div>
      <Title level={2}>Главная страница</Title>
      <Paragraph>
        Добро пожаловать в приложение для работы со списком пользователей.
      </Paragraph>
      <div>
        <NavLink to="/users">
          <Button type="primary">Перейти к пользователям</Button>
        </NavLink>
      </div>
    </div>
  )
}

export default HomePage