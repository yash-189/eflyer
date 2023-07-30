import { Navigate, useLocation } from "react-router-dom";


export const ProtectedRoute = ({ children }) => {


    
    
    
    
    const location = useLocation()
    
        if (isLogged == '' || isLogged == null) {
            // user is not authenticated
           
                return <Navigate to="/" state={{path: location.pathname}} />;
    
            
        }
    
      
    
        return children;
    };