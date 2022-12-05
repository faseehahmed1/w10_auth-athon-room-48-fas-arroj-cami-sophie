import React from "react";

export default function Button({ handleClick, className, text }) {
	return (
		<button className={className} onClick={handleClick}>
			{text}
		</button>
	);
}
