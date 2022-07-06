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
import CarpenterSearch from "./Components/Dashboard/UsersDashBoard.js/CarpenterSearch";
import HairCutSearch from "./Components/Dashboard/UsersDashBoard.js/HairCutSearch";
import AcRefrigeratorSearch from "./Components/Dashboard/UsersDashBoard.js/AcRefrigeratorSearch";
import GeneratorSearch from "./Components/Dashboard/UsersDashBoard.js/GeneratorSearch";
import MyServicePage from "./Components/Dashboard/ArticianDashboard/MyServicePage";
import ViewMoreAtecians from "./Components/Dashboard/UsersDashBoard.js/ViewMoreAtecians";
import Messages from "./Components/Messages";
import ArtecianMessages from "./Components/Dashboard/ArticianDashboard/ArtecianMessages";
import PainterSearch from "./Components/Dashboard/UsersDashBoard.js/PainterSearch";
import UserProfile from "./Components/Dashboard/UsersDashBoard.js/UserProfile";
import { useSelector } from "react-redux";
import PrivateRoute from "./Components/Global/PrivateRoute";
function App() {
	const user = useSelector((state) => state.persistedReducer.current);
	return (
		<div>
			<Router>
				<Routes>
					{!user ? (
						<>
							<Route path='/agents' element={<SelectAgent />} />
							<Route path='/register-artecian' element={<RegisterArtecian />} />
							<Route path='/signin-artecian' element={<SigninArtecian />} />

							<Route path='/user-register' element={<UserRegister />} />
							<Route path='/user-signin' element={<UsersSignin />} />

							<Route path='/agent-login' element={<AgentSigin />} />

							<Route
								path='/api/artician/work/:id/:token'
								element={<VerificationPage />}
							/>
						</>
					) : (
						<>
							{" "}
							<Route
								path='/'
								element={
									<PrivateRoute>
										<HomeScreen />
									</PrivateRoute>
								}
							/>
						</>
					)}

					<Route path='/user-dashboard' element={<UserHomeDash />} />
					<Route path='/artician-dashboard' element={<ArticianDashBoard />} />
					<Route path='/agent-dashboard' element={<AgentHomeDash />} />
					<Route path='/user-map' element={<UsersSearch />} />
					<Route path='/electrician' element={<ElectricianSearch />} />
					<Route path='/plumber' element={<PlumberSearch />} />
					<Route path='/carpenter' element={<CarpenterSearch />} />
					<Route path='/haircut' element={<HairCutSearch />} />
					<Route path='/painter' element={<PainterSearch />} />
					<Route path='/artecian-profile' element={<UserProfile />} />
					<Route
						path='/ac-refrigeratorsearch'
						element={<AcRefrigeratorSearch />}
					/>
					<Route path='/generator-search' element={<GeneratorSearch />} />
					<Route path='/my-service' element={<MyServicePage />} />
					<Route path='/view-more' element={<ViewMoreAtecians />} />
					<Route path='/allmessage' element={<Messages />} />
					<Route path='/artemessage' element={<ArtecianMessages />} />
					<Route
						path='/'
						element={
							<PrivateRoute>
								<HomeScreen />
							</PrivateRoute>
						}
					/>
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
