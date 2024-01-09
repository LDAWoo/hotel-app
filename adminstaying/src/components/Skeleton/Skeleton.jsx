import PropTypes from "prop-types";
import ContentLoader from "react-content-loader";

function Skeleton({ children, viewBox = "0 0 400 500", className }) {
  return (
    <ContentLoader title="" viewBox={viewBox} className={`${className ? className : "w-full h-auto"}`} backgroundColor="var(--bg-light-skeleton)" foregroundColor="var(--fg-light-skeleton)" speed={3}>
      {children}
    </ContentLoader>
  );
}

Skeleton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  viewBox: PropTypes.string,
};

export default Skeleton;
