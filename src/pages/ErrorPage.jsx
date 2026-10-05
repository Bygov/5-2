import { useRouteError, NavLink } from 'react-router-dom'
import { Result, Button } from 'antd'

const ErrorPage = () => {
  const error = useRouteError()

  let status = 'error'
  let title = 'Произошла ошибка'
  let subTitle = 'Что-то пошло не так.'

  if (error instanceof Response) {
    if (error.status === 404) {
      status = '404'
      title = 'Пользователь не найден'
      subTitle = 'Запрашиваемый пользователь отсутствует в системе.'
    } else {
      subTitle = error.statusText || subTitle
    }
  }

  return (
    <div>
      <Result
        status={status}
        title={title}
        subTitle={subTitle}
        extra={
          <NavLink to="/users">
            <Button type="primary">Вернуться к списку</Button>
          </NavLink>
        }
      />
    </div>
  )
}

export default ErrorPage