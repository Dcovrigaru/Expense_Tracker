import React, { useState, useEffect, useRef } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  // Handle item click and display text box
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown}>Menu</button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#" onClick={() => handleItemClick("Dashboard")}>
            Dashboard Functions
          </a>
          <a href="#" onClick={() => handleItemClick("Reports")}>
            Reports Functions
          </a>
          <a href="#" onClick={() => handleItemClick("History")}>
            History Functions
          </a>
        </div>
      )}

      {/* Conditionally render the text box based on selected item */}
      {selectedItem && (
        <div className="textbox-container">
          {selectedItem === "Dashboard" && (
            <p>
              The dashboard is where we initalize our spendings for each period.
              Here we track the amount of money spent, the items purchaseed,
              expensed paid, etc. This is our profile home page!
            </p>
          )}
          {selectedItem === "Reports" && (
            <p>
              Here you can get spending reports for personalized periods.
              Personalize by money spent on a genre of item, money spent per
              time period and budgetary situations as well.
            </p>
          )}
          {selectedItem === "History" && (
            <p>
              Here you can see history about both when you updated you
              dashboard, as well as all your old reports that you generated.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
