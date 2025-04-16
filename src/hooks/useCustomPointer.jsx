import { useEffect, useState } from "react";

function useCustomPointer(element) {
	const [positions, setPositions] = useState({ x: 0, y: 0 });
	useEffect(() => {
		const handleMouseMove = (event) => {
			setPositions({ x: event.clientX, y: event.clientY });
		}
		document.addEventListener("mousemove", handleMouseMove)
		return () => document.removeEventListener("mousemove", handleMouseMove);
	}, [])

	return (
		<div style={{
			position: "fixed",
			top: positions.y,
			left: positions.x,
			transform: "translate(-50%, -50%)",
			cursor: "none"
		}}>
			{element}
		</div>
	)
}

export default useCustomPointer;