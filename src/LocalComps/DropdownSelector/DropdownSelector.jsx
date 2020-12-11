import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./DropdownSelector.module.scss";

const DropdownSelector = ({ props }) => {
  const { options, selectedEntry } = props;

  const optionNames = Object.keys(options);

  return (
    <>
      <DropdownButton
        className={styles.dropdown}
        title={selectedEntry.pageName}
      >
        {optionNames &&
          optionNames.map((optionName, idx) => {
            return (
              <div>
                <Dropdown.Header>{optionName}</Dropdown.Header>
                <Dropdown.Divider />
                {options[optionName].map((option) => {
                  return (
                    <Dropdown.Item
                      as={Link}
                      style={{
                        paddingBottom: "10px",
                        paddingTop: "10px",
                        fontSize: "15px",
                      }}
                      to={option.pageRoute}
                    >
                      {option.pageName}
                    </Dropdown.Item>
                  );
                })}
                {idx !== optionNames.length - 1 ? <Dropdown.Divider /> : null}
              </div>
            );
          })}
      </DropdownButton>
    </>
  );
};

export default DropdownSelector;
