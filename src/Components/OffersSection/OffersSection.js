import React from "react";
import "./OffersSection.css";

const offers = [
  { discount: "12% OFF", details: "on 1st app orders above ₹1200", code: "APPNEWST", bg: "#E4FBC8" },
  { discount: "₹30 OFF", details: "on orders above ₹1250", code: "SAVE30", bg: "#ECFDD1" },
  { discount: "₹100 OFF", details: "on orders above ₹3000", code: "SAVE100", bg: "#E4FBC8" },
  { discount: "₹250 OFF", details: "on orders above ₹6000", code: "SAVE250", bg: "#ECFDD1" },
  { discount: "₹600 OFF", details: "on orders above ₹10000", code: "SAVE600", bg: "#E4FBC8" },
  { discount: "₹1000 OFF", details: "on orders above ₹15000", code: "SAVE1000", bg: "#ECFDD1" },

  { discount: "5% OFF", details: "on orders above ₹2000", code: "ZOOMIE5", bg: "#FFE391" },
  { discount: "9% OFF", details: "on orders above ₹2000", code: "TIGER9", bg: "#E0B4FA" },
  { discount: "5% OFF", details: "on orders above ₹1000", code: "DROOLS5", bg: "#FCA5A5" },
  { discount: "5% OFF", details: "on orders above ₹1600", code: "HENLO", bg: "#FFEB8F" },
  { discount: "5% OFF", details: "on orders above ₹2000", code: "KITTY5", bg: "#F4D5B8" },
  { discount: "5% OFF", details: "on orders above ₹1500", code: "BOWLER5", bg: "#F4E2CF" },
  { discount: "5% OFF", details: "on orders above ₹800", code: "KENNEL5", bg: "#FFD6D6" },
  { discount: "5% OFF", details: "on orders above ₹1500", code: "SMYLO5", bg: "#FFE68A" },
  { discount: "5% OFF", details: "on orders above ₹1500", code: "PURRFRTO5", bg: "#FFC2DA" },
  { discount: "7% OFF", details: "on orders above ₹2000", code: "SIGNATURE7", bg: "#E4E1DF" },
  { discount: "5% OFF", details: "on orders above ₹1500", code: "FELIX5", bg: "#A4D5F9" },
  { discount: "3% OFF", details: "on orders above ₹1200", code: "RC3", bg: "#FECACA" },
];

const OffersSection = () => {
  return (
    <section className="offers-section">
      <h2>Exclusive Offers</h2>
      <div className="offers-grid">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="offer-card"
            style={{ backgroundColor: offer.bg }}
          >
            <p className="offer-title">Extra <strong>{offer.discount}</strong></p>
            <p className="offer-details">{offer.details}</p>
            <div className="offer-code">{offer.code}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersSection;
