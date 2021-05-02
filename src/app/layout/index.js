import React,{ useState } from 'react'
import Sidebar from './sidebar';
import Topbar from './topbar'

const Layout = ({
	children,
}) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const handleSidebar = () => {
		setSidebarOpen((prev) => !prev);
	};
	return (
		<div>
			<Topbar
				handleSidebar={handleSidebar}
			/>
			<Sidebar
				open={sidebarOpen}
				handleClose={handleSidebar}
			/>
			<div style={{width: '700px', margin: 'auto'}}>
				{children}
			</div>
		</div>
	);
}

export default Layout;
