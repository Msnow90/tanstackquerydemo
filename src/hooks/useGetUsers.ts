import { useQuery } from "@tanstack/react-query";
import getUsers from "../api/getUsers";

export default () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
        staleTime: 10000 * 60 // 10 min
    })
}