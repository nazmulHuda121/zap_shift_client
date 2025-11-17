import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
  const { userName, user_photoURL, ratings, review: reviewText, date } = review;

  // Format date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  // Function to show star rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(ratings);
    const hasHalfStar = ratings % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }

    while (stars.length < 5) {
      stars.push(<FaRegStar key={stars.length} className="text-gray-300" />);
    }
    return stars;
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-5 flex flex-col gap-4 hover:shadow-lg duration-200 min-h-65">
      {/* Top section: Avatar + Name + Date */}
      <div className="flex items-center gap-4">
        <img
          src={user_photoURL}
          alt={userName}
          className="h-14 w-14 rounded-full object-cover border"
        />
        <div>
          <h3 className="text-lg font-semibold">{userName}</h3>
          <p className="text-sm text-gray-500">{formattedDate}</p>
        </div>
      </div>

      {/* Rating Stars */}
      <div className="flex text-yellow-500 text-lg">{renderStars()}</div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed">{reviewText}</p>
    </div>
  );
};

export default ReviewCard;
