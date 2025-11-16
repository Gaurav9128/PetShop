import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [flavorOpen, setFlavorOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [breedOpen, setBreedOpen] = useState(true);
  const [flavourNewOpen, setFlavourNewOpen] = useState(true);
  const [vegNonVegOpen, setVegNonVegOpen] = useState(true);
  const [petTypeOpen, setPetTypeOpen] = useState(true);
  const [brandOpen, setBrandOpen] = useState(true);

  return (
    <div className="sidebar">
      {/* Flavor Section */}
      <div className="filter-section">
        <div
          className="filter-header"
          onClick={() => setFlavorOpen(!flavorOpen)}
        >
          <h4>Flavor</h4>
          <span>{flavorOpen ? "▲" : "▼"}</span>
        </div>
        {flavorOpen && (
          <div className="filter-options">
            {[
              "Chicken (729)",
              "Multiple (374)",
              "Vegetables (199)",
              "Lamb (92)",
              "Eggs (79)",
              "Fruits (73)",
              "Fish (63)",
              "Milk (52)",
            ].map((item, index) => (
              <label key={index}>
                <input type="checkbox" /> {item}
              </label>
            ))}
          </div>
        )}
      </div>

      <hr />

      {/* Price Section */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => setPriceOpen(!priceOpen)}>
          <h4>Price</h4>
          <span>{priceOpen ? "▲" : "▼"}</span>
        </div>
        {priceOpen && (
          <div className="price-range">
            <input type="range" min="0" max="16500" />
            <div className="price-values">
              <span>₹0</span>
              <span>₹16500</span>
            </div>
          </div>
        )}
      </div>

      <hr />

      {/* Breed Size Section */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => setBreedOpen(!breedOpen)}>
          <h4>Breed Size</h4>
          <span>{breedOpen ? "▲" : "▼"}</span>
        </div>
        {breedOpen && (
          <div className="filter-options">
            {["Mini (513)", "Maxi (499)", "Medium (499)"].map(
              (item, index) => (
                <label key={index}>
                  <input type="checkbox" /> {item}
                </label>
              )
            )}
          </div>
        )}
      </div>

      <hr />

      {/* Flavour Section */}
      <div className="filter-section">
        <div
          className="filter-header"
          onClick={() => setFlavourNewOpen(!flavourNewOpen)}
        >
          <h4>Flavour</h4>
          <span>{flavourNewOpen ? "▲" : "▼"}</span>
        </div>
        {flavourNewOpen && (
          <div className="filter-options">
            {["Cranberry (2)"].map((item, index) => (
              <label key={index}>
                <input type="checkbox" /> {item}
              </label>
            ))}
          </div>
        )}
      </div>

      <hr />

      {/* Veg/Non-Veg Section */}
      <div className="filter-section">
        <div
          className="filter-header"
          onClick={() => setVegNonVegOpen(!vegNonVegOpen)}
        >
          <h4>Veg/Non-Veg</h4>
          <span>{vegNonVegOpen ? "▲" : "▼"}</span>
        </div>
        {vegNonVegOpen && (
          <div className="filter-options">
            {["Non-Veg (1148)", "Veg (46)"].map((item, index) => (
              <label key={index}>
                <input type="checkbox" /> {item}
              </label>
            ))}
          </div>
        )}
      </div>

      <hr />

      {/* Pet Type Section */}
      <div className="filter-section">
        <div
          className="filter-header"
          onClick={() => setPetTypeOpen(!petTypeOpen)}
        >
          <h4>Pet Type</h4>
          <span>{petTypeOpen ? "▲" : "▼"}</span>
        </div>
        {petTypeOpen && (
          <div className="filter-options">
            {["Dogs (1382)", "Cats (30)"].map((item, index) => (
              <label key={index}>
                <input type="checkbox" /> {item}
              </label>
            ))}
          </div>
        )}
      </div>

      <hr />

      {/* Brand Section */}
      <div className="filter-section">
        <div
          className="filter-header"
          onClick={() => setBrandOpen(!brandOpen)}
        >
          <h4>Brand</h4>
          <span>{brandOpen ? "▲" : "▼"}</span>
        </div>
        {brandOpen && (
          <div className="filter-options">
            {[
              "Pedigree (93)",
              "Royal Canin (93)",
              "JerHigh (83)",
              "Chip Chops (77)",
              "Drools (76)",
              "Henlo (75)",
              "Farmina N&D (69)",
              "Gnawlers (57)",
            ].map((item, index) => (
              <label key={index}>
                <input type="checkbox" /> {item}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
