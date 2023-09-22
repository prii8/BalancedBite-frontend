import {Navigate} from "react-router-dom"
import { useAppSelector } from "../../redux/store";

const ProtectedRoute = ({children}:any) => {
    
    const {user} = useAppSelector((state) => state);

    if(user===null) {
        return <Navigate to="/register" replace />
    }
    return children

};

export default ProtectedRoute;