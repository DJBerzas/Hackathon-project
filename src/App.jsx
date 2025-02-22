import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Facility from "./Facility.jsx";
import HealthProfessional from "./HealthProfessional.jsx";
import SeeEvent from "./SeeEvent.jsx";
import CalandarAndTime from "./CalandarAndTime.jsx";
import Buildings from "./Buildings.jsx";
import Rooms from "./Rooms.jsx";
import SportsFacility from "./SportsFacility.jsx";
import Training from "./Training.jsx";
import FormsPage from "./FormsPage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Facility" element={<Facility />} />
                <Route path="/HealthProfessional" element={<HealthProfessional />} />
                <Route path="/SeeEvent" element={<SeeEvent />} />
                <Route path="/Training" element={<Training />} />
                <Route path="/CalandarAndTime" element={<CalandarAndTime />} />
                <Route path="/SportsFacility" element={<SportsFacility />} />
                <Route path="/Buildings" element={<Buildings />} />
                <Route path="/Rooms" element={<Rooms />} />
                <Route path="/FormsPage" element={<FormsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
