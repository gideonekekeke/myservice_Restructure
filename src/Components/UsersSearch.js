import React, { useRef, useState, useContext } from "react";
import {
	Box,
	Button,
	ButtonGroup,
	Flex,
	HStack,
	IconButton,
	Input,
	SkeletonText,
	Text,
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
// import {MdLocationPin} from 'react-icons/md'

import {
	useJsApiLoader,
	GoogleMap,
	Marker,
	Autocomplete,
	DirectionsRenderer,
} from "@react-google-maps/api";
import WorkersModal from "./WorkersModla";
import { GlobalContext } from "../Components/Global/GlobalContext";
import Swal from "sweetalert2";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const center = { lat: 48.8584, lng: 2.2945 };

function UsersSearch() {
	const { current, showResult, setShowResult } = useContext(GlobalContext);
	const hist = useNavigate();
	const data = useSelector((state) => state.persistedReducer.serchValue);
	console.log("serchdata", data);
	const userDatas = useSelector((state) => state.persistedReducer.current);
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: "AIzaSyBIe8lcH1rTX_sBfYeopfTGOjudCxQoPGo",
		libraries: ["places"],
	});

	const [map, setMap] = useState(/** @type google.maps.Map */ (null));
	const [directionsResponse, setDirectionsResponse] = useState(null);
	const [distance, setDistance] = useState("");
	const [duration, setDuration] = useState("");
	const [loading, setLoading] = useState(false);
	const [show, setShow] = React.useState(false);

	async function calculateRoute() {
		if (originRef === "" || destiantionRef === "" || !showResult.location) {
			Swal.fire({
				icon: "error",
				title: "an error occured while searching, please try again",
			}).then(() => {
				window.location.reload(hist("/user-dashboard"));
			});
		}
		// eslint-disable-next-line no-undef
		const directionsService = new google.maps.DirectionsService();
		const results = await directionsService.route({
			origin: `${userDatas?.location}`,
			destination: `${showResult?.location}`,
			// eslint-disable-next-line no-undef
			travelMode: google.maps.TravelMode.DRIVING,
		});
		setDirectionsResponse(results);
		setDistance(results.routes[0].legs[0].distance.text);
		setDuration(results.routes[0].legs[0].duration.text);
		toggleShow();
	}

	React.useEffect(() => {
		calculateRoute();
	}, [calculateRoute, showResult, userDatas]);

	const toggleShow = (e) => {
		setShow(true);
		console.log("just clicked");
	};
	/** @type React.MutableRefObject<HTMLInputElement> */
	const originRef = userDatas;
	/** @type React.MutableRefObject<HTMLInputElement> */
	const destiantionRef = showResult;

	if (!isLoaded) {
		return `<div>Loading...</div>`;
	}

	function clearRoute() {
		setDirectionsResponse(null);
		setDistance("");
		setDuration("");
		originRef.current.value = "";
		destiantionRef.current.value = "";
	}

	return (
		<Flex
			position='relative'
			flexDirection='column'
			alignItems='center'
			h='100%'
			w='100%'>
			<Box position='absolute' left={0} top={0} h='100%' w='100%'>
				{/* Google Map Box */}
				<GoogleMap
					center={center}
					zoom={15}
					mapContainerStyle={{ width: "100vw", height: "100vh" }}
					options={{
						zoomControl: false,
						streetViewControl: false,
						mapTypeControl: false,
						fullscreenControl: false,
					}}
					onLoad={(map) => setMap(map)}>
					<Marker position={center} />
					{directionsResponse && (
						<DirectionsRenderer directions={directionsResponse} />
					)}
				</GoogleMap>
			</Box>
			<Box
				style={{
					background: "white",
				}}
				p={4}
				borderRadius='lg'
				m={4}
				bgColor='white'
				shadow='base'
				minW='container.md'
				zIndex='1'>
				<HStack spacing={2} justifyContent='space-between'>
					<Box flexGrow={1}>
						<Autocomplete>
							<Input
								type='text'
								placeholder='Origin'
								value={originRef?.location}
							/>
						</Autocomplete>
					</Box>
					<Box flexGrow={1}>
						<Autocomplete>
							<Input
								type='text'
								placeholder='Destination'
								value={destiantionRef?.location}
							/>
						</Autocomplete>
					</Box>

					<ButtonGroup></ButtonGroup>
				</HStack>
				<HStack spacing={4} mt={4} justifyContent='space-between'>
					<Text>Distance: {distance} </Text>
					<Text>Duration: {duration} </Text>
				</HStack>
			</Box>
			{show ? <WorkersModal /> : null}
		</Flex>
	);
}

export default UsersSearch;

// <IconButton aria-label='center back' icon={<FaTimes />} onClick={clearRoute} />;

// <Button
// 	style={{ background: "#22218C", color: "white" }}
// 	type='submit'
// 	onClick={calculateRoute}>
// 	Calculate Route
// </Button>
