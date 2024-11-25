import { createFileRoute } from '@tanstack/react-router'

import useGetUsers from '../../hooks/useGetUsers'
import UserList from '../../components/UserList'

export const Route = createFileRoute('/users/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { isFetched, data } = useGetUsers()

  return isFetched ? (
    <>
      <UserList users={data} />
    </>
  ) : (
    <></>
  )
}
