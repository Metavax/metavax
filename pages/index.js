import Fade from "react-reveal/Fade";
import Meta from "../components/Meta";
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
import Animations from "../components/Animations";

export default function Home() {
	return (
		<>
			<Meta title='Metavax' desc='The virus is spreading...' />

			<Nav />
			<Header />
			<div className='relative overflow-hidden'>
				<Animations />
				<div className='container px-12 mx-auto'>
					<Fade duration={1250}>
						<Mint />
						<About />
						<JoinDiscord />
						<Roadmap />
						<Rarity />
						<Specs />
						<Team />
						<FAQ />
						<Footer />
					</Fade>
				</div>
			</div>
		</>
	);
}
