import { useState } from "react";
import "./Feedback.css";
import MyButton from "../../components/myButton/MyButton";

const Feedback = () => {
     const [likes, setLikes] = useState(0);
     const [dislikes, setDislikes] = useState(0);

     const handleLike = () => setLikes(prev => prev +1);

     const handleDislike = () => setDislikes(prev => prev +1);

     const handleReset = () => {
          setLikes(0);
          setDislikes(0);
     };
     return (
          <div className="feedback-container">
          <div className="like-section">
        <span className="count">{likes}</span>
     <MyButton text="Like" onClick={handleLike}></MyButton>
        </div>
        <div className="dislike-section">
     <MyButton text="DisLike" onClick={handleDislike}></MyButton>
          <span className="count">{dislikes}</span>
        </div>
        <div className="reset-section">
        <MyButton text="Reset Results" onClick={handleReset}></MyButton>
      </div>
       </div>
     );

}

export default Feedback;
