import pin from "../img/pin.svg";

export default function Card(props) {
	// console.log(props);
	return (
		<article>
			<img src={props.imageUrl} alt={props.title} />
			<div className="card-text-info">
				<div className="address">
					<img src={pin} alt="map-pin" />
					<span>{props.location}</span>
					<a href={props.googleMapsUrl}>View on Google Maps</a>
				</div>
				<h3>{props.title}</h3>
				<div className="time">
					<span>{props.startDate}</span>-<span>{props.endDate}</span>
				</div>
				<p>{props.description}</p>
			</div>
		</article>
	);
}
