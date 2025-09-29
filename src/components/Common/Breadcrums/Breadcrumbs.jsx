import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

const AppBreadcrumb = () => {
  const formatPath = (str) => {
    return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/dashboard">Home</Link>
    </Breadcrumb.Item>,
  ].concat(
    pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      const isLast = index === pathSnippets.length - 1;

      return (
        <Breadcrumb.Item key={url}>
          {isLast ? (
            <span style={{ textTransform: "capitalize" }}>
              {formatPath(pathSnippets[index])}
            </span>
          ) : (
            <Link to={url}>{formatPath(pathSnippets[index])}</Link>
          )}
        </Breadcrumb.Item>
      );
    })
  );

  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>;
};

export default AppBreadcrumb;
