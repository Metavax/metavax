import Nav from "../components/Nav";
import Header from "../components/Header";
import Mint from "../components/Mint";
import About from "../components/About";
import JoinDiscord from "../components/JoinDiscord";
import Roadmap from "../components/Roadmap/Roadmap";
import Rarity from "../components/Rarity";
import Specs from "../components/Specs";
import Team from "../components//Team/Team";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Nav />
			<Header />

			<div className='container px-12 mx-auto'>
				<Mint />
				<About />
				<JoinDiscord />
				<Roadmap />
				<Rarity />
				<Specs />
				<Team />
				<FAQ />
				<Footer />
			</div>
		</>
	);
}
