import { Result, Button } from 'antd'
import { NavLink } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Страница не найдена."
        extra={
          <NavLink to="/">
            <Button type="primary">На главную</Button>
          </NavLink>
        }
      />
    </div>
  )
}

export default NotFoundPage