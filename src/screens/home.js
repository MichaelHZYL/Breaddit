import './style/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Community from '../components/community';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

function Home() {
  return (
    <div class="bg-dark text-light">
        <Navbar />
        <body class="bg-dark text-light mt-5">
          <center class="d-flex">
            <Sidebar />

            <div class="w-100 mt-5 pb-5">
              <div class="d-flex"></div>
              <Community name="breaddit" 
                icn={<i class="bi bi-reddit fs-3 me-2 fs-logoBreaddit"/>}
                member="220k"
                online="45"
                disc="The most official Breaddit community of all official Breaddit communities. Your go-to place for Breaddit updates, announcements, and news. Occasional frivolity." />
                
              <Community name="unknown" 
                icn={<i class="bi bi-filter-circle fs-3 me-2 fs-logo"/>}
                member="1"
                online="1"
                disc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nisl ut dolor finibus pellentesque. Sed at posuere nisl. Donec." />

              <Community name="unknown" 
                icn={<i class="bi bi-filter-circle fs-3 me-2 fs-logo"/>}
                member="1"
                online="1"
                disc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nisl ut dolor finibus pellentesque. Sed at posuere nisl. Donec." />

              <Community name="unknown" 
                icn={<i class="bi bi-filter-circle fs-3 me-2 fs-logo"/>}
                member="1"
                online="1"
                disc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nisl ut dolor finibus pellentesque. Sed at posuere nisl. Donec." />

            </div>
          </center>
        </body>
    </div>
  );
}

export default Home;