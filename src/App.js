import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useAuthCheck from "./hooks/authCheck";
import Conversation from "./pages/Conversation";
import Inbox from "./pages/Inbox";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoutes from "./RouteConditions/PrivateRoutes";
import PublicRoutes from "./RouteConditions/PublicRoutes";

function App() {

    const authenticated = useAuthCheck()

    return (
        // authenticated === false ? <div> Checking Authentication... </div> :
        <Router>
            <Routes>
                <Route path="/" element={<PublicRoutes><Login /></PublicRoutes>} />
                <Route path="/register" element={<PublicRoutes><Register /></PublicRoutes>} />


                <Route path="/inbox" element={<PrivateRoutes><Conversation /></PrivateRoutes>} />
                <Route path="/inbox/:id" element={<PrivateRoutes><Inbox /></PrivateRoutes>} />


            </Routes>
        </Router>
    );
}

export default App;
