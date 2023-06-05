import "@/app/globals.css";

export const runtime = "experimental-edge";

const MainLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en">
		<body>{children}</body>
	</html>
);

export default MainLayout;
