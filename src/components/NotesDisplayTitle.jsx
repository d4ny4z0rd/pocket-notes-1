import PropTypes from "prop-types";

const NotesDisplayTitle = ({ color, name, onBack }) => {
	console.log(color);
	let nameArray = name.split(" ");
	let displayName = "";
	if (nameArray.length === 2) {
		displayName =
			nameArray[0].charAt(0).toUpperCase() +
			nameArray[1].charAt(0).toUpperCase();
	} else displayName = nameArray[0].charAt(0).toUpperCase() + "G";

	return (
		<div className="text-white h-20 content-center text-xl p-5 bg-[#001F8B] flex gap-2">
			<button onClick={onBack} className="text-xl">
				<i className="fa-solid fa-arrow-left"></i>
			</button>
			<div
				style={{ backgroundColor: color }}
				className="rounded-full text-white w-10 h-10 content-center text-center">
				{displayName}
			</div>
			<div className="content-center">{name}</div>
		</div>
	);
};

NotesDisplayTitle.propTypes = {
	color: PropTypes.string,
	name: PropTypes.string,
	onBack: PropTypes.func,
};

export default NotesDisplayTitle;
