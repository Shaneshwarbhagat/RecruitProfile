import { Button } from "@mui/material"

interface CandidateBarProps {
    name: string;
    id: string;
    previousButton: boolean;
    nextButton: boolean;
    profileUpdateButton: boolean;
}

const CandidateBar: React.FC<CandidateBarProps> = ({name, id, previousButton, nextButton, profileUpdateButton}) => {

    return (
        <div className="candidate-bar">
            <div className="candidate-info">
                <span className="candidate-label">Candidates</span>
                <img src="/breadcrum-arrow.svg" className="breadcrum-arrow-icon" alt="arrow-icon" />
                <span className="candidate-name">{name}</span>
                <span className="candidate-id">ID - {id}</span>
            </div>
            <nav className="action-buttons">
              {profileUpdateButton ? <Button variant="outlined">Request Profile Update</Button> : ""}
              {previousButton ? <Button  variant="outlined">Previous</Button> : ""}
              {nextButton ? <Button  variant="outlined">Next</Button> : ""}
            </nav>
        </div>
    )
}

export default CandidateBar