import TypeTest from "../../components/TypeTest";
import { useNavigate } from "react-router-dom";
export default () => {
    const navigate = useNavigate();

    return (
        <div>
            <TypeTest />
            <button onClick={() => navigate("/login")}>afsdsdfg</button>
        </div>
    );
};
