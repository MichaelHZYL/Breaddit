import './sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function Sidebar() {
  return (
    <div>
        <div class="sidebar bg-dark flex-column align-items-stretch border-secondary border-end border-2 ps-2 pe-2 pt-5">
            <a href='/'><div class="d-flex text-white btn-side ps-3 pe-5 p-2 m-2 rounded-3"><i class="bi bi-house me-3"/><div>Home</div></div></a>
            <div class="d-flex btn-side ps-3 pe-5 p-2 m-2 rounded-3"><i class="bi bi-buildings me-3"/><div>All</div></div>
            <div class="d-flex btn-side ps-3 pe-5 p-2 m-2 rounded-3"><i class="bi bi-bookmark me-3"/><div>Saved</div></div>
            <div class="d-flex btn-side ps-3 pe-5 p-2 m-2 rounded-3"><i class="bi bi-filter-circle me-3"/><div>Feed</div></div>
            <div class="d-flex btn-side ps-3 pe-5 p-2 m-2 rounded-3"><i class="bi bi-bell me-3"/><div>Notification</div></div>
            <div class="d-flex btn-side ps-3 pe-5 p-2 m-2 rounded-3"><i class="bi bi-chat-dots me-3"/><div>Messages</div></div>
            <hr class="rounded ms-4 me-4 m-4"/>
            <div class="d-flex btn-side ps-3 pe-5 p-2 m-2 rounded-3"><i class="bi bi-reddit me-3"/><div>About Us</div></div>
            <div class="d-flex btn-side ps-3 pe-5 p-2 m-2 rounded-3"><i class="bi bi-book me-3"/><div>Content Policy</div></div>
            <div class="d-flex btn-side ps-3 pe-5 p-2 m-2 rounded-3"><i class="bi bi-boxes me-3"/><div>Privacy Policy</div></div>
        </div>

        <div class="bg-dark flex-column align-items-stretch border-secondary border-end border-2 ps-2 pe-2 pt-5">
            <div class="d-flex btn-side ps-3 pe-5 p-2 m-2 rounded-3"><i class="bi bi-house me-3"/><div>Home</div></div>
            <div class="d-flex btn-side ps-3 pe-5 p-2 m-2 rounded-3"><i class="bi bi-bookmark me-3"/><div>Saved</div></div>
            <div class="d-flex btn-side ps-3 pe-5 p-2 m-2 rounded-3"><i class="bi bi-filter-circle me-3"/><div>Feed</div></div>
            <div class="d-flex btn-side ps-3 pe-5 p-2 m-2 rounded-3"><i class="bi bi-bell me-3"/><div>Notification</div></div>
        </div>
    </div>
  );
}

export default Sidebar;