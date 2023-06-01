import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
