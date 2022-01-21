import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { fetchCampground } from "../../utils/campFetch"
import { addFavoriteCampGround } from "../../utils/favoritesFetch";

export default function CampDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [facilityID, setFacilityID] = useState('');
    const [description, setDescription] = useState('');
    const [directions, setDirections] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [reservable, setReservable] = useState(false);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)
        const loadCampground = async () => {
            const campground = await fetchCampground(id);
            setFacilityID(campground.facilityID);
            setName(campground.facilityName);
            const description = campground.facilityDescription.replace(/(&nbsp;|<([^>]+)>)/ig, "");
            setDescription(description);
            setDirections(campground.facilityDirections);
            setEmail(campground.facilityEmail);
            setPhone(campground.facilityPhone);
            setReservable(campground.reservable);
            setImages(campground.imageArray);
            setTimeout(()=> {
                setLoading(false);
            }, 2000)
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
    await addFavoriteCampGround(favoriteCampGround)
    navigate('/profile')
  }
    if (loading) return <h1>Loading. . . 🌎</h1>
    return (
        <>
            <div className='camp-detail-container'>
                <button className='favorites-btn' onClick={handleAddFavoriteCampGround}>Save Your Next Adventure</button>
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
                <p className='camp-reservable'>Reservations are required</p>
                }
                {!reservable && 
                <p className='camp-reservable'>Reservations unavailable</p>
                }
                {images.map(image => {
                    return (
                        <div className='camp-img-container' key={image}>
                    <img className='camp-img' key={image} src={image} alt={name} /></div>)
                })}
            </div>
        </>
    )
}
