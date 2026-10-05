import { useLoaderData, useSearchParams, NavLink } from 'react-router-dom'
import { Input, Select, Card, List, Typography, Space } from 'antd'

const { Title } = Typography

export const usersLoader = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) {
    throw new Response('Не удалось загрузить пользователей', { status: response.status })
  }
  return response.json()
}

const UsersPage = () => {
  const users = useLoaderData()
  const [searchParams, setSearchParams] = useSearchParams()

  const searchQuery = searchParams.get('q') || ''
  const sortOrder = searchParams.get('sort') || 'asc'

  const handleSearchChange = (e) => {
    const val = e.target.value
    const newParams = new URLSearchParams(searchParams)
    if (val) {
      newParams.set('q', val)
    } else {
      newParams.delete('q')
    }
    setSearchParams(newParams)
  }

  const handleSortChange = (value) => {
    const newParams = new URLSearchParams(searchParams)
    if (value) {
      newParams.set('sort', value)
    } else {
      newParams.delete('sort')
    }
    setSearchParams(newParams)
  }

  const filteredUsers = users
    .filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name)
      } else {
        return b.name.localeCompare(a.name)
      }
    })

  return (
    <div>
      <Title level={2}>Список пользователей</Title>

      <Space style={{ marginBottom: 20 }}>
        <Input
          placeholder="Поиск по имени..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ width: 250 }}
        />
        <Select
          value={sortOrder}
          onChange={handleSortChange}
          style={{ width: 150 }}
          options={[
            { value: 'asc', label: 'Имя: А-Я' },
            { value: 'desc', label: 'Имя: Я-А' },
          ]}
        />
      </Space>

      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={filteredUsers}
        renderItem={(user) => (
          <List.Item>
            <Card title={<NavLink to={`/users/${user.id}`}>{user.name}</NavLink>}>
              <div>
                <strong>Email:</strong> {user.email}
              </div>
              <div>
                <strong>Город:</strong> {user.address.city}
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  )
}

export default UsersPage