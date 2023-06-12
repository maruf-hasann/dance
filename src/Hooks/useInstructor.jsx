import { useQuery } from "react-query"
import useAuth from "./useAuth"
import axios from "axios"

const useInstructor = () => {
    const { user, loader } = useAuth()
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loader,
        queryFn: async () => {
            const res = await axios.get(
              `https://myapp-dun-mu.vercel.app/users/instructor/${user?.email}`
            );
            return res.data.instructor;
        }
    })
    return [isInstructor,isInstructorLoading]
}

export default useInstructor