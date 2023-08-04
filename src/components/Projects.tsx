import { useEffect, useState } from "react";
import css from "./Projects.module.css";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
enum Category {
  Programming = "programming",
  Video = "video",
  Photo = "photo",
  All = "",
}

export default function Projects() {
  const [view, setView] = useState(false);
  const [category, setCategory] = useState<string>(Category.All);
  const projects = [
    {
      name: "uniify.ai",
      description:
        "A global full-stack web platform that provides an engine to create fully customizable courses, automate the lessons and the flow of the course.",
      category: Category.Programming,
      image: "./src/assets/images/site.png",
      url: "/project-uniify/",
    },
    // {
    //   name: "The Reikan Project",
    //   description:
    //     'Collborated as a photographer/videographer for an online shop brand "The Reikan Project", which included model and product photography as well as promotional instagram reels.',
    //   category: Category.Photo,
    // },
  ];
  return (
    <>
      <h2 className={css.h2Projects} id="projects">
        Featured Projects
      </h2>
      {/* <ul className={css.ulLinks}>
        <li
          className={classNames(
            category === Category.All ? css.active : undefined
          )}
          onClick={() => setCategory(Category.All)}
        >
          All
        </li>
        <li
          className={classNames(
            category === Category.Programming ? css.active : undefined
          )}
          onClick={() => setCategory(Category.Programming)}
        >
          Programming
        </li>
        <li
          className={classNames(
            category === Category.Photo ? css.active : undefined
          )}
          onClick={() => setCategory(Category.Photo)}
        >
          Video/Photo
        </li>
        <li
          className={classNames(view ? css.active : undefined)}
          onClick={() => setView(!view)}
        >
          Switch View
        </li>
      </ul> */}
      <section className={css.projects}>
        {/* <h4>Programming</h4> */}
        {projects.map(
          (p, i) =>
            (category === Category.All || category === p.category) && (
              <CSSTransition
                classNames="fade"
                key={i}
                in={true}
                timeout={500}
                appear={true}
              >
                <div key={i} className={css.projectContainer}>
                  <a
                    className={classNames(
                      i % 2 !== 0 ? css.evenProjectImage : css.oddProjectImage,
                      css.projectImage
                    )}
                    href={p.url}
                  >
                    <img src={p.image} alt="Project Image" />
                  </a>
                  <div
                    className={classNames(
                      i % 2 !== 0
                        ? css.evenProjectParagraph
                        : css.oddProjectParagraph,
                      css.projectParagraph
                    )}
                  >
                    <h4>{p.name}</h4>
                    <p>{p.description}</p>
                  </div>
                </div>
              </CSSTransition>
            )
        )}
      </section>
    </>
  );
}
{
  /* <p>
Worked as a Frontend Developer in a big enterprise scale
applications using React, Typescript and .NET.
<p></p>
<p>
  Built a full-stack web application using React, Node.js, Express
  and MongoDB.
</p>
<h4>Videography/Photography</h4>
<p>
  Collborated as a photographer/videographer for an online shop
  brand "The Reikan Project", which included model and product
  photography as well as promotional instagram reels.
</p>
<p>
  A YouTube channel with cinematic short films, hiking videos and
  various martial art edits and tutorials.
  A full-stack web application. Uniify.ai is a teaching platform that
allows users to create courses, teach existing courses in real time
and enroll in other users courses. The platform provides an engine to
create fully customizable courses, automate the lessons and the flow
of the course. 
</p>
</p> */
}
