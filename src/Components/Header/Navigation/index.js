import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="headerwrapper"> {/* 👈 wrap the whole navbar */}
      <nav>
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT SIDE - ALL CATEGORIES */}
            <div className="col-sm-2 navpart1">
              <div className="catWrapper">
                <Button className="allCatTab align-items-center">
                  <span className="icon1 mr-2"><IoIosMenu /></span>
                  <span className="text">ALL CATEGORIES</span>
                  <span className="icon2 ml-2"><FaAngleDown /></span>
                </Button>

                {/* <div className="sidebarNav shadow">
                  <ul>
                    <li><Link to="/"><Button>Cats</Button></Link></li>
                    <li><Link to="/"><Button>Dogs</Button></Link></li>
                    <li><Link to="/"><Button>Pet Parent</Button></Link></li>
                    <li><Link to="/"><Button>Henlo</Button></Link></li>
                    <li><Link to="/"><Button>Pharmacy</Button></Link></li>
                    <li><Link to="/"><Button>Shop By Breed</Button></Link></li>
                    <li><Link to="/"><Button>Consult a Vet</Button></Link></li>
                    <li><Link to="/"><Button>Supertails Clinic</Button></Link></li>
                  </ul>
                </div> */}
              </div>
            </div>

            {/* RIGHT SIDE - NAV LINKS */}
            <div className="col-sm-10 navPart2 d-flex align-items-center">
              <ul className="list list-inline m-0">
                <li className="list-inline-item position-relative">
                  <Link to="/"><Button>Cats</Button></Link>
                  <div className="submenu shadow">
                    <Link to="/"><Button>Cat Food</Button></Link>
                    <Link to="/"><Button>Cat Toys</Button></Link>
                    <Link to="/"><Button>Cat Grooming</Button></Link>
                  </div>
                </li>

                <li className="list-inline-item"><Link to="/"><Button>Dogs</Button></Link></li>
                <li className="list-inline-item"><Link to="/"><Button>Pet Parent</Button></Link></li>
                <li className="list-inline-item"><Link to="/"><Button>Henlo</Button></Link></li>
                <li className="list-inline-item"><Link to="/"><Button>Pharmacy</Button></Link></li>
                <li className="list-inline-item"><Link to="/"><Button>Shop By Breed</Button></Link></li>
                <li className="list-inline-item"><Link to="/"><Button>Consult a Vet</Button></Link></li>
                <li className="list-inline-item"><Link to="/"><Button>Supertails Clinic</Button></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
