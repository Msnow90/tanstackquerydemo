import { createFileRoute } from '@tanstack/react-router'
import useGetUserById from '../../hooks/useGetUserById';
import UserDisplay from '../../components/UserDisplay';

/**
 * A route definition for handling user-specific routes, e.g., `/users/:userId`.
 * The route is dynamically generated using a `userId` parameter.
 *
 * @constant
 * @type {object}
 * @property {Function} component - The component rendered by this route.
 */
export const Route = createFileRoute('/users/$userId')({
  component: RouteComponent,
});

/**
 * A React component for rendering user details.
 * Fetches user data using the `userId` route parameter.
 *
 * @component
 * @returns {JSX.Element} The rendered user details or an empty fragment if the data is not fetched.
 */
function RouteComponent() {
  /**
   * Retrieves the `userId` parameter from the current route.
   * 
   * @typedef {object} RouteParams
   * @property {string} userId - The ID of the user extracted from the route.
   */
  const { userId } = Route.useParams();

  /**
   * Fetches user data by ID.
   *
   * @typedef {object} FetchResult
   * @property {boolean} isFetched - Indicates if the user data has been fetched.
   * @property {object} data - The fetched user data.
   */
  const { isFetched, data } = useGetUserById(userId);

  return isFetched ? (
    <>
      <UserDisplay user={data} />
    </>
  ) : (
    <></>
  );
}