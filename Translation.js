import {useTranslation} from "react-i18next";
import "./i18n";

const Translation = () =>{
const {t} = useTranslation();
    return (
        <div>
            <p>{t("LOGIN.Email")}</p>
        </div>
    )
};

export default Translation;
