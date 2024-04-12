import { Route, Routes, BrowserRouter } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage";
import Login from "./Components/Login";
import BrokerDetails from "./Components/BrokerDetails";
import BrokerAdditionalInfo from "./Components/BrokerAdditionalInfo";
import DirectorInfo from "./Components/DirectorInfo";
import CacDocument from "./Components/CacDocument";
import ForgotPassword from "./Components/ForgotPassword";
import Otp from "./Components/Otp";
import Dashboard from "./Components/Dashboard";
import CreditLife from "./Components/Life Insurance/CreditLife";
import GroupLife from "./Components/Life Insurance/GroupLife";
import MotorInsurance from "./Components/General Insurance/MotorInsurance";
import MarineInsurance from "./Components/General Insurance/MarineInsurance";
import FireandSpecialPerils from "./Components/General Insurance/FireandSpecialPerils";
import Burglary from "./Components/General Insurance/Burglary";

import BurglaryClaim from "./Components/Claim Processing Insurance/BurglaryClaim";
import FireClaim from "./Components/Claim Processing Insurance/FireClaim";
import Marineclaim from "./Components/Claim Processing Insurance/Marineclaim";
import MotorClaim from "./Components/Claim Processing Insurance/MotorClaim";

import CreditLifeClaim from "./Components/Life Claims/CreditLifeClaim";
import GroupLifeClaim from "./Components/Life Claims/GroupLifeClaim";
import ContactInfo from "./Components/Client Management/ContactInfo";
import PaymentDashboard from "./Components/Payment/PaymentDashboard";
import PolicyReports from "./Components/Reports/PolicyReports";
import ClaimReports from "./Components/Reports/ClaimReports";
import SetNewPassword from "./Components/SetNewPassword";
import BrokerProfile from "./Components/BrokerProfile/BrokerProfile";
import "./App.css";
import IndividualGetQuote from "./Components/Get a Quote/IndividualGetQuote";
import CorporateGetQuote from "./Components/Get a Quote/CorporateGetQuote";
import GroupLifeCorporateGetQuote from "./Components/Get a Quote/GroupLifeCorporateGetQuote";
import MotorInsurancePrivate from "./Components/Get a Quote/MotorInsurancePrivate";
import MarineCago from "./Components/Get a Quote/MarineCago";
import FireandSpecialPerilQuote from "./Components/Get a Quote/FireandSpecialPerilQuote";
import ManageUser from "./Components/BrokerProfile/ManageUser";
import AddNewUser from "./Components/BrokerProfile/AddNewUser";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <WelcomePage /> */}
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/brokerdetails" element={<BrokerDetails />} />
          <Route path="/brokeradditionalinfo" element={<BrokerAdditionalInfo />} />
          <Route path="/cacdocument" element={<CacDocument />} />
          <Route path="/directorinfo" element={<DirectorInfo />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/setnewpassword" element={<SetNewPassword />} />v
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/creditlife" element={<CreditLife />} />
          <Route path="/grouplife" element={<GroupLife />} />
          <Route path="/motorinsurance" element={<MotorInsurance />} />
          <Route path="/marineinsurance" element={<MarineInsurance />} />
          <Route path="/fireandspecialperil" element={<FireandSpecialPerils />} />
          <Route path="/burglary" element={<Burglary />} />
          <Route path="/burglaryclaim" element={<BurglaryClaim />} />
          <Route path="/fireclaim" element={<FireClaim />} />
          <Route path="/marineclaim" element={<Marineclaim />} />
          <Route path="/motorclaim" element={<MotorClaim />} />
          <Route path="/creditlifeclaim" element={<CreditLifeClaim />} />
          <Route path="/grouplifeclaim" element={<GroupLifeClaim />} />
          <Route path="/contactinfo" element={<ContactInfo />} />
          <Route path="/paymentdashboard" element={<PaymentDashboard />} />
          <Route path="/policyreport" element={<PolicyReports />} />
          <Route path="/claimreport" element={<ClaimReports />} />
          <Route path="/brokerprofile" element={<BrokerProfile />} />
          <Route path="/manageuser" element={<ManageUser />} />
          <Route path="/addnewuser" element={<AddNewUser />} />
          <Route path="/individualgetquote" element={<IndividualGetQuote />} />
          <Route path="/corporategetquote" element={<CorporateGetQuote />} />
          <Route path="/grouplifecorporategetquote" element={<GroupLifeCorporateGetQuote />} />
          <Route path="/motorinsuranceprivate" element={<MotorInsurancePrivate />} />
          <Route path="/marinecargo" element={<MarineCago />} />
          <Route path="/fireandspecialperilquote" element={<FireandSpecialPerilQuote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
