import { useState } from "react";
import PropTypes from "prop-types";

const NotesInput = ({ selectedGroup, setSelectedGroup }) => {
	const [input, setInput] = useState("");

	function handleSubmit() {
		if (input == "") return;
		const updatedGroup = { ...selectedGroup };
		const currentDate = new Date();
		const newTime = currentDate.toLocaleTimeString(),
			newDate = currentDate.toLocaleDateString();
		const obj = {
			content: input,
			date: newDate,
			time: newTime,
		};
		updatedGroup.notes.push(obj);
		setSelectedGroup(updatedGroup);
		let storageArray = JSON.parse(localStorage.getItem("groups"));
		const index = storageArray.findIndex(
			(item) => item.name === updatedGroup.name
		);
		console.log(index);
		if (index != -1) {
			storageArray[index] = updatedGroup;
			localStorage.setItem("groups", JSON.stringify(storageArray));
		}
		setInput("");
	}

	console.log(selectedGroup);

	return (
		<div className="bg-[#001F8B] bottom-0 p-8 relative">
			<textarea
				className="w-full rounded-md p-4 text-lg"
				rows={"5"}
				value={input}
				onInput={(e) => setInput(e.target.value)}
				placeholder="Enter your text here........"></textarea>
			<button
				type="submit"
				onClick={handleSubmit}
				className="absolute right-10 bottom-12 px-4 py-2 text-2xl hover:cursor-pointer rounded-md">
				<i className="fa-solid fa-paper-plane"></i>
			</button>
		</div>
	);
};

NotesInput.propTypes = {
	selectedGroup: PropTypes.object,
	setSelectedGroup: PropTypes.func,
};

export default NotesInput;
