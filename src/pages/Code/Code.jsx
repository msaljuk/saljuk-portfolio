import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router";

import DynamicPage from "../DynamicPage/DynamicPage";

import DropdownSelector from "../../Components/DropdownSelector/DropdownSelector";

import { getCurrentEntry, sortEntriesByType } from "./util";

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
    <>
      <div className={styles.constantContainer}>
        <h1 className={styles.pageHeader}>Coding Portfolio</h1>
        {portfolioEntries && selectedEntry && (
          <DropdownSelector
            props={{
              options: portfolioEntries,
              selectedEntry: selectedEntry,
            }}
          />
        )}
      </div>
      {selectedEntry && selectedEntry.pageID && (
        <div className={styles.portfolioContent}>
          <DynamicPage props={{ pageID: selectedEntry.pageID }} />
        </div>
      )}
    </>
  );
};

export default Code;
