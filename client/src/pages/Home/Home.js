import "./Home.css";
import Cards from "../../components/Cards/Cards"
import { categories, shuffleCategories, topicsData } from "../../utils/randomCats";
import Topics from "../../components/Topics/Topics";
import {Link} from 'react-router-dom';

const Home = ({setIsOn}) => {
  const {one, two} = shuffleCategories(categories);
  setIsOn('no');
  return (
    <main className="Home">
      <section className="top">
       <div className="container">
          <div className="view-left">
            <img className="profile" src="https://cdn2.iconfinder.com/data/icons/scenarium-vol-4/128/013_avatar_king_royal_user_profile_account_crown-64.png" alt="User Profile"/>
            <div className="hello">
              <p>Hello, Jubemi</p>
              <p>Let's start your quiz now!</p>
            </div>
          </div>
          <div className="notification">
            <img src="https://cdn1.iconfinder.com/data/icons/ui-set-6/100/Notification-64.png" alt="Notification Bell" /><span>1</span>
          </div>
       </div>
        <div className="card-1"><Cards text={one}/></div>
        <div className="card-2"><Cards text={two}/></div>
      </section>
      <section className="bottom">
        <div className="container">
          <h2>Pick a topic</h2>
          <div className="topics">
            {
              topicsData.map((topic, index) =>(
                <Link to={`/questions/${topic.topic}`}>
                  <Topics key={index} t={topic.topic} d={topic.description} i={topic.image}/>
                </Link>
                ))
            }
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home