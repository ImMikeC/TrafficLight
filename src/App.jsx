import React, { useState } from "react";


//create your first component
const TrafficLight = () => {
	const [luz, cambiarLuz] = useState("l1")
	return (
		<span>
			<span className="span">
				<span className="caja">
					{/*Luz Roja*/}
					<button onClick={() => { cambiarLuz("l1") }} className={" l1 " + (luz === "l1" ? " marca " : " ")}></button>
					{/*Luz Naranja*/}
					<button onClick={() => { cambiarLuz("l2") }} className={" l2 " + (luz === "l2" ? " marca"  : " ")}></button>
					{/*Luz Verde*/}
					<button onClick={() => { cambiarLuz("l3") }} className={" l3 " + (luz === "l3" ? " marca " : " ")}></button>
				</span>
			</span>

		</span>
	);
}

export default TrafficLight