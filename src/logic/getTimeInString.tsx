import { AppContext } from "../context/context";
import { useContext } from "react";

export default function GetTimeInString(date: Date): string {
  const { language } = useContext(AppContext);

  let minutes: number | string = date.getMinutes();
  let hours: number = date.getHours();
  let day: number = date.getDate();
  let month: number = date.getMonth() + 1;
  let year: number = date.getFullYear();
  let amPm: string;

  if (minutes < 10) minutes = String(minutes).padStart(2, "0");

  if (language === `en`) {
    if (hours < 12) amPm = `AM`;
    else amPm = `PM`;

    if (hours === 0) hours = 12;
    else if (hours > 12) hours -= 12;

    return `${month}/${day}/${year}, ${hours}:${minutes} ${amPm}`;
  } else {
    return `${day}. ${month}. ${year}. ${hours}:${minutes}`;
  }
}
