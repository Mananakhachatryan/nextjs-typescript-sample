import NextI18Next from "next-i18next";

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: [],
});

export const { appWithTranslation, withTranslation } = NextI18NextInstance;

export default NextI18NextInstance;
