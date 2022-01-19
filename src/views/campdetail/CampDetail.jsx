import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchCampground } from "../../utils/campFetch"

export default function CampDetail() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [directions, setDirections] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [reservable, setReservable] = useState(false);
    const [images, setImages] = useState([]);

    
    useEffect(() => {
        const loadCampground = async () => {
            const campground = await fetchCampground(id);
            console.log(campground);
            setName(campground.facilityName);
            setDescription(campground.facilityDescription);
            setDirections(campground.facilityDirections);
            setEmail(campground.facilityEmail);
            setPhone(campground.facilityPhone);
            setReservable(campground.reservable);
            setImages(campground.imageArray);
        }
        loadCampground();
    }, [id])
    return (
        <>
            <div className='camp-detail-container'>
                <h1 className='camp-detail-name'>{name}</h1>
                <h2 className='camp-detail-headings'>Description:</h2>
                <p className='camp-info'>{description}</p>
                <h2 className='camp-detail-headings'>Directions:</h2>
                <p className='camp-info'>{directions}</p>
                <h2 className='camp-detail-headings'>Phone-Number:</h2>
                <p className='camp-info'>{phone}</p>
                <h2 className='camp-detail-headings'>Email:</h2>
                <p className='camp-info'>{email}</p>
                {reservable && 
                <p>Reservations are required</p>
                }
                {!reservable && 
                <p className='camp-info'>Reservations unavailable</p>
                }
                {images.map(image => {
                    return <img key={image} src={image} alt={name} />
                })}
            </div>
        </>
    )
}
