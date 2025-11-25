import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center bg-tech-gray dark:bg-tech-gray">
        <div className="container-custom text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-primary mb-4">404</h1>
          <p className="text-2xl text-foreground mb-6">Page Not Found</p>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist. Let's get you back on track!
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-tech-blue-dark text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
