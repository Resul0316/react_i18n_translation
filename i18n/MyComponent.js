import React from "react";
import { useTranslation } from "react-i18next";
import "../components/i18n";

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t("")}</p>
    </div>
  );
};

export default MyComponent;
