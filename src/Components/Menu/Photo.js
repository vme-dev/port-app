import React from 'react';
import photo from './photo.jpg';
import './Photo.css';

export default function (props) {
	return (
		<div className="my-photo">
		<div className="my-photo_wrap">
			<img src={photo} className="my-photo-img" alt="logo" />
		</div>
		</div>
		);
}