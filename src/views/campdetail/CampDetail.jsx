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
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{directions}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{reservable}</p>
            {images.map(image => {
                return <img key={image} src={image} alt={name} />
            })}
        </>
    )
}
