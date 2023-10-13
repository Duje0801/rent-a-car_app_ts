import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { ReservationDetails } from "../interfaces/interfaces";

interface ContextObject {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  reservation: ReservationDetails | null;
  setReservation: Dispatch<SetStateAction<ReservationDetails | null>>;
  isReservationPage: boolean;
  setIsReservationPage: Dispatch<SetStateAction<boolean>>;
  selectedClass: number;
  setSelectedClass: Dispatch<SetStateAction<number>>;
  messageList: object[];
  setMessageList: Dispatch<SetStateAction<object[]>>;
}

export const AppContext = createContext<ContextObject>({} as ContextObject);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<string>(`en`);
  const [reservation, setReservation] = useState<ReservationDetails | null>(
    null
  );
  const [isReservationPage, setIsReservationPage] = useState<boolean>(false);
  const [selectedClass, setSelectedClass] = useState<number>(2);
  const [messageList, setMessageList] = useState<object[]>([]);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        reservation,
        setReservation,
        isReservationPage,
        setIsReservationPage,
        selectedClass,
        setSelectedClass,
        messageList,
        setMessageList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useCharactersContext = () => useContext(AppContext);
