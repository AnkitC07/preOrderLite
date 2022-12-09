import { BrowserRouter } from "react-router-dom";
import { NavigationMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";

import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./components";

import '../frontend/css/app.css'

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <QueryProvider>
            <NavigationMenu
              navigationLinks={[
                {
                  label: "Product",
                  destination: "/",
                },
                {
                  label: "Design",
                  destination: "/Design",
                },
                {
                  label: "Setup Guide",
                  destination: "/Setup",
                },
                {
                  label: "Plan",
                  destination: "/Plan",
                },
                {
                  label: "CanCode.io App",
                  destination: "/CanCode",
                },
                {
                  label: "Missing a feature?",
                  destination: "/Missing",
                },
              ]}
            />
            <Routes pages={pages} />
          </QueryProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
