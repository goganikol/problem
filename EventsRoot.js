import { Outlet} from 'react-router-dom';

import EventsNavigation from './EventsNavigation'

const EventsRoot = () => {
    return(
        <>
            <main>
                <EventsNavigation />
                <Outlet />
            </main>
        </>
    )
}

export default EventsRoot;