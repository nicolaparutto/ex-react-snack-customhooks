import { useState } from "react";

function useSwitch() {
	const [state, setState] = useState(false)
	const toggle = () => {
		setState(!state)
	}
	return [state, toggle]
}

export default useSwitch;