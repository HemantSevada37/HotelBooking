import { eachDayOfIntervalWithOptions } from "date-fns/fp";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const pList = [
    {
      city: "New Delhi",
      name: "Aparthotel Stare Miasto",
      price: 12999,
      rating: 8.9,
      comment: "Excellent",
      photo: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
    },
    {
      city: "Chennai",
      name: "Comfort Suites Airport",
      price: 14000,
      rating: 9.3,
      comment: "Exceptional",
      photo: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
    },
    {
      city: "Mumbai",
      name: "Four Seasons Hotel",
      price: 9900,
      rating: 8.2,
      comment: "Excellent",
      photo: "https://r-xx.bstatic.com/xdata/images/city/250x250/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
    },
    {
      city: "Jaipur",
      name: "Hilton Garden Inn",
      price: 10500,
      rating: 9.6,
      comment: "Excellent",
      photo: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
    },
  ]
  return (
    <div className="fp">
      {pList.map((e, i) =>
        <div key={i} className="fpItem">
          <img
            src={e.photo}
            alt=""
            className="fpImg"
          />
          <span className="fpName">{e.name}</span>
          <span className="fpCity">{e.city}</span>
          <span className="fpPrice">Starting from ₹{e.price}</span>
          <div className="fpRating">
            <button>{e.rating}</button>
            <span>{e.comment}</span>
          </div>
        </div>
      )}

    </div>
  );
};

export default FeaturedProperties;
