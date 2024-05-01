import './community.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function Community(props) {
  return (
    <div class="w-75">
        <div class="p-1 m-1">
            <hr class="rounded"/>
        </div>
        <div class="d-flex border border-secondary flex-column w-75 rounded-4 p-4 ps-5 pe-5 p-3 m-1 commu">
            <div class="d-flex flex-row justify-content-between">
                <div>
                    <div class="d-flex justify-content-start">
                        <div>{props.icn}<b class="fs-4">r/{props.name}</b></div>
                        <a href="r/breaddit"><button type="button" class="rounded-pill ps-3 pe-3 ms-3 btn btn-success shadow-lg"><b>browse</b></button></a>
                        <button type="button" class="rounded-pill ps-3 pe-3 ms-3 btn btn-primary shadow-lg"><b>join</b></button>
                    </div>
                    <div class="d-flex justify-content-start mt-4">
                        <p class="body text-start pe-5">{props.disc}</p>
                    </div>
                    </div>
                    <div>
                        <div class="mt-3 mb-3"><div class="d-flex"><i class="bi bi-person-circle me-2 text-primary"/><p class="body">Members</p></div><b>{props.member}</b></div>
                    <div class="mt-3 mb-3"><div class="d-flex"><i class="bi bi-circle-fill me-2 text-success"/><p class="body">Online</p></div><b>{props.online}</b></div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Community;