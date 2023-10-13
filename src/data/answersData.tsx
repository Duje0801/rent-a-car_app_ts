import Translations from "./translations";
import { Translate } from "../interfaces/interfaces";

export default function QuestionsData() {
  const translations: Translate = Translations();

  return [
    translations.answer1,
    translations.answer2,
    translations.answer3,
    translations.answer4,
  ];
}
