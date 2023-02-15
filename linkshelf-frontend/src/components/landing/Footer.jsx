export const Footer = ({ ...props }) => {
	return (
		<div className="footer">
			<p className="footer-hackathon-text ">
				Credits :{" "}
				<span style={{ color: "white" }}>
					<a
						style={{ color: "white" }}
						target="_blank"
						href="https://www.oracle.com/in/cloud/"
					>
						Oracle Cloud
					</a>{" "}
					x{" "}
					<a
						style={{ color: "white" }}
						target="_blank"
						href="https://developerweek-2023-hackathon.devpost.com/"
					>
						Developer Week Hackathon
					</a>
				</span>
			</p>
		</div>
	);
};
