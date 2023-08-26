import { useState } from "react";
import styles from "./components/MagicEightBall.module.css";

const App = () => {
  const [question, setQuestion] = useState(""); // empty string is false aka falsy
  const [response, setResponse] = useState(""); // empty string is false aka falsy
  const [thinking, setThinking] = useState(false);
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  const handleInputChange = (event) => {
    setQuestion(event.target.value);
  };
  //  you can also just write e instead of event above for shorthand

  const handleResponse = () => {
    if (question.trim() !== "") {
      // trim takes question and trims it so the spaces dont count anymore. All thats left if the text in the box. sSo the box cant be empty spaces. The trim is get rid of all the white space. This says, if question is not empty, run this code. You could also say if trim is equal to not zero, run this code.
      setResponse(null); // this set response null is if the question is asked a second time, the original answer disappears
      setThinking(true);
      setTimeout(() => {
        //this timeout makes the response not immediate so the eight ball can think
        console.log("Question asked, add response");
        const randomIndex = Math.floor(Math.random() * responses.length);
        console.log(randomIndex);
        setResponse(responses[randomIndex]);
        setThinking(false);
      }, 1000); // 1000 is milliseconds, and equals one second
    }
  };

  return (
    <div className={styles.magicEightBallContainer}>
      <div className={styles.magicEightBall} onClick={handleResponse}>
        Ask
      </div>
      <input
        type="text"
        placeholder="Ask your question..."
        value={question}
        onChange={handleInputChange}
      />
      {thinking && <p>Pondering your question...</p>}
      {response && <p className={ styles.responseText }>{response}</p>}
      {/* the p class name connects to our CSS */}
    </div>
  );
};



export default App;
