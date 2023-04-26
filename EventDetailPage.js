import { useParams } from 'react-router-dom'

const EventDetailPage = () => {
    const params = useParams();

    return (
        <>
            {params.eventId}
        </>
    );
};

export default EventDetailPage;