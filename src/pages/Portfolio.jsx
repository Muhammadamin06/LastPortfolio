import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TNW from "../images/TNW.png";
import nike from "../images/nike.png";
import grayson from "../images/grayson.png";
import gotrip from "../images/gotrip.png";
import openshop from "../images/openshop.png";
import ciniphile from "../images/ciniphile.png";
import portfolio from "../images/portfolio.png";
import silver from "../images/silver.png";
import tatembo from "../images/tatembo.png";
import airpods from "../images/airpods.png";
import vue from "../images/vueCinema.png";
import todolist from "../images/todolist.png";
import weather from "../images/weather.png";
import calculator from "../images/calculator.avif";
import quiz from "../images/Quiz.png";
import Box from "../components/Box";

const data = {
  sites: [
    {
      id: 1,
      title: "The news website",
      image: TNW,
      url: "https://muhammadamin06.github.io/The-news-website/",
    },
    {
      id: 2,
      title: "Nike",
      image: nike,
      url: `https://muhammadamin06.github.io/Nike/`,
    },
    {
      id: 3,
      title: "Grayson",
      image: grayson,
      url: `https://muhammadamin06.github.io/grayson/`,
    },
    {
      id: 4,
      title: "Go Trip",
      image: gotrip,
      url: `https://muhammadamin06.github.io/project/`,
    },
    {
      id: 5,
      title: "Open Shop",
      image: openshop,
      url: `https://muhammadamin06.github.io/OpenShop/`,
    },
    {
      id: 6,
      title: "Cinephile",
      image: ciniphile,
      url: "https://cinephile-by-abdullayev.netlify.app/",
    },
    {
      id: 7,
      title: "Portfolio",
      image: portfolio,
      url: `https://skeletonportfolioforjob.netlify.app`,
    },
    {
      id: 8,
      title: "Silver",
      image: silver,
      url: `https://muhammadamin06.github.io/Silver/`,
    },
    {
      id: 9,
      title: "Tatembo",
      image: tatembo,
      url: `https://muhammadamin06.github.io/totembo/`,
    },
    {
      id: 10,
      title: "Airpods",
      image: airpods,
      url: `https://muhammadamin06.github.io/Airpods/`,
    },
    {
      id:11,
      title:"Vue Cinema",
      image:vue,
      url:`https://muhammadamin06.github.io/Vue-cinema/`
    }
  ],
  apps: [
    {
      id: 12,
      title: "Todo List",
      image: todolist,
      url: `https://todo-list-by-netlify.netlify.app/`,
    },
    {
      id: 13,
      title: "Weather",
      image: weather,
      url: `https://byabdullayev-weather.netlify.app/`,
    },
    {
      id: 14,
      title: "sekundomer",
      image: calculator,
      url: `https://muhammadamin06.github.io/Clock-timer/`,
    },
    {
      id: 15,
      title: "Quiz",
      image: quiz,
      url: `https://simple-react-quiz2023.netlify.app/`,
    },
  ],
};

function Portfolio() {
  return (
    <div className="portfolio">
      <TypeAnimation
        sequence={["Portfolio", 1000]}
        speed={1}
        className="title"
      />
      <div className="portfolio__block">
        <h3 className="box-title">
          Gallery <span></span>
        </h3>
        <Tabs
          defaultActiveKey="all"
          id="uncontrolled-tab-example"
          className="portfolio__tabs"
        >
          <Tab eventKey="all" title="All">
            <div className="portfolio__box">
              {data.sites.map((site) => (
                <Box
                  key={site.id}
                  image={site.image}
                  title={site.title}
                  url={site.url}
                />
              ))}
              {data.apps.map((site) => (
                <Box
                  key={site.id}
                  image={site.image}
                  title={site.title}
                  url={site.url}
                />
              ))}
            </div>
          </Tab>
          <Tab eventKey="application" title="Web-Applications">
            <div className="portfolio__box">
              {data.apps.map((site) => (
                <Box
                  key={site.id}
                  image={site.image}
                  title={site.title}
                  url={site.url}
                />
              ))}
            </div>
          </Tab>
          <Tab eventKey="sites" title="Web-Sites">
            <div className="portfolio__box">
              {data.sites.map((site) => (
                <Box
                  key={site.id}
                  image={site.image}
                  title={site.title}
                  url={site.url}
                />
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Portfolio;
