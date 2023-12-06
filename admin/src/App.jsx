import { Routes, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import ProductsDashboard from "./screens/ProductsDashboard";
import NewProduct from "./screens/NewProduct";
import Drafts from "./screens/Drafts";
import Released from "./screens/Released";
import Comments from "./screens/Comments";
import Scheduled from "./screens/Scheduled";
import Customers from "./screens/Customers";
import CustomerList from "./screens/CustomerList";
import Promote from "./screens/Promote";
import Notification from "./screens/Notification";
import Settings from "./screens/Settings";
import UpgradeToPro from "./screens/UpgradeToPro";
import MessageCenter from "./screens/MessageCenter";
import ExploreCreators from "./screens/ExploreCreators";
import AffiliateCenter from "./screens/AffiliateCenter";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Earning from "./screens/Earning";
import Refunds from "./screens/Refunds";
import Payouts from "./screens/Payouts";
import Statements from "./screens/Statements";
import Shop from "./screens/Shop";
import PageList from "./screens/PageList";
import AppUserProvider from "./components/Contexts/AppUserProvider";

function App() {
  return (
    <AppUserProvider>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Page title="Dashboard">
                <Home />
              </Page>
            }
          />
          <Route
            path="hotel/dashboard"
            element={
              <Page title="Hotel dashboard">
                <ProductsDashboard />
              </Page>
            }
          />
          <Route
            path="products/add"
            element={
              <Page title="New product">
                <NewProduct />
              </Page>
            }
          />
          <Route
            path="products/drafts"
            element={
              <Page title="Drafts">
                <Drafts />
              </Page>
            }
          />
          <Route
            path="products/released"
            element={
              <Page title="Released">
                <Released />
              </Page>
            }
          />
          <Route
            path="products/comments"
            element={
              <Page title="Comments">
                <Comments />
              </Page>
            }
          />
          <Route
            path="products/scheduled"
            element={
              <Page title="Scheduled">
                <Scheduled />
              </Page>
            }
          />
          <Route
            path="customers/overview"
            element={
              <Page title="Customers">
                <Customers />
              </Page>
            }
          />
          <Route
            path="customers/customer-list"
            element={
              <Page title="Customer list">
                <CustomerList />
              </Page>
            }
          />
          <Route
            path="shop"
            element={
              <Page wide>
                <Shop />
              </Page>
            }
          />
          <Route
            path="income/earning"
            element={
              <Page title="Earning">
                <Earning />
              </Page>
            }
          />
          <Route
            path="income/refunds"
            element={
              <Page title="Refunds">
                <Refunds />
              </Page>
            }
          />
          <Route
            path="income/payouts"
            element={
              <Page title="Payouts">
                <Payouts />
              </Page>
            }
          />
          <Route
            path="income/statements"
            element={
              <Page title="Statements">
                <Statements />
              </Page>
            }
          />
          <Route
            path="promote"
            element={
              <Page title="Promote">
                <Promote />
              </Page>
            }
          />
          <Route
            path="notification"
            element={
              <Page title="Notification">
                <Notification />
              </Page>
            }
          />
          <Route
            path="settings"
            element={
              <Page title="Settings">
                <Settings />
              </Page>
            }
          />
          <Route
            path="upgrade-to-pro"
            element={
              <Page title="Upgrade to Pro">
                <UpgradeToPro />
              </Page>
            }
          />
          <Route
            path="message-center"
            element={
              <Page title="Message center">
                <MessageCenter />
              </Page>
            }
          />
          <Route
            path="explore-creators"
            element={
              <Page title="Explore creators">
                <ExploreCreators />
              </Page>
            }
          />
          <Route
            path="affiliate-center"
            element={
              <Page title="Affiliate center">
                <AffiliateCenter />
              </Page>
            }
          />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="pagelist" element={<PageList />} />
        </Route>
      </Routes>
    </AppUserProvider>
  );
}

export default App;
