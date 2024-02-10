import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import FormComponent from "./component/FormComponent";
import TableComponent from "./component/TableComponent";
import CardComponent from "./component/CardComponent";
import ChartComponent from "./component/ChartComponent";
import HeroComponent from "./component/HeroComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div style={{ overflow: "auto" }}>
      <HeroComponent />
      <div style={{marginTop:"40px"}}> <ChartComponent /></div>
     

      
      <div style={{marginTop:"350px"}}><FormComponent /></div>
      
      
      <div style={{marginTop:"1250px"}}><CardComponent /> </div>
      <div style={{marginTop:"550px"}}> <TableComponent /></div>
     
      
    </div>
  );
}
