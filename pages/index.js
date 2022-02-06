import Meta from "../components/Meta";
import Nav from "../components/prebuilt/Nav";
import MintInfo from "../components/sections/MintInfo";
import Roadmap from "../components/sections/Roadmap";
import Hero from "../components/sections/Hero";
import Specs from "../components/sections/Specs";
import Team from "../components/sections/Team";
import FutureCollections from "../components/sections/FutureCollections";
import MintFooter from "../components/sections/MintFooter";

export default function Home() {
	return (
		<>
			<Meta title='Metavax NFT' desc='' />
			<Nav
				position='sticky'
				links={["About", "Mint", "Roadmap", "Specs", "Team", "Post-Mint"]}
			/>

			<Hero />

			<MintInfo />

			<Roadmap />

			<Specs />

			<Team />

			<FutureCollections />

			<MintFooter />
		</>
	);
}
