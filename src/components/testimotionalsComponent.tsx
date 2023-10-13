import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TestimonialsData from "../data/testimotionalsData";
import Translations from "../data/translations";
import { Translate, Testimotionals } from "../interfaces/interfaces";
import "../style/components/testimonials.css";

export default function TestimonialsComponent(): JSX.Element {
  //If screen is narrower than 768px, side boxes are hidden

  //Starting three testimonials [left blured, central clear, right blured]
  const [tmToShow, setTmToShow] = useState<number[]>([0, 1, 2]);

  const testimonials: Testimotionals[] = TestimonialsData();
  const translations: Translate = Translations();

  //Sets automatically changing array (testimonials) after 15 sec
  useEffect((): void => {
    setInterval(() => handleMove(`R`), 15000);
  }, []);

  //Changes numbers (testimonials) in array
  const handleMove = (side: string): void => {
    setTmToShow((current: number[]): number[] => {
      if (side === `R`)
        return current.map((el: number): number => {
          if (el === 4) return (el = 0);
          return (el += 1);
        });
      else
        return current.map((el: number): number => {
          if (el === 0) return (el = 4);
          return (el -= 1);
        });
    });
  };

  //Which testimonial to show (comparing three from array with all testimonials)
  const mappedTmToShow = tmToShow.map((el) => {
    for (let i = 0; i < testimonials.length; i++) {
      if (el === i) return testimonials[i];
    }
  });

  //Maps testimonals
  const mappedTestimonials = mappedTmToShow.map((tm, i) => {
    if (tm === undefined) return null;
    else if (i === 1) {
      //If testimonial is central
      return (
        <div className="centralBoxAndArrowsT" key={i}>
          <div className="arrowBoxT">
            <IoIosArrowBack
              onClick={() => handleMove(`L`)}
              className="arrowT"
            />
          </div>
          <div className="boxCentralT" key={i}>
            <div>{tm.text}</div>
            <br></br>
            <div className="boxCustomerInfoT">
              <span>{tm.name} </span>
              <span>({tm.age}), </span>
              <span>{tm.country}</span>
            </div>
          </div>
          <div className="arrowBoxT">
            <IoIosArrowForward
              onClick={() => handleMove(`R`)}
              className="arrowT"
            />
          </div>
        </div>
      );
    }
    //If testimonial is side (left or right, blured)
    else
      return (
        <div className="boxSideT" key={i}>
          <div>{tm.text}</div>
          <br></br>
          <div className="boxCustomerInfoT">
            <span>{tm.name} </span>
            <span>({tm.age}), </span>
            <span>{tm.country}</span>
          </div>
        </div>
      );
  });

  return (
    <div className="tmT">
      <div className="titleT">{translations.testimotionalsTitle}</div>
      <div className="allBoxesT">{mappedTestimonials}</div>
    </div>
  );
}
