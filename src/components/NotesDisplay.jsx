import PropTypes from "prop-types";
import NotesEmpty from "./NotesEmpty.jsx";
import NotesRep from "./NotesRep.jsx";
import NotesDisplayTitle from "./NotesDisplayTitle.jsx";
import NotesInput from "./NotesInput.jsx";

const NotesDisplay = ({ selectedGroup, setSelectedGroup, onBack }) => {
	return (
		<div>
			{selectedGroup === null ? (
				<div className="sm:block">
					<NotesEmpty />
				</div>
			) : (
				<div className="bg-[#DAE5F5] h-[60rem] relative sm:block">
					<NotesDisplayTitle
						color={selectedGroup?.color}
						name={selectedGroup?.name}
						onBack={onBack}
					/>
					<div>
						<NotesRep selectedGroup={selectedGroup} />
					</div>
					<div className="absolute bottom-0 left-0 w-full">
						<NotesInput
							selectedGroup={selectedGroup}
							setSelectedGroup={setSelectedGroup}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

NotesDisplay.propTypes = {
	groups: PropTypes.array,
	selectedGroup: PropTypes.object,
	setSelectedGroup: PropTypes.func,
	onBack: PropTypes.func.isRequired,
};

export default NotesDisplay;
