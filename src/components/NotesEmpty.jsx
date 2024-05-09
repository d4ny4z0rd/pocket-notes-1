const NotesEmpty = () => {
	return (
		<div className="bg-[#DAE5F5] sm:h-[59.8rem] flex justify-center content-center overflow-hidden">
			<div className="">
				<img
					className="my-[10rem]"
					src="https://s3-alpha-sig.figma.com/img/f2b5/d356/00b6d4748cd536df01bd2b4fecc1d821?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OKNF6qD8oCAT22tJ8ecKCVuZuG7CI9DoGDZ7cYQyBMj-vKjWT9lw-IirTdlsNjamPfg2uFSh5dewhaaYVR0SofHtz1P~RHoxVh2o6AjvTdIg-jA3atkKtCO3ywzxSclSfW76TAkpvA81PWU5YbszQvwCBE2C0YtFyUII4~l4tn0CrHzl1y9lSd10GZwRNE0gR4xKABRmEumdBovKZja40UczlmowbmLh4OFXv5G~HrW47e6HZkCmwdODoBb0ub1b3tgKSx8roiVTrqn9kKcXDWf7EGyuSVu8k2VLuKeIKYr6KlNMxLoyroevHiELfFxpWgATblnE0mgDSRSb9da7LQ__"
					alt=""
				/>
				<h1 className="text-4xl font-bold text-center mt-[-10rem]">
					Pocket Notes
				</h1>
				<p className="text-lg text-center my-[1rem]">
					Send and receive messages without keeping your phone online. <br />
					Use Pocket Notes on up to 4 linked devices and 1 mobile phone
				</p>
				<p className="text-md text-center mt-[17rem]">
					<i className="fa-solid fa-lock mx-2"></i>end-to-end encrypted
				</p>
			</div>
		</div>
	);
};

export default NotesEmpty;
