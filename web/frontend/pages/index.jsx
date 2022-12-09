import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import NavbarTab from "../components/layouts/NavbarTab";

import { ProductsCard } from "../components";



export default function HomePage() {
  return (

    <div className="container">
      <div className="navbar-wrapper">
        <NavbarTab />
      </div>
    </div>


  );
}
