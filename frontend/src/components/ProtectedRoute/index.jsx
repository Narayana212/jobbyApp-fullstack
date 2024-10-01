import {Redirect, Route} from 'react-router-dom'
import Cookie from 'js-cookie'

```
/**
 * A higher-order component that protects routes by checking for a valid JWT token.
 * If the token is not present, it redirects the user to the login page.
 * @param {Object} props - The props passed to the component, including route properties.
 * @returns {React.Component} Either a Redirect component to the login page or the protected Route component.
 */
```
const ProtectedRoute = props => {
  const token = Cookie.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
