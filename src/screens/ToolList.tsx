import * as React from "react";
import { Link } from "react-router-dom";

const ToolList = () => {
  return (
    <div>
      <h2>Tools:</h2>
      <ul>
        <li>
          <Link to="/tools/membership">Membership</Link>
        </li>
        <li>
          <Link to="/tools/events">Events</Link>
        </li>
        <li>
          <Link to="/tools/sigs">SIGs</Link>
        </li>
        <li>
          <Link to="/tools/sponsors">Sponsors</Link>
        </li>
        <li>
          <Link to="/tools/products">Products</Link>
        </li>
      </ul>
    </div>
  );
};
export default ToolList;
