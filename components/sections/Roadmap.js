import Wrapper from "../prebuilt/Wrapper";
import RoadmapList from "../RoadmapList";
import Image from "next/image";

import mario from "../../public/img/mario.png";

export default function Roadmap() {
	return (
		<>
			<Wrapper>
				<div id='roadmap'>
					<h2>
						<span className='text-secondary'>MetaVax</span> Roadmap
					</h2>
					<h3 className='mb-12'>
						Current Launch - Version 2.0 (Mint Phase 2/7)
					</h3>
				</div>
				<div className='lg:grid-cols-5 auto-rows-auto grid grid-cols-1 gap-4'>
					<div className='lg:col-span-3 flex-center flex-col'>
						<RoadmapList />
					</div>

					<div className='lg:col-span-2'>
						<Image src={mario} alt='Metavax Mario' />
					</div>
				</div>
			</Wrapper>
		</>
	);
}
