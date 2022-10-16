import EventInfo from '../../components/EventInfo'
import talkswebinarslist from '../../components/talkswebinarslist'

export default function TalksWebinar() {
    return (
        <>
            {talkswebinarslist.reverse().map(EventInfo)}
        </>

    )
}
