/** @jsx jsx */

import { jsx, Flex, Grid, Button } from "theme-ui";
// import { useState, useEffect } from 'react';
import "../assets/styles/banner.scss";
import { useTranslation } from "react-i18next";
import { db } from "../utils/config";
import swal from "sweetalert";
const SubscriptionForm = ({ buttonLabel, ...props }) => {
  const { t } = useTranslation();
  // const [id, setId] = useState('');

  // useEffect(() => {
  //   setId(Date.now());
  // }, []);

  const SendInformation = (e) => {
    e.preventDefault();
    const elementsArray = [...e.target.elements];
    elementsArray.pop();
    const formData = {};

    elementsArray.forEach((field) => {
      if (field.value !== "") {
        formData[field.id] = field.value;
      }
    });
    // console.log(formData);

    if (elementsArray[0].value === "" || elementsArray[1].value === "") {
      // console.log("Please, all field is required ^_^")
      swal({
        title: t("request-title-invalid"),
        text: t("request-text-invalid"),
        icon: "error",
        button: t("request-button-invalid"),
      });
    } else {
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      db.collection("companies")
        .add({
          name: formData["company-name"],
          mobile: formData["company-mobile"],
          date: date,
        })
        .then(() => {
          //done
        })
        .catch((err) => console.log(err));
      swal({
        title: t("request-title-successful"),
        text: t("request-text-successful"),
        icon: "success",
        button: t("request-button-successful"),
      });
    }
  };

  return (
    <Flex
      onSubmit={SendInformation}
      as="form"
      id="form"
      sx={styles.form}
      {...props}
    >
      <Grid gap={4} columns={[1, null, 2]}>
        <Button class="btn-subscriptionForm" style={{ margin: "0px" }}>
          <a href="https://r144tvjgepm.typeform.com/to/b0ftFWBi">
            {" "}
            {buttonLabel ?? t("Subscribe")}
          </a>
        </Button>
      </Grid>
    </Flex>
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    input: {
      flexGrow: 1,
      p: ["0 20px", null, null, null, "0 25px"],
      minHeight: [50],
      height: "auto",
      width: "auto",
    },
    button: {
      ml: [0],
      alignItem: "center",
      display: "inline-flex",
      WebkitBoxAlign: "center",
      alignItems: "center",
      WebkitBoxPack: "center",
      justifyContent: "center",
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      outline: 0,
      margin: 0,
      cursor: "pointer",
      userSelect: "none",
      verticalAlign: "middle",
      appearance: "none",
      textDecoration: "none",
      fontFamily: 'ABCFavorit, "Arial Nova", sans-serif',
      padding: "6px 1.25rem",
      boxShadow:
        "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
      minWidth: 0,
      textTransform: "capitalize",
      fontWeight: 600,
      borderRadius: "4px",
      transition: "unset",
      whiteSpace: "nowrap",
      position: "relative",
      fontSize: "1rem",
      lineHeight: 2,
      background:
        "linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)) padding-box, linear-gradient(90deg, rgb(32, 28, 255) -91.5%, rgb(19, 239, 149) 80.05%) border-box !important",
      color: "rgb(255, 255, 255)",
      filter:
        "drop-shadow(rgba(56, 237, 172, 0.2) 10px 0px 15px) drop-shadow(rgba(150, 162, 255, 0.2) -10px 0px 15px)",
      border: "1px solid transparent",
    },
  },
};
