
import { useRouter } from "next/router";
import EventList from "../../component/events/event-list";
import EventsSearch from "../../component/events/event-search";
import { getAllEvents } from "../../helpers/api-util";

function HomePage(props){

    const events=props.events
    const router= useRouter()

    function onHandel(month,year){
        const route= `/events/${year}/${month}`
        router.push(route)
    }
    console.log(JSON.stringify(events));
    return <div>
            <EventsSearch onSearch={onHandel}/>
            <EventList items={events}/>
        </div>
}

export default HomePage;

export async function getStaticProps(){
    const events= await getAllEvents()

    return {
        props:{
            events: events
        },
        revalidate: 60
    }
}