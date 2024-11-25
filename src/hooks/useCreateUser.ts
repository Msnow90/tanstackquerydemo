import { useMutation, useQueryClient } from "@tanstack/react-query"
import createUser from "../api/createUser"

export default () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createUser,
        onMutate: async (user) => {
          // **** Example of optimistic updating, which is adding the new data before the request is complete
          // **** This works because tanstack query checks the difference of data between the state and from the new request and changes that way

          // Cancel any outgoing refetches
          // (so they don't overwrite our optimistic update)
          await queryClient.cancelQueries({ queryKey: ['users'] })

          // Snapshot the previous value
          const previousUsers = queryClient.getQueryData(['users'])

          // Optimistically update to the new value
          queryClient.setQueryData(['users'], (old: any) => [...old, user])

          // Return a context object with the snapshotted value
          return { previousUsers }
        },
        onError: (error, variables, context: any) => {
          // *** Need to set the data back to original (without the optimistically created user) if there is an error
          console.log('previous users inside context passed from onMutate (the returned values)', context?.previousUsers);
          queryClient.setQueryData(['users'], context.previousUsers)
        },
        onSuccess: (data, variables, context) => {
          // will invalidate all queries that have the 'users' key in the array
          queryClient.invalidateQueries({ queryKey: ['users'] });

          // will only invalidate a query if the only key in the array is 'users'. Meaning the getUserById query hook (which has a user id in the key too) will not be invalidated
          // queryClient.invalidateQueries({
          //   queryKey: ['users'],
          //   exact: true,
          // })

        },
        onSettled: (data, error, variables, context) => {
        },
      })
}