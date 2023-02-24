
import {selectIsAuth} from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({children, redirectTo = "/"}) {
    const isAuth = useSelector(selectIsAuth)
    console.log('isAuth',isAuth);
    // return !isAuth ? <Navigate to={redirectTo} /> : children;
    return isAuth ? <Navigate to={redirectTo} /> : children 
}
