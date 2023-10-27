import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav class="navbar bg-success">
      <Link style={{fontFamily:'Kay Pho Du'}} to="/" class="navbar-brand text-white mx-5">
        CRUD Operations
      </Link>
      <div class="nav mx-5">
        <Link style={{fontFamily:'Kay Pho Du'}}  to="/create-student" class="nav-link text-white">
          Create Student
        </Link>
        <Link style={{fontFamily:'Kay Pho Du'}}  to="/student-list" class="nav-link text-white">
          Student List
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
