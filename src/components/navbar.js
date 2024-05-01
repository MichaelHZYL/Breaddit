import './community.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  return (
    <nav class="navbar navbar-shadow bg-dark fixed-top text-light ps-5 p-3 border-secondary border-bottom border-4">
        <div class="d-flex justify-content-between w-100 fs-4">
            <a href="/"><div class="text-light"><i class="bi bi-reddit me-3 fs-logoBreaddit"/><b class="fs-3">Breaddit</b></div></a>
            <div class="w-25 pt-1"><input class="form-control me-2 rounded-pill ps-4 border-0 bg-s" type="search" placeholder="Search" aria-label="Search"/></div>
            <div class="me-4 pt-1"><a class="bi bi-chat-dots text-white nav-ic ms-4 m-1"/><a class="bi bi-bell text-white nav-ic ms-4 m-1"/><a class="bi bi-gear text-white nav-ic ms-4 m-1"/><a class="bi bi-person-circle text-white nav-ic ms-4 m-1" href='/profile'/></div>
        </div>
    </nav>
  );
}

export default Navbar;