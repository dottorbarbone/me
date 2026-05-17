import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Typography variant="h5" style={{margin:"100px"}} className={`${styles.title} ${geistSans.variable}`}>
       IL MIO CURRICULUM SCOLASTICO E PROFESSIONALE
      </Typography> 
    </>
  );
}
