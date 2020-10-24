import React, { useState } from "react";
import Draggable from "react-draggable";

export default function Home() {
	const [activeDrags, setActiveDrags] = useState({ x: 0, y: 0 });
	const onStart = (e) => {};

	const onStop = (e) => {
		setActiveDrags({ x: e.x, y: e.y });
	};

	const onDrag = (e, ui) => {
		console.log("onDrag", e, ui);
	};

	return (
		<div>
			<h1 className="text-info">I am in Home</h1>
			<Draggable
				onDrag={(e, ui) => onDrag(e, ui)}
				defaultPosition={activeDrags}
				onStart={(e) => onStart(e)}
				onStop={(e) => onStop(e)}
			>
				<div className="box">I can be dragged anywhere</div>
			</Draggable>
		</div>
	);
}
