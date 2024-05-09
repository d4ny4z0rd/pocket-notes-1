import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

const colorArray = [
	"#B38BFA",
	"#FF79F2",
	"#43E6FC",
	"#F19576",
	"#0047FF",
	"#6691FF",
];

const Modal = ({ isModalOpen, setIsModalOpen, setGroups }) => {
	const [name, setName] = useState("");
	const [selectedColor, setSelectedColor] = useState(null);
	const modalRef = useRef(null);

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				setName("");
				setSelectedColor(null);
				setIsModalOpen(false);
			}
		};

		if (isModalOpen) {
			document.addEventListener("click", handleOutsideClick);
		}

		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, [isModalOpen, setIsModalOpen]);

	function handleColor(color) {
		setSelectedColor(color);
	}

	function handleClose() {
		setSelectedColor(null);
		setName("");
		setIsModalOpen(false);
	}

	function handleCreate() {
		if (name === "" || selectedColor === null) return;
		const newObj = { name: name, color: selectedColor, notes: [] };
		setGroups((prev) => [...prev, { ...newObj }]);
		const storeArray = localStorage.getItem("groups");
		console.log(JSON.parse(storeArray));
		let updatedArray = [];
		if (storeArray != null) {
			updatedArray = JSON.parse(storeArray);
		}
		updatedArray.push({ ...newObj });
		localStorage.setItem("groups", JSON.stringify(updatedArray));
		setIsModalOpen(false);
		setSelectedColor(null);
		setName("");
	}

	if (!isModalOpen) return null;

	return (
		<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
			<div
				ref={modalRef}
				className="bg-white sm:w-[40rem] sm:h-[19rem] h-[20rem] w-[30rem] p-2 rounded-lg sm:p-6">
				<h2 className="text-2xl mb-4 font-semibold">Create New Group</h2>
				<div className="flex gap-8 my-8 justify-evenly">
					<label className="font-semibold text-lg mt-1">Group Name</label>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						type="text"
						className="w-[27rem] rounded-xl border border-gray-500 text-lg p-[0.3rem]"
					/>
				</div>
				<div className="flex gap-8 my-8 justify-evenly">
					<label className="font-semibold text-lg mt-1">Choose color</label>
					<div className="flex w-[27rem] gap-2 h-10">
						{colorArray.map((color, index) => (
							<div
								onClick={() => handleColor(color)}
								className={`rounded-full cursor-pointer`}
								key={index}
								style={{
									backgroundColor: color,
									color: color,
									border: `2px solid ${selectedColor === color ? "black" : ""}`,
								}}>
								coloo
							</div>
						))}
					</div>
				</div>
				<div className="flex justify-end gap-4 mt-2  border-black">
					<button
						onClick={handleClose}
						className="mt-4 bg-red-500 text-white px-4 py-2 rounded ">
						Close
					</button>
					<button
						onClick={handleCreate}
						className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
						Create
					</button>
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	isModalOpen: PropTypes.bool,
	setIsModalOpen: PropTypes.func,
	setGroups: PropTypes.func,
};

export default Modal;
