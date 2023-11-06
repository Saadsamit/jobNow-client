import { useContext } from "react";
import { contextProvider } from "../Authprovider";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,isLoading} = useContext(contextProvider)
    if(isLoading){
        return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-infinity loading-lg"></span></div>
    }
    console.log(user);
    if(!user?.email){
        return <Navigate to="/login"/>
    }
    return children
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
  };
export default PrivateRoute;