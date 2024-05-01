import './style/profile.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Community from '../components/community'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar';

function Profile() {
  return (
    <div class="bg-dark text-light">
        <Navbar />
        <body class="bg-dark text-light mt-5">
          <center class="d-flex">
            <Sidebar />
            <div class="w-100 mt-5 pb-5 p-5">
              
              <div class="d-flex flex-column w-50">
                <div class="d-flex align-items-center">
                    <a class="bi profile-icn bi-person-circle text-white nav-ic ms-4 m-1 me-4"/>
                    <div class="d-flex flex-column text-start">
                        <h1>Display Name</h1>
                        <p class="text-secondary">u/username</p>
                    </div>
                </div>
                <div class="p-1 m-1">
                    <hr class="rounded"/>
                </div>

                <div class="p-4">
                    <div class="d-flex border border-secondary flex-column w-100 rounded-4 p-4 ps-5 pe-5 p-3 m-1 commu">
                        <div class="d-flex flex-row justify-content-between">
                            <div>
                                <div class="d-flex justify-content-start">
                                    <div><i class="bi bi-info-circle fs-4 me-2"/><b class="fs-4">Information</b></div>
                                </div>
                                <div class="p-1 mt-1 mb-1">
                                    <hr class="rounded"/>
                                </div>
                                <div class="ps-4 pe-4">
                                    <div class="d-flex justify-content-start">
                                        <b class="body text-white text-start fs-5 pe-5">Discription</b>
                                    </div>
                                    <div class="text-start text-secondary ms-2 mt-2">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget leo eu justo pretium sodales.</p>
                                    </div>
                                </div>
                                <div class="p-1 mt-1 mb-1">
                                    <hr class="rounded"/>
                                </div>
                                <div class="ps-4 pe-4 w-75">

                                    <div class="d-flex w-100 flex-row justify-content-evenly">
                                        <div class="d-flex flex-column me-5">
                                            <b class="fs-5 text-start">100</b>
                                            <p class="text-secondary text-start">Post Karma</p>
                                        </div>
                                        <div class="d-flex flex-column">
                                            <b class="fs-5 text-start">100</b>
                                            <p class="text-secondary text-start">Comment Karma</p>
                                        </div>
                                    </div>

                                    <div class="d-flex w-100 mt-3 flex-row justify-content-evenly">
                                        <div class="d-flex flex-column me-5">
                                            <b class="fs-5 text-start">5</b>
                                            <p class="text-secondary text-start">Followers</p>
                                        </div>
                                        <div class="d-flex flex-column">
                                            <b class="fs-5 text-start">April 31, 2024</b>
                                            <p class="text-secondary text-start">Cake Day</p>
                                        </div>
                                    </div>

                                </div>
                                </div>
                                <div>
                                    <i class="bi fs-3 bi-eye hide"/>
                                </div>
                        </div>
                    </div>

                    <div class="d-flex border border-secondary flex-column w-100 rounded-4 p-4 ps-5 pe-5 p-3 m-1 mt-5 commu">
                        <div class="d-flex flex-row justify-content-between">
                            <div>
                                <div class="d-flex justify-content-start">
                                    <div><i class="bi bi-file-post fs-4 me-2"/><b class="fs-4">Posts</b></div>
                                    <button type="button" class="rounded-pill ps-3 pe-3 ms-3 btn btn-bread shadow-lg"><b>view all</b></button>
                                </div>
                                <div class="p-1 mt-1 mb-1">
                                    <hr class="rounded"/>
                                </div>
                                <div class="d-flex justify-content-start">
                                    <b class="body text-white text-start fs-5 pe-5">Recent</b>
                                </div>
                                <div class="d-flex justify-content-start mt-2">
                                    <div class="d-flex flex-row">
                                        <i class="bi fs-logoBreaddit fs-3 bi-reddit"/>
                                        <div>
                                            <div class="m-2 mb-0 d-flex">
                                                <b>r/breaddit</b><b class="ms-2 me-2 text-secondary">•</b><p class="text-secondary">1 day ago</p>
                                            </div>
                                            <div class="text-start text-white ms-2 fs-5 mb-2">
                                                <b>Lorem ipsum dolor sit amet</b>
                                            </div>
                                            <div class="text-start text-secondary ms-2">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget leo eu justo pretium sodales.</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div>
                                    <i class="bi fs-3 bi-eye hide"/>
                                </div>
                        </div>
                    </div>

                    <div class="d-flex border border-secondary flex-column w-100 rounded-4 p-4 ps-5 pe-5 p-3 m-1 mt-5 commu">
                        <div class="d-flex flex-row justify-content-between">
                            <div>
                                <div class="d-flex justify-content-start">
                                    <div><i class="bi bi-chat-right-quote-fill fs-4 me-2"/><b class="fs-4">Comments</b></div>
                                    <button type="button" class="rounded-pill ps-3 pe-3 ms-3 btn btn-bread shadow-lg"><b>view all</b></button>
                                </div>
                                <div class="p-1 mt-1 mb-1">
                                    <hr class="rounded"/>
                                </div>
                                <div class="d-flex justify-content-start">
                                    <b class="body text-white text-start fs-5 pe-5">Recent</b>
                                </div>
                                <div class="d-flex justify-content-start mt-2">
                                    <div class="d-flex flex-row">
                                        <i class="bi fs-logoBreaddit fs-3 bi-reddit"/>
                                        <div>
                                            <div class="m-2 mb-0 d-flex">
                                                <b>r/breaddit</b><b class="ms-2 me-2 text-secondary">•</b><p class="text-white">Lorem ipsum</p>
                                            </div>
                                            <div class="text-start text-secondary ms-2">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget leo eu justo pretium sodales.</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div>
                                    <i class="bi fs-3 bi-eye hide"/>
                                </div>
                        </div>
                    </div>

                    <div class="d-flex border border-secondary flex-column w-100 rounded-4 p-4 ps-5 pe-5 p-3 m-1 mt-5 commu">
                        <div class="d-flex flex-row justify-content-between">
                            <div>
                                <div class="d-flex justify-content-start">
                                    <div><i class="bi bi-bookmark-fill fs-4 me-2"/><b class="fs-4">Saved</b></div>
                                    <button type="button" class="rounded-pill ps-3 pe-3 ms-3 btn btn-bread shadow-lg"><b>view all</b></button>
                                </div>
                                <div class="p-1 mt-1 mb-1">
                                    <hr class="rounded"/>
                                </div>
                                <div class="d-flex justify-content-start">
                                    <b class="body text-white text-start fs-5 pe-5">Recent</b>
                                </div>
                                <div class="d-flex justify-content-start mt-2">
                                    <div class="d-flex flex-row">
                                        <i class="bi fs-logoBreaddit fs-3 bi-reddit"/>
                                        <div>
                                            <div class="m-2 mb-0 d-flex">
                                                <b>r/breaddit</b><b class="ms-2 me-2 text-secondary">•</b><p class="text-secondary">1 day ago</p>
                                            </div>
                                            <div class="text-start text-white ms-2 fs-5 mb-2">
                                                <b>Lorem ipsum dolor sit amet</b>
                                            </div>
                                            <div class="text-start text-secondary ms-2">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget leo eu justo pretium sodales.</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div>
                                    <i class="bi fs-3 bi-eye hide"/>
                                </div>
                        </div>
                    </div>


                </div>
              </div>

            </div>
          </center>
        </body>
    </div>
  );
}

export default Profile;