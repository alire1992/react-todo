import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <h1 style={{ fontSize: "140px", color: "red" }}>404</h1>
          <p style={{ fontSize: "32px" }}>
            We Can Not Found What Do You Looking For!
          </p>
          <Link to="/" className="btn btn-dark">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
