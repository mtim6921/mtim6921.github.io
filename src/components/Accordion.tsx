import { useState } from "react";
import css from "./Accordion.module.css";
import classNames from "classnames";
import { HiLocationMarker, HiLink } from "react-icons/hi";
interface Data {
  title: string;
  paragraph: string;
  period: string[];
  location: string;
  url: string;
  technologies: string[];
  logo: string;
}
interface AccordionInterface {
  data: Data[];
}
export default function Accordion({ data }: AccordionInterface) {
  const [opened, setOpened] = useState<undefined | number>(0);

  return (
    <div className={css.wrapper}>
      <ul className={css.accordionList}>
        {data.map((d, key) => {
          return (
            <li
              onClick={() =>
                key !== opened ? setOpened(key) : setOpened(undefined)
              }
              className={css.accordionList__item}
              key={key}
            >
              <AccordionItem i={key} opened={opened} data={d} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
interface AccordionProps {
  data: Data;
  opened: number | undefined;
  i: number;
}
export function AccordionItem({ data, opened, i }: AccordionProps) {
  const { period, location, paragraph, title, url, technologies, logo } = data;
  return (
    <div
      className={classNames(
        css.accordionItem,
        opened === i ? css.accordionItemOpened : css.accordionItemClosed
      )}
    >
      <div className={css.accordionItem__line}>
        <h3 className={css.accordionItem__title}>
          {title}{" "}
          <span
            className={css.accordionItem__title__period}
          >{`${period[0]} - ${period[1]}`}</span>
        </h3>
        <span className={css.accordionItem__icon} />
      </div>
      <div className={css.accordionItem__inner}>
        <div className={css.accordionItem__content}>
          <div className={css.details}>
            <span>
              <HiLocationMarker />
              {location}
            </span>
            <span>
              <HiLink />
              <a className={css.link} target="_blank" href={url}>
                Visit Website
              </a>
            </span>
          </div>
          <div className={css.paragraphContainer}>
            <p className={css.accordionItem__paragraph}>{paragraph}</p>
            <img src={logo} alt="Logo" />
          </div>

          <div className={css.technologyContainer}>
            {technologies.map((t, i) => (
              <span className={"technology"}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
