import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../component/events/event-list";
import { getFilteredEvents } from "../../helpers/api-util";
function FilterEventPage(props){
    const router= useRouter()
      const {events}=props
      if (!events || events==='') {
        <p>no found</p>
      }
    return <Fragment>
        <EventList items={events}/>
    </Fragment>
}

export default FilterEventPage

export async function getServerSideProps(context){
  const {params}= context
  const slug =params.slug
  const year=+slug[1]
    const month=+slug[0]

    const events= await getFilteredEvents({'year': year , 'month': month})
  return {
      props:{
          events: events
      }
  }
}