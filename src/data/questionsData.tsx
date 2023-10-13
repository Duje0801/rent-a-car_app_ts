import Translations from "./translations";
import { Translate } from "../interfaces/interfaces";

export default function QuestionsData() {
  const translations: Translate = Translations();

  return [
    translations.question1,
    translations.question2,
    translations.question3,
    translations.question4,
  ];
}
