import { AuthProvider } from "./AuthContext"
import {CarProvider} from "./CarContext"
const Provider = ({children}) => {
    return (
        <AuthProvider>
            
            <CarProvider>
                    {children}
            </CarProvider>
            </AuthProvider>
    )
}

export default Provider;