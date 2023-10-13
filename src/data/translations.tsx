import { useContext } from "react";
import { AppContext } from "../context/context";
import { Translate } from "../interfaces/interfaces";

function Translations(): Translate {
  const { language } = useContext(AppContext);

  let translations: Translate;

  if (language === `en`)
    translations = {
      home: `Home`,
      fleet: `Fleet`,
      locations: `Locations`,
      aboutUs: `About us`,
      FAQ: `FAQ`,
      contact: `Contact`,
      pickUpError: `Pick-up location must be selected`,
      dropOffError: `Drop-Off location must be selected`,
      timelineError: `Drop-off time must be after pick-up time`,
      afterYear: `Please choose closer dates`,
      pickUpLocation: `Pick-up place`,
      dropOffLocation: `Drop-Off place`,
      pickupDateAndTime: `Pick-up date and time`,
      dropofDateAndTime: `Drop-off date and time`,
      showCars: `Search`,
      ourFleet: `Check out our fleet!`,
      seeMore: `See More`,
      exploreTitle: `Explore Croatia with "Oldtimer" rent-a-car`,
      testimotionalsTitle: `What people say about us`,
      HQadress: `HQ Adress: Splitska 1, 21000 Split, Croatia`,
      bussinesHours: `Business hours:`,
      bussinesHours2: `Monday - Sunday: 08:00 AM - 08:00 PM`,
      from: `From`,
      brand: `Brand`,
      power: `Power`,
      engine: `Engine`,
      year: `Year`,
      day: `Day`,
      chat1: `How can we help you?`,
      chat2: `We will answer as soon as possible, thanks.`,
      back: `Back`,
      selectCarClass: `Select car class`,
      carDetails: `Car details`,
      basicInsurance: `Basic insurance`,
      fullPrice: `Full price`,
      theftProtection: `Theft protection`,
      includedPackage: `Included package`,
      additionalPackage: `Additional package`,
      unlimited: `Unlimited`,
      fullInsurance: `Full insurance`,
      include: `Include`,
      addDriver: `Additional driver`,
      crossBorder: `Cross border`,
      confirm: `Confirm`,
      higherPrice: `Due to different pick-up and drop-off locations, the price is 25% higher.`,
      checkReservation: `Check if the reservation is correct?`,
      yesConfirm: `Yes, confirm my reservation`,
      yes: `Yes`,
      no: `No`,
      thanks: `Thank you for choosing Oldtimer Rent-a-car!`,
      goBack: `Go back to home page`,
      class: `Class`,
      typeMessage: `Type message...`,
      budgetClass: `Budget class`,
      mediumClass: `Medium class`,
      higherClass: `Higher class`,
      luxuryClass: `Luxury class`,
      aboutUs1: `Oldtimer Rent-A-Car is a Croatian car rental company that was founded in 2015
      with its first location in Split.`,
      aboutUs2: `The company specializes in providing classic and vintage
      cars for rental, catering to customers who are looking for a unique driving experience on
      the scenic roads of Croatia.`,
      aboutUs3: `Since its inception, Oldtimer Rent-A-Car has expanded to five locations throughout Croatia,
      including Dubrovnik, Zagreb, Zadar, and Pula.`,
      aboutUs4: `The company's fleet of well-maintained classic
      cars and professional customer service has made it a popular choice for both tourists and
      locals looking to explore Croatia in style.`,
    };
  else
    translations = {
      home: `Početna`,
      fleet: `Vozila`,
      locations: `Lokacije`,
      aboutUs: `O nama`,
      FAQ: `Pitanja`,
      contact: `Kontakt`,
      pickUpError: `Lokacija preuzimanja mora biti odabrana`,
      dropOffError: `Lokacija vraćanja mora biti odabrana`,
      timelineError: `Vrijeme vraćanja mora biti nakon vremena preuzimanja`,
      afterYear: `Molimo izaberite bliže datume`,
      pickUpLocation: `Mjesto preuzimanja`,
      dropOffLocation: `Mjesto vraćanja`,
      pickupDateAndTime: `Vrijeme preuzimanja`,
      dropofDateAndTime: `Vrijeme vraćanja`,
      showCars: `Pretraži`,
      ourFleet: `Provjerite našu flotu!`,
      seeMore: `Saznaj više`,
      exploreTitle: `Istražite Hrvatsku s "Oldtimer" rent-a-carom`,
      testimotionalsTitle: `Što korisnici kažu o nama`,
      HQadress: `Centrala: Splitska 1, 21000 Split, Hrvatska`,
      bussinesHours: `Radno vrijeme:`,
      bussinesHours2: `Ponedjeljak - Nedjelja: 08:00 - 20:00`,
      from: `Od`,
      brand: `Proizvođač`,
      power: `Snaga`,
      engine: `Gorivo`,
      year: `Godište`,
      day: `Dan`,
      chat1: `Kako vam možemo pomoći?`,
      chat2: `Odgovorit ćemo Vam što je prije moguće, hvala.`,
      back: `Natrag`,
      selectCarClass: `Izaberite klasu`,
      carDetails: `Detalji automobila`,
      basicInsurance: `Osnovno osiguranje`,
      fullPrice: `Cijena`,
      theftProtection: `Zaštita od krađe`,
      includedPackage: `Uključeno u paket`,
      additionalPackage: `Dodatni paket`,
      unlimited: `Neograničeno`,
      fullInsurance: `Puno osiguranje`,
      include: `Uključi`,
      addDriver: `Dodatni vozač`,
      crossBorder: `Prelezak granice`,
      confirm: `Potvrdi`,
      higherPrice: `Zbog različitih lokacija preuzimanja i vraćanja cijena je 25% viša.`,
      checkReservation: `Provjerite je li rezervacija ispravna`,
      yesConfirm: `Da, potvrdi moju rezervaciju`,
      yes: `Da`,
      no: `Ne`,
      thanks: `Hvala što ste odabrali Oldtimer rent-a-car!`,
      goBack: `Vrati se na početnu stranicu`,
      class: `Klasa`,
      typeMessage: `Napišite poruku...`,
      budgetClass: `Budžet klasa`,
      mediumClass: `Srednja klasa`,
      higherClass: `Viša klasa`,
      luxuryClass: `Luksuzna klasa`,
      aboutUs1: `Oldtimer Rent-A-Car je tvrtka za iznajmljivanje automobila osnovana 2015. Splitu.`,
      aboutUs2: `Tvrtka je specijalizirana za iznajmljivanje oldtimer automobila 
      kupcima koji traže jedinstveno iskustvo vožnje cestama Hrvatske.`,
      aboutUs3: `Od svog osnutka Oldtimer Rent-A-Car proširio se na ukupno pet lokacija diljem Hrvatske.
      Osim početne lokacije u Splitu, tvrtka posluje i u Dubrovniku, Zagrebu, Zadru i Puli.
      `,
      aboutUs4: `Osim dobro održavanih oldtimer
      automobila u tvrtki radi i profesionalna služba za korisnike koja je "Oldtimer" Rent-a-car učinila 
      popularnim izborom i za turiste i za lokalno stanovništvo koje želi istražiti Hrvatsku sa stilom.
      `,
    };

  return translations;
}

export default Translations;
