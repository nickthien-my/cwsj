import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Media from "./pages/Media";
import GetInvolved from "./pages/GetInvolved";
import Donate from "./pages/Donate";
import NoPage from "./pages/NoPage";
import TalksWebinar from "./pages/events/TalksWebinar";
import MentalHealthAwarenessCampaigns from "./pages/events/MentalHealthAwarenessCampaigns";
import CommunityOutreach from "./pages/events/CommunityOutreach";
import EducationTraining from "./pages/events/EducationTraining";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />}>
          <Route path="talkswebinars" element={<TalksWebinar />} />
          <Route path="mentalhealthawarenesscampaigns" element={<MentalHealthAwarenessCampaigns />} />
          <Route path="communityoutreach" element={<CommunityOutreach />} />
          <Route path="educationtraining" element={<EducationTraining />} />
        </Route>
        <Route path="media" element={<Media />} />
        <Route path="getinvolved" element={<GetInvolved />} />
        <Route path="donate" element={<Donate />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
