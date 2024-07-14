/** @jsx jsx */
// import hjzWord from '../assets/images/Hjz-word.svg';
import { jsx, Box, Container, Text } from "theme-ui";
// import { useStaticQuery, graphql } from 'gatsby';
import { rgba } from "polished";
// import Img from 'components/image';
import SubscriptionForm from "../components/subscription-form";
// import hjzHeader from '../assets/images/banner02.svg';
import clicknVideo from "../assets/video/homepage-clickn-AI-web.mp4";
import { useState, useEffect } from "react";
// import headerArrow from '../assets/images/headerArrow.svg';
// import headerArrowEn from '../assets/images/headerArrow-en.svg';

// import paypal from 'assets/images/paypal.png';
// import google from 'assets/images/google.png';
// import dropbox from 'assets/images/dropbox.png';
import "../assets/styles/banner.scss";
import { useTranslation } from "react-i18next";
import "../i18n/config";
import { Typewriter } from "react-simple-typewriter";

import React from "react";
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

// Install the modules
// SwiperCore.use([Autoplay, Loop]);
// const logos = [
//   {
//     name: 'Paypal',
//     src: paypal,
//   },
//   {
//     name: 'Google',
//     src: google,
//   },
//   {
//     name: 'Dropbox',
//     src: dropbox,
//   },
// ];
// SwiperCore.use([Loop]);
const Banner = () => {
  const { t, i18n } = useTranslation();
  const phrases = t("Banner-Messages", { returnObjects: true });
  const [key, setKey] = useState(0);
  let language = i18n.language;
  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [language]);
  const icons = [
    "https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png",
    "https://ndf.gov.sa/wp-content/themes/ndf/img/logo.svg",
    "https://ndf.gov.sa/wp-content/themes/ndf/img/vision-2030.svg",
    "https://ksaimg1.b8cdn.com/images/templates/mnsht/mnsht-logo-en.png",
    "https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png",
    "https://ndf.gov.sa/wp-content/themes/ndf/img/logo.svg",
    "https://ndf.gov.sa/wp-content/themes/ndf/img/vision-2030.svg",
    "https://ksaimg1.b8cdn.com/images/templates/mnsht/mnsht-logo-en.png",
  ];

  // const image = useStaticQuery(graphql`
  //   query {
  //     illustration: file(relativePath: { eq: "banner.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <section id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent} style={{ marginTop: "30px" }}>
            <div className="ar">
              <h1 style={{ lineHeight: "0.9" }}>
                <span
                  className="header-font"
                  style={{
                    lineHeight: "0.8",
                    fontSize: "2em",
                    color: "#083c3a",
                  }}
                >
                  {/* {t("hjz")} */}
                </span>
                {/* "ONE-STOP-SHOP":"حول بياناتك الصوتية إلى معلومات مع نماذج الذكاء الاصطناعي الصوتي الرائدة لدينا", */}
                {/* "ONE-STOP-SHOP": "Turn voice data into insights with our leading Speech AI models.", */}
                <span className="sub-header" id="sub-head">
                  {t("ONE-STOP-SHOP")}
                </span>
                <br />
                <span className="sub-header" id="sub-head">
                  <Typewriter
                    key={key}
                    words={[phrases[0], phrases[1], phrases[2]]}
                    loop={true}
                    cursor={true}
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              {/* <hr className="hor-line" /> */}

              <p
                className="hjz-introduction"
                style={{
                  fontSize: "1em",
                  margin: "0",
                  padding: "0px",
                  paddingTop: "10px",
                  lineHeight: "1.5",
                }}
              >
                {" "}
                {t("Description-hjz")}
              </p>
            </div>
            <Text as="p"></Text>
            <SubscriptionForm sx={styles.subscriptionForm} />
            {/* <Flex sx={styles.sponsoredBy}>
              <Text as="span">Sponsored by:</Text>
              <Flex sx={styles.sponsor}>
                {logos?.map((logo, index) => (
                  <Flex as="figure" key={index}>
                    <Image src={logo.src} alt={logo.name} />
                  </Flex>
                ))}
              </Flex>
            </Flex> */}
          </Box>
          {/* <Box as="figure" id="main-image" sx={styles.bannerImage}>  
            <img  src={hjzHeader} alt='hjz' />
          </Box> */}

          <Box>
            <video
              muted
              preload="metadata"
              loop
              autoPlay
              as="figure"
              id="main-image"
              sx={styles.bannerImage}
            >
              <source src={clicknVideo} type="video/mp4" />
              <source src={clicknVideo} type="video/ogg" />
            </video>
          </Box>
        </Box>
        {/* <div className="arrows"></div> */}
        <Container>
          <div className="know-more">
            {/* <img  src={headerArrowEn} alt='hjz' /> */}
            <h3 className="title-know-more">{t("know-more-title")}</h3>
          </div>
        </Container>
        <Container>
          {/* <div class="logos">
            <div class="logos-slide">
              <img
                alt="images"
                src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png"
              />
              <img
                alt="images"
                src="https://ndf.gov.sa/wp-content/themes/ndf/img/logo.svg"
              />
              <img
                alt="images"
                src="https://ndf.gov.sa/wp-content/themes/ndf/img/vision-2030.svg"
              />
              <img
                alt="images"
                src="https://ksaimg1.b8cdn.com/images/templates/mnsht/mnsht-logo-en.png"
              />
              <img
                alt="images"
                src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png"
              />
              <img
                alt="images"
                src="https://ndf.gov.sa/wp-content/themes/ndf/img/logo.svg"
              />
              <img
                alt="images"
                src="https://ndf.gov.sa/wp-content/themes/ndf/img/vision-2030.svg"
              />
              <img
                alt="images"
                src="https://ksaimg1.b8cdn.com/images/templates/mnsht/mnsht-logo-en.png"
              />
            </div>
          </div> */}
          <div class="logos">
            <Swiper
              spaceBetween={40}
              //  slidesPerView={7}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 8,
                },
                768: {
                  slidesPerView: 4,
                },
                320: {
                  slidesPerView: 3,
                },
              }}
              speed={1000}
            >
              {icons.map((icon, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <img
                    src={icon}
                    alt={`icon-${index}`}
                    style={{ height: "50px" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </Container>
    </section>
  );
};

export default Banner;

const styles = {
  section: {
    backgroundColor: "#0B0B0D",
    pt: [14, null, null, null, null, 0],
    pb: [6, null, null, 7, 11, 0],
  },
  contentWrapper: {
    gap: ["50px 50px"],
    display: ["block", null, null, null, "grid"],
    gridTemplateColumns: [null, null, null, null, "1fr 1fr", "0.95fr 1.05fr"],
    alignItems: "center",
    minHeight: ["auto", null, null, null, "38vh", "100vh"],
    pt: [null, null, null, 8, 0, 9, null],
    "@media only screen and (min-width:1900px)": {
      pt: 10,
    },
  },
  bannerContent: {
    margin: [null, null, null, "0 auto", 0],
    maxWidth: [null, null, null, 600, "none"],
    textAlign: [null, null, null, "center", "left"],
    h1: {
      fontWeight: 700,
      fontSize: [8, null, null, 10, 45, null, 12, 14],
      lineHeight: [1.26, null, null, 1.5, 1.2, 1.26],
      letterSpacing: [0, null, null, null, "-1.5px"],
      color: "textSecondary",
      "@media screen and (min-width: 1441px) and (max-width:1600px)": {
        fontSize: 12,
        lineHeight: 1.5,
      },
    },
    p: {
      fontSize: [1, null, null, 2, 3],
      lineHeight: [1.5, null, null, 2, null, 2.33],
      color: "textSecondary",
      maxWidth: [470],
      m: [null, null, null, "30px auto", 0],
      mt: [3, null, null, null, 5],
    },
  },
  subscriptionForm: {
    justifyContent: "center",
    maxWidth: [null, null, null, 470, "none"],
    m: [null, null, null, "30px auto", "30px 0 0"],
    mt: [6],
    input: {
      outLine: "none",
      backgroundColor: "#FFFFFF",
      border: "0 none",
      borderColor: "#FFFFFF",
      borderRadius: "0",
      borderBottom: "2px solid rgba(0, 0, 51, 0.7)",
      fontFamily: "body",
      fontSize: [1, null, null, null, 2],
      px: [5],
      // boxShadow: '0px 16px 40px rgba(72, 59, 26, 0.08)',
      minHeight: [40, 50, null, null, null, 60],
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      "::placeholder": {
        color: rgba("#02073E", 0.4),
        opacity: 1 /* Firefox */,
      },
      "::input:focus": {
        outLine: "none",
      },
    },
    button: {
      fontSize: [0, 1, null, null, 2],
      minHeight: [40, 50, null, null, null, 60],
    },
  },
  sponsoredBy: {
    alignItems: "center",
    maxWidth: [null, null, null, 470, "none"],
    m: [null, null, null, "30px auto", "30px 0 0"],
    mt: [6],
    span: {
      fontSize: ["13px", null, null, null, 2],
      lineHeight: 2.62,
      color: rgba("#566272", 0.6),
    },
  },
  sponsor: {
    alignItems: "center",
    figure: {
      ml: [2, null, null, null, 4, 5],
      img: {
        maxWidth: ["60px", null, null, null, "80px", "100%"],
      },
    },
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    maxWidth: "800px", // need to fix
    mt: [0, null, null, null, 0],
  },
};
