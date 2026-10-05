import { useLoaderData, NavLink } from 'react-router-dom'
import { Card, Button, Typography, Descriptions } from 'antd'

const { Title } = Typography

export const userDetailLoader = async ({ params }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)

  if (response.status === 404) {
    throw new Response('Пользователь не найден', { status: 404 })
  }

  if (!response.ok) {
    throw new Response('Ошибка сервера', { status: response.status })
  }

  return response.json()
}

const UserDetailPage = () => {
  const user = useLoaderData()

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <NavLink to="/users">
          <Button type="default">← Назад к списку</Button>
        </NavLink>
      </div>

      <Card style={{ maxWidth: 600 }}>
        <Title level={3}>{user.name}</Title>
        <Descriptions column={1} bordered>
          <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
          <Descriptions.Item label="Телефон">{user.phone}</Descriptions.Item>
          <Descriptions.Item label="Город">{user.address.city}</Descriptions.Item>
          <Descriptions.Item label="Компания">{user.company.name}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  )
}

export default UserDetailPage