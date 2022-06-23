import axios from 'axios';
import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { GlobalContext } from '../../Global/GlobalContext';

const AgentHomeDash = () => {
 const {current} = useContext(GlobalContext)
 const [data, setData] = React.useState([])

 console.log(current)


 const getUserData = async()=>{
  await axios.get(`http://localhost:5000/api/agent/${current?._id}`).then((response)=>{
    console.log(response?.data?.data)
    setData(response?.data?.data);
  })
 }

 React.useEffect(()=>{
getUserData()
 },[])

  return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
        flexDirection : "column"
			}}>
      <br/>
      <br/>
      <br/>
			<div> AgentH omeDash</div>
      <h3>Welcome {data?.name} </h3>
    <br/>
    <br/>
      <p style = {{fontWeight : "bold"}}>Workers  ({data?.workers?.length})</p>
		</div>
	);
}

export default AgentHomeDash