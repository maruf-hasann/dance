import { useQuery } from "react-query"
import useAuth from '../Hooks/useAuth'
import axios from "axios";
const useAdmin = () => {
     const { user,loader } = useAuth();
     const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
       queryKey: ["isAdmin", user?.email],
         enabled: !loader,
         queryFn: async () => {
             const res = await axios.get(`http://localhost:5000/users/admin/${user?.email}`)
            return res.data.admin
       }
     });
    return [isAdmin,isAdminLoading]
}
export default useAdmin