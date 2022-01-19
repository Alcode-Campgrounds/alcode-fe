import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchCampground } from "../../utils/campFetch"
import { addFavoriteCampGround } from "../../utils/favoritesFetch";

export default function CampDetail() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [facilityID, setFacilityID] = useState('');
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
            setFacilityID(campground.facilityID);
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

   const handleAddFavoriteCampGround = async (event)=>{
    event.preventDefault()

    const favoriteCampGround = {
        facility_id: facilityID,
        facility_name: name,
        facility_description: description,
        facility_directions: directions,
        facility_phone: phone,
        facility_email: email,
        reservable, 
        images
    }

   const here =  await addFavoriteCampGround(favoriteCampGround)

    console.log('here', here)
   }


    return (
        <>
            <button onClick={handleAddFavoriteCampGround}>Save Your Next Adventure</button>
            <h1>{name}</h1>
            <h3>Description:</h3>
            <p>{description}</p>
            <h3>Directions:</h3>
            <p>{directions}</p>
            <h3>Phone-Number:</h3>
            <p>{phone}</p>
            <h3>Email:</h3>
            <p>{email}</p>
            {reservable && 
            <p>Reservations are required</p>
            }
            {!reservable && 
            <p>Reservations unavailable</p>
            }
            {images.map(image => {
                return <img key={image} src={image} alt={name} />
            })}
        </>
    )
}
