
import EventList from "../component/events/event-list";
import NewsletterRegistration from "../component/input/newsletter-registration";
import { getAllEvents, getFeaturedEvents } from "../helpers/api-util";
function HomePage(props){
    return <div>
            <NewsletterRegistration/>

            <EventList items={props.events}/>
        </div>
}

export default HomePage;

export async function getStaticProps(){
    const featuredEvents= await getFeaturedEvents()

    return {
        props:{
            events: featuredEvents
        },
        revalidate: 60
    }
}