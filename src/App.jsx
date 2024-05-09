import { useEffect, useState } from "react";
import Groups from "./components/Groups";
import NotesDisplay from "./components/NotesDisplay";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [groups, setGroups] = useState(
		localStorage.getItem("groups")
			? JSON.parse(localStorage.getItem("groups"))
			: []
	);
	const [selectedGroup, setSelectedGroup] = useState(null);
	const [showGroup, setShowGroup] = useState(true);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handleSelectedGroup = (obj) => {
		setSelectedGroup(obj);
		setShowGroup(false);
	};

	const handleBackToGroups = () => {
		setSelectedGroup(null);
		setShowGroup(true);
	};

	return (
		<>
			{windowWidth <= 600 ? (
				<div>
					{showGroup ? (
						<Groups
							groups={groups}
							setSelectedGroup={handleSelectedGroup}
							selectedGroup={selectedGroup}
							isModalOpen={isModalOpen}
							setIsModalOpen={setIsModalOpen}
							setGroups={setGroups}
						/>
					) : (
						<NotesDisplay
							groups={groups}
							selectedGroup={selectedGroup}
							setSelectedGroup={setSelectedGroup}
							onBack={handleBackToGroups}
						/>
					)}
				</div>
			) : (
				<div>
					<div className="flex">
						<div className={"sm:w-[27%]"}>
							<Groups
								groups={groups}
								setSelectedGroup={handleSelectedGroup}
								selectedGroup={selectedGroup}
								isModalOpen={isModalOpen}
								setIsModalOpen={setIsModalOpen}
								setGroups={setGroups}
							/>
						</div>
						<div className={"w-full sm:w-[73%]"}>
							<NotesDisplay
								groups={groups}
								selectedGroup={selectedGroup}
								setSelectedGroup={setSelectedGroup}
								onBack={handleBackToGroups}
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default App;
