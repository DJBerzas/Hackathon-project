import Button from "./Button.jsx";
import { useNavigate } from "react-router-dom"   
function Rooms() {
    const navigate = useNavigate();

    const goToForms= () => {
      navigate("/FormsPage", { state: { message: "Building" } });
    };
    const goToHome = () => {
        navigate("/", { state: { message: "Building" } });
      };
    return (
        <div>
            <h1>Welcome to Rooms</h1>
            <button onClick={goToHome}>Home</button>
            <button onClick={goToForms}>To Form</button>
        </div>
    );
}

export default Rooms;