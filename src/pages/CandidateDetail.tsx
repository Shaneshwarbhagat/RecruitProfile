import { Grid } from "@mui/material";
import CandidateBar from "../component/CandidateBar";
import ProfileCard from "../component/ProfileCard";
import RightSidebar from "../component/RightSidebar";

const CandidateDetail = () => {
    return <>
        <Grid container className="candidate-detail-container">
            <Grid xs={12} sm={12} lg={8}>
                <CandidateBar name="Robert Hardy" id="231" previousButton={true} nextButton={true} profileUpdateButton={true}/>
                <ProfileCard />
            </Grid>
            <Grid xs={12} sm={12} lg={4}>
                <RightSidebar/>
            </Grid>
        </Grid>
        
    </>
}

export default CandidateDetail