import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider, QueryClient} from '@tanstack/react-query';

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const queryClient = new QueryClient();
  return (
    <>
        <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />

      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        <Link
          to="/about"
          activeProps={{
            className: 'font-bold',
          }}
        >
          About
        </Link>
        <Link
          to="/users"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Users
        </Link>
        <Link
          to="/users/create"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Create a User
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
      </QueryClientProvider>
    </>
  )
}
