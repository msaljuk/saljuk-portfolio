import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router";

import { getCurrentEntry, sortEntriesByType } from "./util";

import DropdownSelector from "../../Components/DropdownSelector/DropdownSelector";

import styles from "./Code.module.scss";

const Code = ({ props }) => {
  const [selectedEntry, setSelectedEntry] = useState({});

  const { entries } = props;

  const location = useLocation();

  useEffect(() => {
    const currentEntry = getCurrentEntry(entries, location.pathname);

    setSelectedEntry(currentEntry);
  }, [location, entries]);

  const portfolioEntries = useMemo(() => sortEntriesByType(entries), [entries]);

  return (
    <div className={styles.container}>
      <h1 className={styles.pageHeader}>Coding Portfolio</h1>
      {selectedEntry && portfolioEntries && (
        <DropdownSelector
          props={{ options: portfolioEntries, selectedEntry: selectedEntry }}
        />
      )}
    </div>
  );
};

export default Code;
