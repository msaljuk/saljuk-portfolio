import React, { useEffect, useState } from "react";

import { client, getContentFromEntry } from "../../Network/contentful";
import Loader from "../../Components/Loader/Loader";

import styles from "./AssetPage.module.scss";

const toAbsoluteAssetUrl = (url) => {
  if (!url) {
    return null;
  }
  return url.startsWith("//") ? `https:${url}` : url;
};

const resolveAssetUrl = async (assetLink) => {
  if (!assetLink) {
    return null;
  }

  if (assetLink.fields?.file?.url) {
    return toAbsoluteAssetUrl(assetLink.fields.file.url);
  }

  const assetId = assetLink.sys?.id;
  if (!assetId) {
    return null;
  }

  const asset = await client.getAsset(assetId);
  return toAbsoluteAssetUrl(asset?.fields?.file?.url);
};

const AssetPage = ({ props }) => {
  const { pageID } = props;
  const [assetUrl, setAssetUrl] = useState(null);
  const [title, setTitle] = useState("Opening document…");
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const openAsset = async () => {
      if (!pageID) {
        setFailed(true);
        return;
      }

      try {
        const entry = await getContentFromEntry(pageID);
        if (cancelled) {
          return;
        }

        if (!entry?.fields) {
          setFailed(true);
          return;
        }

        const url = await resolveAssetUrl(entry.fields.asset);
        if (cancelled) {
          return;
        }

        if (!url) {
          setFailed(true);
          return;
        }

        const pageTitle = entry.fields.title || "Document";
        setTitle(pageTitle);
        setAssetUrl(url);
        window.location.replace(url);
      } catch (err) {
        console.error("Failed to open static asset:", err);
        if (!cancelled) {
          setFailed(true);
        }
      }
    };

    openAsset();

    return () => {
      cancelled = true;
    };
  }, [pageID]);

  if (failed) {
    return (
      <div className={styles.container}>
        <h1>Document unavailable</h1>
        <p>This asset could not be loaded from Contentful.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Loader />
      <p className={styles.status}>{title}</p>
      {assetUrl && (
        <p className={styles.fallback}>
          If nothing opens,{" "}
          <a href={assetUrl} rel="noopener noreferrer">
            open the document here
          </a>
          .
        </p>
      )}
    </div>
  );
};

export default AssetPage;
