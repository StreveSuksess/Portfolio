import { FC } from 'react'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
	Route,
	RouterProvider
} from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar.tsx'
import { About } from './pages/About/About.tsx'
import { Home } from './pages/Home/Home.tsx'
import { Projects } from './pages/Projects/Projects.tsx'

const Root = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	)
}

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/Portfolio" element={<Root />}>
			<Route index element={<Home />} />
			<Route path="/Portfolio/about" element={<About />} />
			<Route path="/Portfolio/projects" element={<Projects />} />
		</Route>
	)
)

const App: FC = () => {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
