import Translations from "../data/translations";

export default function GetCategoryString(numb: number): string {
  const translation = Translations();
  if (numb === 0) return `${translation.budgetClass}`;
  else if (numb === 1) return `${translation.mediumClass}`;
  else if (numb === 2) return `${translation.higherClass}`;
  else return `${translation.luxuryClass}`;
}
