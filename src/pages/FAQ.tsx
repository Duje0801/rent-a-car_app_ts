import { useState } from "react";
import Navigation from "../components/navigation";
import Chat from "../components/chat";
import QuestionsData from "../data/questionsData";
import AnswersData from "../data/answersData";
import Translations from "../data/translations";
import frontImg from "../img/frontImg.jpg";
import { Translate } from "../interfaces/interfaces";
import "../style/pages/FAQ.css";

export default function FAQ(): JSX.Element {
  const [showAnswer, setShowAnswer] = useState<number>(-1);

  const questions: string[] = QuestionsData();
  const answers: string[] = AnswersData();
  const translations: Translate = Translations();

  const handleClick = (numb: number): void => {
    if (numb === showAnswer) return setShowAnswer(-1);
    else return setShowAnswer(numb);
  };

  const mappedAnswers = answers.map((answer, i) => {
    if (i === showAnswer) return <div className="FAQAnswer">{answer}</div>;
  });

  const mappedQuestions = questions.map((question, i) => {
    return (
      <div key={i}>
        <div onClick={() => handleClick(i)} className="FAQQuestion">
          {question}
        </div>
        {mappedAnswers[i]}
      </div>
    );
  });

  return (
    <div>
      <div className="frontFAQ">
        <Navigation />
        <img src={frontImg} alt="frontImage" className="frontImageFAQ" />
        <div className="FAQ">
          <div>{translations.FAQ}</div>
          <div>{mappedQuestions}</div>
        </div>
      </div>
      <Chat />
    </div>
  );
}
