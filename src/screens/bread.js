import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar';

function Bread() {
  return (
    <div class="bg-dark text-light">
        <Navbar />
        <body class="bg-dark text-light mt-5">
          <center class="d-flex">
            <Sidebar />
            <div class="w-100 mt-5 pb-5 p-5">
                test
            </div>
          </center>
        </body>
    </div>
  );
}

export default Bread;