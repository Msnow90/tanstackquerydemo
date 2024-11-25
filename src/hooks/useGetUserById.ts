import { useQuery } from "@tanstack/react-query";
import getUserById from "../api/getUserById";

export default (userId: string) => {
    return useQuery({
        queryKey: ['users', userId],
        queryFn: () => getUserById(userId),
        staleTime: 10000 * 60 // 10 min
    })
}