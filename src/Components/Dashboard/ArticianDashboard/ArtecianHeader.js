import React, { useContext } from "react";
import { GlobalContext } from "../../Global/GlobalContext";
import axios from "axios";
import { ImCancelCircle } from "react-icons/im";
import ArticianSideBarToggle from "./ArticianSideBarToggle";
const ArtecianHeader = () => {
	const [show, setShow] = React.useState(false);

	const toggleShow = () => {
		setShow(!show);
	};
	const { current } = useContext(GlobalContext);
	const [data, setData] = React.useState([]);
	const fetchDetails = async () => {
		await axios
			.get(`https://myservicebe.onrender.com/api/artician/${current?._id}`)
			.then((response) => {
				// console.log("get the user", response);
				setData(response?.data?.data);
			});
	};

	React.useEffect(() => {
		fetchDetails();
	}, [data]);
	return (
		<header
			style={{ background: "#22218C", color: "white" }}
			class='main-header header-shaddow'>
			<div class='container-fluid'>
				<div class='main-box'>
					<div class='nav-outer'>
						<div class='logo-box'>
							<div class='logo'>
								<a>
									<img
										style={{
											height: "40px",
											width: "120px",
											objectFit: "cover",
										}}
										src='images/le3.png'
										alt=''
										title=''
									/>
								</a>
							</div>
						</div>
					</div>

					<div class='outer-box'>
						<div class='dropdown dashboard-option'>
							<a
								class='dropdown-toggle'
								role='button'
								data-toggle='dropdown'
								aria-expanded='false'>
								<img
									style={{
										objectFit: "cover",
									}}
									src={data?.avatar}
									alt='avatar'
									class='thumb'
								/>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class='mobile-header'>
				<div class='logo'>
					<a>
						<img
							style={{
								height: "50px",
								width: "120px",
								objectFit: "cover",
							}}
							src='images/le3.png'
							alt=''
							title=''
						/>
					</a>
				</div>

				<div class='nav-outer clearfix'>
					<div class='outer-box'>
						<button id='toggle-user-sidebar'>
							<img
								style={{
									objectFit: "cover",
								}}
								src={data?.avatar}
								alt='avatar'
								class='thumb'
							/>
						</button>

						{show ? (
							<div
								style={{
									zIndex: "1000",
									color: "white",
									fontSize: "25px",
									marginLeft: "70px",
									cursor: "pointer",
								}}>
								<ImCancelCircle onClick={toggleShow} />
							</div>
						) : (
							<a
								onClick={toggleShow}
								style={{ color: "white" }}
								class='mobile-nav-toggler navbar-trigger'>
								<span class='flaticon-menu-1'></span>
							</a>
						)}
					</div>
				</div>
			</div>

			{show ? <ArticianSideBarToggle toggleShow={toggleShow} /> : null}
		</header>
	);
};

export default ArtecianHeader;
