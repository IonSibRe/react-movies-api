import List from "./components/List";
import Search from "./components/Search";
import SingleMovie from "./components/SingleMovie";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<main className="main">
						<div className="main-container">
							<Search />
							<List />
						</div>
					</main>
				</Route>
				<Route exact path="/movie/:id">
					<SingleMovie />
				</Route>
				<Route path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
