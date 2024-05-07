import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <li className="mr-10 px-6 hover:bg-yellow-500">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

/*
# - Runtime type checking for React props and similar objects.
# - PropTypes provide type validation, prevent bugs, enhance collaboration, 
    and contribute to better code quality in React applications
*/

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
