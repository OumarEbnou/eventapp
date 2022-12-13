export async function getAllEvents(){
    const response= await fetch('https://mizaniya-be857-default-rtdb.europe-west1.firebasedatabase.app/events.json');
    const data= await response.json();
    let events =[];
    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        });
    }

    return events
}

export async function getFeaturedEvents(){
    const getAllEvent= await getAllEvents()

    return getAllEvent.filter((event) => event.isFeatured);
}

export async function getEventById(id){
    const getAllEvent= await getAllEvents()

    return getAllEvent.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
    const getAllEvent= await getAllEvents()
    let filteredEvents = getAllEvent.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
  }