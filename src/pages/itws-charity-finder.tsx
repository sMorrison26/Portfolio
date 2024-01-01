import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/CharityFinder.module.css'
import $ from 'jquery'

const CharityFinder: React.FC = () => {
  const [charities, setCharities] = useState({
    "International Needs": [],
    "Domestic Needs": [],
    Medical: [],
    Environment: [],
    Religious: [],
    Health: [],
    Youth: [],
  });

  //hide on load
  const resetDivs = () => {
    //find the anchor tag with the active class and remove it
    $("#nav button").each(function () {
      if ($(this).hasClass("active")) {
        $(this).css("background", "#fcf6f6");
        $(this).removeClass("active");
      }
    });
    // hide all of the divs
    $("#main div").each(function () {
      $(this).hide();
    });
    $("div").each(function () {
      $(this).removeClass("activeDiv");
    });
  };
  //Load the json file into the main div
  const loadDiscover = async () => {
    try {
      const encodedPath = btoa("/assets/text/team4.json");
      const apiUrl = `api/getJson?path=${encodedPath}`;
      const response = await fetch(apiUrl);
      const responseData = await response.json();

      const charityGroups = {
        "International Needs": [],
        "Domestic Needs": [],
        Medical: [],
        Environment: [],
        Religious: [],
        Health: [],
        Youth: [],
      };

      responseData.Charity.forEach(
        (charity: { type: string; rank: number }) => {
          if (
            charity.type != "International Needs" &&
            charity.type != "Domestic Needs" &&
            charity.type != "Medical" &&
            charity.type != "Environment" &&
            charity.type != "Religious" &&
            charity.type != "Health" &&
            charity.type != "Youth"
          ) {
            console.log(charity.type + " rank: " + charity.rank);
          }
          charityGroups[charity.type].push(charity);
        },
      );

      setCharities(charityGroups);
    } catch (error) {
      console.error("There was a problem:", error);
    }
  };
  //loads all of the charities into divs containing their respective type
  const loadActiveDiv = () => {
    $(".activeDiv").each(function () {
      $(this).show();
    });
  };

  const hideAllDiscover = () => {
    $("#Discover div").each(function () {
      $(this).hide();
    });
    $("#SortButtons").show();
  };

  const handleTabClick = (tab: string) => {
    resetDivs();

    $("#" + tab + "Link").addClass("active");
    $("#" + tab + "Link").css("background-color", "rgb(119, 211, 211)");
    $("#" + tab).addClass("activeDiv");
    $("#" + tab + " div").each(function () {
      $(this).addClass("activeDiv");
    });
    loadActiveDiv();
  };

  const handleSortClick = (category: string) => {
    hideAllDiscover();
    if (category != "Discover") {
      $("#Discover").show();
      $("#" + category).show();
    }
    $("#" + category + " div").each(function () {
      $(this).show();
    });
  };
  useEffect(() => {
    resetDivs();
    loadDiscover();
    // handleTabClick('Discover');
  }, []);

  return (
    <>
      <div className={styles.itwsCharityFinder}>
        <div id="head" className={styles.Head}>
          <Image
            src="/assets/images/smile.webp"
            alt="smileyface"
            height={35}
            width={35}
            className="h-auto max-w-full mr-4"
          />
          <h1>Charity Finder</h1>
        </div>
        <div id="nav" className={styles.nav}>
          <button id="DiscoverLink" onClick={() => handleTabClick("Discover")}>
            Discover
          </button>
          <button
            id="TopCharitiesLink"
            onClick={() => handleTabClick("TopCharities")}
          >
            Top Charities
          </button>
          <button id="HelpLink" onClick={() => handleTabClick("Help")}>
            Help
          </button>
          <button id="AboutLink" onClick={() => handleTabClick("About")}>
            About
          </button>
        </div>
        <div id="main">
          <div id="Discover">
            <div id="SortButtons" className={`${styles.SortButtons}`}>
              <button
                id="Allbtn"
                className={styles.sort}
                onClick={() => handleSortClick("Discover")}
              >
                All
              </button>
              <button
                id="INbtn"
                className={styles.sort}
                onClick={() => handleSortClick("InternationalNeeds")}
              >
                International Needs
              </button>
              <button
                id="DNbtn"
                className={styles.sort}
                onClick={() => handleSortClick("DomesticNeeds")}
              >
                Domestic Needs
              </button>
              <button
                id="Mbtn"
                className={styles.sort}
                onClick={() => handleSortClick("Medical")}
              >
                Medical
              </button>
              <button
                id="Ebtn"
                className={styles.sort}
                onClick={() => handleSortClick("Environment")}
              >
                Environmental
              </button>
              <button
                id="Rbtn"
                className={styles.sort}
                onClick={() => handleSortClick("Religious")}
              >
                Religious
              </button>
              <button
                id="Ybtn"
                className={styles.sort}
                onClick={() => handleSortClick("Youth")}
              >
                Youth
              </button>
            </div>
            {Object.keys(charities).map((type) => (
              <div
                key={type}
                id={type.replace(" ", "")}
                className="flex flex-col justify-center items-center"
              >
                <h2 className="font-bold m-4">{type}</h2>
                {charities[type].map((charity) => (
                  <div
                    key={charity.name}
                    className={`${styles.charity} mx-auto my-4`}
                  >
                    <h3>{charity.name}</h3>
                    <p>Type: {charity.type}</p>
                    <p>
                      Link:{" "}
                      <a href={charity.url} target="_blank" rel="noopener noreferrer">
                        {charity.name}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div id="TopCharities" className={styles.TopCharities}>
            <h2>Top 5 Charities (Ranked by Forbes)</h2>
            <p className={`${styles.charity} flex flex-col items-center`}>
              <a href="https://www.unitedway.org/">
                <Image
                  src="/assets/images/unitedway.webp"
                  alt="United Way"
                  height={115}
                  width={250}
                  className="h-auto max-w-full"
                />
              </a>
              <br />
              United Way is an international network of over 1,800 local
              nonprofit fundraising affiliate
              <br />
              Rank: 1<br />
              Type: Domestic Needs
            </p>
            <br />
            <br />
            <p className={`${styles.charity} flex flex-col items-center`}>
              <a href="https://www.feedingamerica.org/">
                <Image
                  src="/assets/images/feedingamerica.webp"
                  alt="Feeding America"
                  height={115}
                  width={250}
                  className="h-auto max-w-full"
                />
              </a>
              <br />
              Feeding America is a United States based nonprofit organization
              that works with food banks to feed more than 46 million people
              <br />
              Rank: 2<br />
              Type: Domestic Needs
            </p>
            <br />
            <br />
            <p className={`${styles.charity} flex flex-col items-center`}>
              <a href="https://www.salvationarmy.org">
                <Image
                  src="/assets/images/salvationarmy.webp"
                  alt="Salvation Army"
                  height={115}
                  width={250}
                  className="h-auto max-w-full"
                />
              </a>
              <br />
              The Salvation Army, an international movement, is an evangelical
              part of the universal Christian Church
              <br />
              Rank: 3<br />
              Type: Domestic Needs
            </p>
            <br />
            <br />
            <p className={`${styles.charity} flex flex-col items-center`}>
              <a href="https://www.stjude.org">
                <Image
                  src="/assets/images/saintjude.webp"
                  alt="Saint Jude"
                  height={115}
                  width={250}
                  className="h-auto max-w-full"
                />
              </a>
              <br />
              St. Jude Childrens Research Hospital works on prevention of
              children&apos;s catastrophic diseases, particularly leukemia and
              other cancers
              <br />
              Rank: 4<br />
              Type: Medical
            </p>
            <br />
            <br />
            <p className={`${styles.charity} flex flex-col items-center`}>
              <a href="https://www.directrelief.org">
                <Image
                  src="/assets/images/directrelief.webp"
                  alt="Direct Relief"
                  height={115}
                  width={250}
                  className="h-auto max-w-full"
                />
              </a>
              <br />
              Direct Relief is a nonprofit humanitarian organization that
              provides emergency medical assistance and disaster relief in the
              United States and internationally
              <br />
              Rank: 5<br />
              Type: International Needs
            </p>
            <br />
            <br />
            <br />
          </div>
          <div id="Help" className={styles.Help}>
            <h2>Stuck?</h2>
            <p>
              <strong>1.</strong> Think of what category of charity you would
              like to donate to
              <br />
              <strong>2.</strong> Either use the Top Charities tab or use the
              Discover tab
              <br />
              <strong>3.</strong> If Top Charities used: search through our
              chosen top 5 charities then click and explore to find the one that
              fits your needs
              <br />
              <strong>4.</strong> If Discover Charities used: click the category
              button that matches what you want and then look through the listed
              Charites and see what you like
              <br />
              <strong>5.</strong> Finally, click the link on the charity and
              start donating!
              <br />
            </p>
          </div>
          <div id="About" className={styles.About}>
            <h2>About Us</h2>
            <p>
              Our Charity Finder is a search engine similar to google, but
              specifically for charities! As the internet is complex, we aim to
              provide all the resources necessary available for our users,
              allowing them to find the charity they want to donate to. This
              website was created by three ITWS students at RPI: Sean Morrison,
              Finn Holohan, and Chris Choi.
            </p>
            <div className="flex justify-between mx-auto w-3/5 mt-4">
              <a href="https://www.linkedin.com/in/sean-morrison-2a7201217/">
                <Image
                  src="/assets/images/sean.webp"
                  alt="Sean Morrison"
                  width={145}
                  height={175}
                  className="h-auto max-w-full"
                />
              </a>
              <a href="https://www.linkedin.com/in/finley-holohan-337386251/">
                <Image
                  src="/assets/images/finn.webp"
                  alt="Finn Holohan"
                  width={145}
                  height={175}
                  className="h-auto max-w-full"
                />
              </a>
              <a href="https://www.linkedin.com/in/chris-choi-906844251/">
                <Image
                  src="/assets/images/chris.webp"
                  alt="Chris Choi"
                  width={145}
                  height={175}
                  className="h-auto max-w-full"
                />
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div id="foot" className={styles.foot}>
          <p>RPI - Intro to ITWS - Team 4</p>
        </div>
      </div>
    </>
  );
};

export default CharityFinder;
