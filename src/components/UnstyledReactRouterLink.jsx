import { Link } from 'react-router-dom';

const UnstyledReactRouterLink = ({ to, children }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      {children}
    </Link>
  );
};
export default UnstyledReactRouterLink;
