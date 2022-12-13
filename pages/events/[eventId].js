import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import { Fragment } from "react";
import EventSummary from "../../component/event-detail/event-summary";
import EventLogistics from "../../component/event-detail/event-logistics";
import EventContent from "../../component/event-detail/event-content";
import Comments from "../../component/input/comments";
function EventPage(props){

    const event=props.event
    if (!event) {
        return <p>no event foud</p>
    }
    return  <Fragment>
                <EventSummary title={event.title}/>
                <EventLogistics
                id={event.id}
                imageAlt={event.title}
                address={event.location}
                date={event.date}
                image={event.image}
                />

                <EventContent><p>{event.description}</p></EventContent>

                <Comments eventId={event.id} />
            </Fragment>
}

export default EventPage

export async function getStaticProps(context){
    const id=context.params.eventId
    const event= await getEventById(id)

    return {
        props:{
            event: event
        }
    }
}
export async function getStaticPaths(){
    const events= await getFeaturedEvents()

    const path=events.map(event =>({params: {eventId: event.id} }))

    return {
        paths: path,
        fallback: true
    }
}