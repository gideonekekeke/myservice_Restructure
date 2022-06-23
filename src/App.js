import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import Hearder from "./Components/Hearder";
import SelectAgent from "./Components/SelectAgent";
import RegisterArtecian from "./Components/RegisterArtecian";
import SigninArtecian from "./Components/SigninArtecian";
import UsersSearch from "./Components/UsersSearch";
import UserRegister from "./Components/UsersRegister";
import UsersSignin from "./Components/UsersSignIn";
import UserHomeDash from "./Components/Dashboard/UsersDashBoard.js/UserHomeDash";
import ArticianDashBoard from "./Components/Dashboard/ArticianDashboard/ArticianDashBoard";
import AgentHomeDash from "./Components/Dashboard/AgentsDashBoard/AgentHomeDash";
import VerificationPage from "./Components/VerificationPage";
import AgentSigin from "./Components/AgentSignin";
import ElectricianSearch from "./Components/Dashboard/UsersDashBoard.js/ElectricianSearch";
import PlumberSearch from "./Components/Dashboard/UsersDashBoard.js/PlumberSearch";
function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/agents' element={<SelectAgent />} />
					<Route path='/register-artecian' element={<RegisterArtecian />} />
					<Route path='/signin-artecian' element={<SigninArtecian />} />
					<Route path='/user-map' element={<UsersSearch />} />
					<Route path='/user-register' element={<UserRegister />} />
					<Route path='/user-signin' element={<UsersSignin />} />
					<Route path='/user-dashboard' element={<UserHomeDash />} />
					<Route path='/agent-login' element={<AgentSigin />} />
					<Route path='/artician-dashboard' element={<ArticianDashBoard />} />
					<Route path='/agent-dashboard' element={<AgentHomeDash />} />
					<Route
						path='/api/artician/work/:id/:token'
						element={<VerificationPage />}
					/>
					<Route path='/electrician' element={<ElectricianSearch />} />
					<Route path='/plumber' element={<PlumberSearch />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

// <div>
// 	<QRCode value='https://discord.com/' style={{ marginRight: 50 }} />
// 	<p>discord</p>
// </div>
