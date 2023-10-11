import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = ({text}) => {
  return (
   <Link to={`/questions/${text}`}>
      <div className="Cards"
        style={{backgroundImage: 
            text === 'geology' ? `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url('https://img.freepik.com/free-photo/3d-rendering-planet-earth_23-2150498436.jpg?size=626&ext=jpg&ga=GA1.2.1632376246.1695761626&semt=sph')`:
            text === 'science' ? `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url('https://img.freepik.com/free-vector/science-lab-objects_23-2148488312.jpg?size=626&ext=jpg&ga=GA1.1.1632376246.1695761626&semt=sph')`:
            text === 'history' ? `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url('https://img.freepik.com/free-photo/vintage-marine-still-life-close-up_93675-128574.jpg?size=626&ext=jpg&ga=GA1.1.1632376246.1695761626&semt=sph')`:
            text === 'animals' ? `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url('https://img.freepik.com/free-vector/different-kinds-animals-collection_1308-103560.jpg?size=626&ext=jpg&ga=GA1.1.1632376246.1695761626&semt=sph')`:
            text === 'general 1' ? `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url('https://img.freepik.com/premium-photo/flat-lay-various-business-icons-desk-created-with-generative-ai_419341-34867.jpg?size=626&ext=jpg&ga=GA1.2.1632376246.1695761626&semt=ais')`:
            text === 'general 2' ? `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url('https://img.freepik.com/premium-vector/corrugated-carton-box-with-many-shopping-product-floating_37787-805.jpg?size=626&ext=jpg&ga=GA1.2.1632376246.1695761626&semt=ais')`:
            text === 'HTML & CSS' ? `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url('https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?size=626&ext=jpg&ga=GA1.2.1632376246.1695761626&semt=ais')`:
            text === 'football' ? `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url('https://img.freepik.com/free-vector/soccer-ball-net-pictogram_1284-11698.jpg?size=626&ext=jpg&ga=GA1.1.1632376246.1695761626&semt=sph')`:
            text === 'movies' ? `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url('https://images.pexels.com/photos/7991382/pexels-photo-7991382.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load')`:
            text === 'literature' ? `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url('https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&w=400')`:
            text === 'sports' ? `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url('https://images.pexels.com/photos/1080884/pexels-photo-1080884.jpeg?auto=compress&cs=tinysrgb&w=400')`:
            text === 'travel' ? `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url('https://images.pexels.com/photos/17636489/pexels-photo-17636489/free-photo-of-man-in-hat-and-with-backpack-standing-with-hills-behind.jpeg?auto=compress&cs=tinysrgb&w=400')`:
            text === 'invention' ? `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url('https://images.pexels.com/photos/3861442/pexels-photo-3861442.jpeg?auto=compress&cs=tinysrgb&w=400')`:
            text === 'javascript' ? `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url('https://img.freepik.com/free-vector/hand-coding-concept-illustration_114360-8193.jpg?size=626&ext=jpg&ga=GA1.1.1632376246.1695761626&semt=sph')`:
            `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),url('x')`
        }}
        
        >
        <p id="white">{text}</p>
      </div>
   </Link>
  )
}

export default Cards