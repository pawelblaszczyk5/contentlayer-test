"use client";

import { useState } from "react";

export const TestClient = ({ initialValue }: { initialValue: number }) => {
	const [count, setCount] = useState(initialValue);

	return (
		<button type="button" onClick={() => setCount(prev => prev + 1)}>
			Current value: {count}
		</button>
	);
};
