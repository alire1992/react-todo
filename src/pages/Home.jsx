import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container my-5">
      <div className="bg-body-tertiary p-5 rounded">
        <div className="col-sm-8 py-5 mx-auto">
          <h1 className="display-5 fw-normal">
            Navbar with offcanvas examples
          </h1>
          <p className="fs-5">
            This example shows how responsive offcanvas menus work within the
            navbar. For positioning of navbars, checkout the{" "}
            <a href="/docs/5.3/examples/navbar-static/">top</a> and{" "}
            <a href="/docs/5.3/examples/navbar-fixed/">fixed top</a> examples.
          </p>
          <p>
            From the top down, you'll see a dark navbar, light navbar and a
            responsive navbar—each with offcanvases built in. Resize your
            browser window to the large breakpoint to see the toggle for the
            offcanvas.
          </p>
          <Link to="/todos" className="btn btn-dark">
            ToDos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
