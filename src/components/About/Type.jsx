import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
	return (
		<Typewriter
			onInit={(typewriter) => {
				typewriter.typeString('{ Junior Full Stack Developer }').start();
			}}
			options={{
				cursor: '',
			}}
		/>
	);
}

export default Type;
