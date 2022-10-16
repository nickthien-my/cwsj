import EventInfo from "../../components/EventInfo";
import communityoutreachlist from "../../components/communityoutreachlist";

export default function CommunityOutreach() {
    return (
        <>
            {communityoutreachlist.map(EventInfo)}

        </>
    )
}