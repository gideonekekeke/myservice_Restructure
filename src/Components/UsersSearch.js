import React, {useRef, useState } from 'react'
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
import WorkersModal from './WorkersModla';


const center = { lat: 48.8584, lng: 2.2945 };

function UsersSearch() {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: "AIzaSyBIe8lcH1rTX_sBfYeopfTGOjudCxQoPGo",
		libraries: ["places"],
	});

	const [map, setMap] = useState(/** @type google.maps.Map */ (null));
	const [directionsResponse, setDirectionsResponse] = useState(null);
	const [distance, setDistance] = useState("");
	const [duration, setDuration] = useState("");
	const [show, setShow] = React.useState(false)


	const toggleShow = (e)=>{
		setShow(true)
		console.log('just clicked')
	}
	/** @type React.MutableRefObject<HTMLInputElement> */
	const originRef = useRef();
	/** @type React.MutableRefObject<HTMLInputElement> */
	const destiantionRef = useRef();

	if (!isLoaded) {
		return `<div>Loading...</div>`
	}

	async function calculateRoute() {
		if (originRef.current.value === "" || destiantionRef.current.value === "") {
			return;
		}
		// eslint-disable-next-line no-undef
		const directionsService = new google.maps.DirectionsService();
		const results = await directionsService.route({
			origin: originRef.current.value,
			destination: destiantionRef.current.value,
			// eslint-disable-next-line no-undef
			travelMode: google.maps.TravelMode.DRIVING,
		
			
		});
		setDirectionsResponse(results);
		setDistance(results.routes[0].legs[0].distance.text);
		setDuration(results.routes[0].legs[0].duration.text);
		toggleShow()
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
				background : 'white',
				width : "50%"
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
							<Input type='text' placeholder='Origin' ref={originRef} />
						</Autocomplete>
					</Box>
					<Box flexGrow={1}>
						<Autocomplete>
							<Input
								type='text'
								placeholder='Destination'
								ref={destiantionRef}
							/>
						</Autocomplete>
					</Box>

					<ButtonGroup>
						<Button
							style={{ background: "#22218C", color: "white" }}
							type='submit'
							onClick={calculateRoute}>
							Calculate Route
						</Button>
						<IconButton
							aria-label='center back'
							icon={<FaTimes />}
							onClick={clearRoute}
						/>
					</ButtonGroup>
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