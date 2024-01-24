import localFont from "next/font/local";

export const ivar = localFont({
  variable: "--font-ivar",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/IvarFine-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/IvarFine-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/IvarFine-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/IvarFine-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/IvarFine-Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
});

export const ftPolar = localFont({
  variable: "--font-polar",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/FTPolar-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/FTPolar-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/FTPolar-Book.ttf",
      weight: "350",
      style: "normal",
    },
    {
      path: "../../public/fonts/FTPolar-BookItalic.ttf",
      weight: "350",
      style: "italic",
    },
    {
      path: "../../public/fonts/FTPolar-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/FTPolar-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/FTPolar-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/FTPolar-Medium.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/FTPolar-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/FTPolar-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});
