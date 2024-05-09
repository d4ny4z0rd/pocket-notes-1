import PropTypes from "prop-types";

const NotesRep = ({ selectedGroup }) => {
	console.log(selectedGroup);

	const notesArray = selectedGroup.notes;

	console.log(notesArray);

	return (
		<div className="overflow-y-auto max-h-[40rem] p-2">
			{notesArray
				.slice()
				.reverse()
				.map((temp, index) => {
					const newDate = temp.date;
					console.log(newDate);
					let dateArray = newDate.split("/");
					console.log(dateArray);
					const day = dateArray[1],
						month = dateArray[0],
						year = dateArray[2];
					const date = new Date(`${year}-${month}-${day}`);

					const monthName = date.toLocaleString("default", { month: "short" });

					const formattedDate = `${day} ${monthName}, ${year}`;

					return (
						<div key={index} className="border bg-white m-6 p-4 rounded-lg">
							<div>{temp.content}</div>
							<div className=" flex justify-end gap-8 text-gray-500">
								<div className="">{formattedDate}</div>
								<div className="">{temp.time}</div>
							</div>
						</div>
					);
				})}
		</div>
	);
};

NotesRep.propTypes = {
	selectedGroup: PropTypes.object,
};

export default NotesRep;
