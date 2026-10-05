import { useRouteError, isRouteErrorResponse, NavLink } from 'react-router-dom'
import { Result, Button } from 'antd'

const ErrorPage = () => {
  const error = useRouteError()

  let status = 'error'
  let title = 'Произошла ошибка'
  let subTitle = 'Что-то пошло не так.'

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      status = '404'
      title = 'Пользователь не найден'
      subTitle = 'Запрашиваемый пользователь отсутствует в системе.'
    } else {
      status = String(error.status)
      subTitle = error.statusText || error.data || subTitle
    }
  } else if (error instanceof Error) {
    subTitle = error.message
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
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