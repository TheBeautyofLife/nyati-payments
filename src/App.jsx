import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";

import ScrollToTop from "./ScrollToTop.jsx"; // Import ScrollToTop
import MobilePayValidation from "./6-Views/10PaymentValidations/MobilePayValidation.jsx";
import PaymentResponse from "./6-Views/10PaymentValidations/PaymentResponse.jsx";
import NyatiFlixSoon from "./6-Views/14ComingSoon/NyatiFlixSoon.jsx";

import ErrorPage from "./6-Views/0ErrorPage/ErrorPage.jsx";
import PaymentValidation from "./6-Views/1Payments/PaymentValidation.jsx";

import ProcessingPay from "./6-Views/1Payments/ProcessingPay.jsx";
import DonationPay from "./6-Views/2Donations/DonationPay.jsx";
import DonationValidation from "./6-Views/2Donations/DonationValidation.jsx";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <ScrollToTop>
          {" "}
          {/* Wrap Routes with ScrollToTop */}
          <Routes>
            <Route
              path="/film/process/:userId/:videoId"
              element={<ProcessingPay />}
            />
            <Route
              path="/film/validate/:orderTrackingId"
              element={<PaymentValidation />}
            />

            <Route
              path="/donate/process/:userId/:filmId"
              element={<DonationPay />}
            />
            <Route
              path="/donate/validate/:orderTrackingId"
              element={<DonationValidation />}
            />
            {/** PAY */}
            <Route path="/pay-response" element={<PaymentResponse />} />
            <Route path="/mpay-validate" element={<MobilePayValidation />} />
            <Route path="/comingsoon" element={<NyatiFlixSoon />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
