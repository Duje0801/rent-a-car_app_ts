export interface ReservationDetails {
  pickUpTime: Date;
  dropOffTime: Date;
  pickUpLocation: string;
  dropOffLocation: string;
  addPackage: boolean;
  addDriver: boolean;
  crossBorder: boolean;
  category: number;
}

export interface Cities {
  name: string;
  adress: string;
  link: JSX.Element;
}

export interface Cars {
  img: string;
  category: string;
  make: string;
  model: string;
  year: number;
  engine: string;
  power: number;
  price: number;
}

export interface Testimotionals {
  name: string;
  age: number;
  country: string;
  text: string;
}

export interface Explore {
  text: string;
  img: string;
}

export interface Translate {
  home: string;
  fleet: string;
  locations: string;
  aboutUs: string;
  FAQ: string;
  contact: string;
  pickUpError: string;
  dropOffError: string;
  timelineError: string;
  afterYear: string;
  pickUpLocation: string;
  dropOffLocation: string;
  pickupDateAndTime: string;
  dropofDateAndTime: string;
  showCars: string;
  ourFleet: string;
  seeMore: string;
  exploreTitle: string;
  testimotionalsTitle: string;
  HQadress: string;
  bussinesHours: string;
  bussinesHours2: string;
  from: string;
  brand: string;
  power: string;
  engine: string;
  year: string;
  day: string;
  chat1: string;
  chat2: string;
  back: string;
  selectCarClass: string;
  carDetails: string;
  basicInsurance: string;
  fullPrice: string;
  theftProtection: string;
  includedPackage: string;
  additionalPackage: string;
  unlimited: string;
  fullInsurance: string;
  include: string;
  addDriver: string;
  crossBorder: string;
  confirm: string;
  higherPrice: string;
  checkReservation: string;
  yesConfirm: string;
  yes: string;
  no: string;
  thanks: string;
  goBack: string;
  class: string;
  typeMessage: string;
  budgetClass: string;
  mediumClass: string;
  higherClass: string;
  luxuryClass: string;
}
