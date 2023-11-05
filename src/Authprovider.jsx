import PropTypes from 'prop-types';
import { createContext } from "react";

const contextProvider = createContext(null)
const Authprovider = ({children}) => {

    const providerValue = {}
    return (
        <contextProvider.Provider value={providerValue}>
            {children}
        </contextProvider.Provider>
    );
};
Authprovider.propTypes={
    children: PropTypes.node
}
export default Authprovider;