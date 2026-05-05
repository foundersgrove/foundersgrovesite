import Projects from "../components/Projects";
import TeamCard from "../components/teamCard";
import ContactButton from "../components/ContactButton";
import TypewriterStarter from "../components/TypewriterStarter";
import { teamMembers } from "../../config/teamConfig";
import SiteBackground from "../components/SiteBackground";
import TitleCard from "../components/titleCard";
import PreviewCanvas from "../components/PreviewCanvas";


export default async function Page() {
	return (
	<div className="pt-8">
     <PreviewCanvas />
	</div>
	);
}
