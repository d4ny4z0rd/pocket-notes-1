import Modal from "./Modal";
import PropTypes from "prop-types";

const Groups = ({
	groups,
	selectedGroup,
	setSelectedGroup,
	isModalOpen,
	setIsModalOpen,
	setGroups,
}) => {
	return (
		<div className="w-full">
			<div>
				<h1 className="text-center text-3xl my-10">Pocket Notes</h1>
				<div className="">
					{groups.map((obj, index) => {
						let name = obj.name,
							color = obj.color;
						let nameArray = name.split(" ");
						let displayName = "";
						if (nameArray.length === 2) {
							displayName =
								nameArray[0].charAt(0).toUpperCase() +
								nameArray[1].charAt(0).toUpperCase();
						} else displayName = nameArray[0].charAt(0).toUpperCase() + "G";
						if (name)
							return (
								<div
									onClick={() => setSelectedGroup(obj)}
									key={index}
									style={{
										backgroundColor: `${
											obj === selectedGroup ? "#D3D3D3" : ""
										}`,
									}}
									className="my-[1rem] rounded-md h-14 content-center p-2 text-lg flex gap-2 cursor-pointer">
									<div
										style={{ backgroundColor: color }}
										className="rounded-full text-white w-10 h-10 content-center text-center">
										{displayName}
									</div>
									<div className="content-center">{name}</div>
								</div>
							);
					})}
				</div>
				<button
					onClick={(e) => {
						e.stopPropagation();
						setIsModalOpen(true);
					}}
					className="w-16 h-16 rounded-full text-white bg-blue-700 text-xl fixed top-[32rem] right-8 sm:left-[24rem] sm:top-[50rem]">
					<i className="fa-solid fa-plus"></i>
				</button>

				<Modal
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
					setGroups={setGroups}
				/>
			</div>
		</div>
	);
};

Groups.propTypes = {
	groups: PropTypes.array,
	selectedGroup: PropTypes.object,
	setSelectedGroup: PropTypes.func,
	isModalOpen: PropTypes.bool,
	setIsModalOpen: PropTypes.func,
	setGroups: PropTypes.func,
};

export default Groups;
