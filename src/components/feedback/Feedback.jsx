import { useState } from "react";
import "./Feedback.css";
import MyButton from "../../components/myButton/MyButton";

function Feedback () {
     const [like, setLikes] = useState(0);
     const [dislike, setDislikes] = useState(0);

     const handleLike = () => setLikes(prev => prev +1);

     const handleDislike = () => setDislikes(prev => prev +1);

     const handleReset = () => {
          setLikes(0);
          setDislikes(0);
     };
     return (
    <div>
      <h1>Feedback 😌</h1>
      <div>
        <span>{like}</span>
        <MyButton text="👍" func={handleLike} />
        <MyButton text="👎" func={handleDislike} />
        <span>{dislike}</span>
      </div>
      <div>
      <MyButton text="Reset Results" func={handleReset} />


      </div>
    </div>
  );

}

export default Feedback;
