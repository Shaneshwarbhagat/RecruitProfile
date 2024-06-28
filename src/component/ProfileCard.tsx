/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Button,
  Avatar,
  Switch,
  Stack,
  Grid,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProfileDetail,
  setProfileDetail,
} from "../state-management/actions";
import { useSnackbar } from "notistack";
import { getCandidateDetails } from "./apis";

type AssignedJobProps = {
  title: string;
  company: string;
  assignedTo: string;
  assignedDate: string;
};

const StyledTab = styled(Tab)();

const ProfileCard = () => {
  const socialIcons = [
    { src: "/tweeter.svg", alt: "Tweeter" },
    { src: "/linkedin.svg", alt: "Linkedin" },
    { src: "/git.svg", alt: "Github" },
    { src: "/social-icon.svg", alt: "Social icon" },
    { src: "/fb.svg", alt: "Facebook" },
  ];

  const actionButtons = [
    { src: "/star.svg", clickable: false },
    { src: "/fire.svg", clickable: false },
    { src: "/pencil.svg", clickable: true },
    { src: "/vertical-three-dot.svg", clickable: false },
  ];

  const validationSchema = Yup.object({
    name: Yup.string().required("Cannot be empty"),
    position: Yup.string().required("Cannot be empty"),
    country: Yup.string().required("Cannot be empty"),
    place: Yup.string().required("Cannot be empty"),
    email: Yup.string().email("Invalid email").required("Cannot be empty"),
    phone: Yup.string().required("Cannot be empty"),
    lastUpdatedBy: Yup.string().required("Cannot be empty"),
    lastUpdatedDate: Yup.string().required("Cannot be empty"),
    currentOrganization: Yup.string().required("Cannot be empty"),
    skills: Yup.string().required("Cannot be empty"),
    employmentStatus: Yup.string().required("Cannot be empty"),
    availableFrom: Yup.string().required("Cannot be empty"),
    dateOfBirth: Yup.string().required("Cannot be empty"),
    currentSalary: Yup.string().required("Cannot be empty"),
    relevantExperience: Yup.string().required("Cannot be empty"),
    noticePeriod: Yup.string().required("Cannot be empty"),
    salaryExpectation: Yup.string().required("Cannot be empty"),
    fullAddress: Yup.string().required("Cannot be empty"),
    status: Yup.string().required("Cannot be empty"),
    salaryType: Yup.string().required("Cannot be empty"),
    totalExperience: Yup.string().required("Cannot be empty"),
    languageSkills: Yup.string().required("Cannot be empty"),
  });

  const [editable, setEditable] = React.useState(false);
  const [tabValue, setTabValue] = React.useState(1);
  const [candidateData, setCandidateData] = React.useState([]);
  const { enqueueSnackbar } = useSnackbar();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const profileDetail = useSelector(
    (state: any) => state.profile.profileDetail
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    handleCandidateDetail();
  }, []);

  React.useEffect(() => {
    if (candidateData) {
      dispatch(setProfileDetail(candidateData));
    }
  }, [candidateData]);

  const handleCandidateDetail = async () => {
    await getCandidateDetails().then((res) => {
      if (res.status < 299) {
        setCandidateData(res.body[0]);
      } else {
        enqueueSnackbar(res?.body?.Message ? res?.body?.Message : res?.body, {
          variant: "error",
        });
      }
    });
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleClose = () => {
    setEditable(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any) => {
    dispatch(updateProfileDetail(values));
    enqueueSnackbar("Profile Updated in redux state", { variant: "success" });
    handleClose();
  };

  return (
    <article className="profile-card">
      <header className="profile-header">
        <Avatar
          src="/candidate-image.svg"
          alt={`${profileDetail.name}'s profile picture`}
          className="profile-image"
        />
        <div className="profile-info">
          <div className="profile-name-wrapper">
            <Typography variant="h5" className="profile-name">
              {profileDetail.name}
            </Typography>
            <div className="profile-badges">
              {socialIcons.map((icon, index) => (
                <img
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  className="badge"
                />
              ))}
            </div>
          </div>
          <div className="profile-details">
            <Typography variant="body1" className="profile-position">
              {profileDetail.position}
            </Typography>
            <Typography variant="body2" className="profile-country">
              {profileDetail.country}
            </Typography>
            <Typography variant="body2" className="profile-place">
              {profileDetail.place}
            </Typography>
          </div>
        </div>
        <div className="profile-actions">
          <span className="contact-status">Contact Linked</span>
          {actionButtons.map((action, index) =>
            action?.clickable ? (
              <Button
                variant="outlined"
                key={index}
                title="Click to edit"
                sx={{ minWidth: 32, padding: "8px 12px !important" }}
                onClick={() => setEditable(!editable)}
              >
                <img src={action.src} alt="" />
              </Button>
            ) : (
              <Button
                variant="outlined"
                key={index}
                title="not clickable"
                sx={{
                  minWidth: 32,
                  padding: "8px 12px !important",
                  cursor: "not-allowed",
                }}
              >
                <img src={action.src} alt="" />
              </Button>
            )
          )}
        </div>
      </header>

      <section className="contact-info">
        <Stack direction="row" gap={3} sx={{ padding: "5px 0px" }}>
          <div className="contact-item">
            <img src="/email.svg" alt="" className="contact-icon" />
            <span className="contact-text">{profileDetail.email}</span>
          </div>
          <div className="contact-item">
            <img src="/mobile.svg" alt="" className="contact-icon" />
            <span className="contact-text">{profileDetail.phone}</span>
          </div>
        </Stack>
        <Stack direction="row" gap={3} sx={{ padding: "5px 0px" }}>
          <div className="updated-by">
            <img src="/mobile.svg" alt="" className="update-icon" />
            <span className="update-text">{profileDetail.lastUpdatedBy}</span>
          </div>
          <div className="updated-date">
            <img
              src="/usercircle.svg"
              alt="user circle"
              className="update-icon"
            />
            <span className="update-text">{profileDetail.lastUpdatedDate}</span>
          </div>
        </Stack>
      </section>

      <section className={editable ? "" : "profile-details-grid"}>
        {editable ? (
          <>
            <Formik
              initialValues={profileDetail}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="formik-form">
                  <Field
                    as={TextField}
                    name="name"
                    label="Name"
                    fullWidth
                    margin="dense"
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                  <Field
                    as={TextField}
                    name="position"
                    label="Position"
                    fullWidth
                    margin="dense"
                    error={touched.position && Boolean(errors.position)}
                    helperText={touched.position && errors.position}
                  />
                  <Field
                    as={TextField}
                    name="country"
                    label="Country"
                    fullWidth
                    margin="dense"
                    error={touched.country && Boolean(errors.country)}
                    helperText={touched.country && errors.country}
                  />
                  <Field
                    as={TextField}
                    name="place"
                    label="Place"
                    fullWidth
                    margin="dense"
                    error={touched.place && Boolean(errors.place)}
                    helperText={touched.place && errors.place}
                  />
                  <Field
                    as={TextField}
                    name="email"
                    label="Email"
                    fullWidth
                    margin="dense"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <Field
                    as={TextField}
                    name="phone"
                    label="Phone"
                    fullWidth
                    margin="dense"
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                  <Field
                    as={TextField}
                    name="lastUpdatedBy"
                    label="Last Updated By"
                    fullWidth
                    margin="dense"
                    error={
                      touched.lastUpdatedBy && Boolean(errors.lastUpdatedBy)
                    }
                    helperText={touched.lastUpdatedBy && errors.lastUpdatedBy}
                  />
                  <Field
                    as={TextField}
                    name="lastUpdatedDate"
                    label="Last Updated Date"
                    fullWidth
                    margin="dense"
                    error={
                      touched.lastUpdatedDate && Boolean(errors.lastUpdatedDate)
                    }
                    helperText={
                      touched.lastUpdatedDate && errors.lastUpdatedDate
                    }
                  />
                  <Field
                    as={TextField}
                    name="currentOrganization"
                    label="Current Organization"
                    fullWidth
                    margin="dense"
                    error={
                      touched.currentOrganization &&
                      Boolean(errors.currentOrganization)
                    }
                    helperText={
                      touched.currentOrganization && errors.currentOrganization
                    }
                  />
                  <Field
                    as={TextField}
                    name="skills"
                    label="Skills"
                    fullWidth
                    margin="dense"
                    error={touched.skills && Boolean(errors.skills)}
                    helperText={touched.skills && errors.skills}
                  />
                  <Field
                    as={TextField}
                    name="employmentStatus"
                    label="Employment Status"
                    fullWidth
                    margin="dense"
                    error={
                      touched.employmentStatus &&
                      Boolean(errors.employmentStatus)
                    }
                    helperText={
                      touched.employmentStatus && errors.employmentStatus
                    }
                  />
                  <Field
                    as={TextField}
                    name="availableFrom"
                    label="Available From"
                    fullWidth
                    margin="dense"
                    error={
                      touched.availableFrom && Boolean(errors.availableFrom)
                    }
                    helperText={touched.availableFrom && errors.availableFrom}
                  />
                  <Field
                    as={TextField}
                    name="dateOfBirth"
                    label="Date of Birth"
                    fullWidth
                    margin="dense"
                    error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
                    helperText={touched.dateOfBirth && errors.dateOfBirth}
                  />
                  <Field
                    as={TextField}
                    name="currentSalary"
                    label="Current Salary"
                    fullWidth
                    margin="dense"
                    error={
                      touched.currentSalary && Boolean(errors.currentSalary)
                    }
                    helperText={touched.currentSalary && errors.currentSalary}
                  />
                  <Field
                    as={TextField}
                    name="relevantExperience"
                    label="Relevant Experience"
                    fullWidth
                    margin="dense"
                    error={
                      touched.relevantExperience &&
                      Boolean(errors.relevantExperience)
                    }
                    helperText={
                      touched.relevantExperience && errors.relevantExperience
                    }
                  />
                  <Field
                    as={TextField}
                    name="noticePeriod"
                    label="Notice Period"
                    fullWidth
                    margin="dense"
                    error={touched.noticePeriod && Boolean(errors.noticePeriod)}
                    helperText={touched.noticePeriod && errors.noticePeriod}
                  />
                  <Field
                    as={TextField}
                    name="salaryExpectation"
                    label="Salary Expectation"
                    fullWidth
                    margin="dense"
                    error={
                      touched.salaryExpectation &&
                      Boolean(errors.salaryExpectation)
                    }
                    helperText={
                      touched.salaryExpectation && errors.salaryExpectation
                    }
                  />
                  <Field
                    as={TextField}
                    name="fullAddress"
                    label="Full Address"
                    fullWidth
                    margin="dense"
                    error={touched.fullAddress && Boolean(errors.fullAddress)}
                    helperText={touched.fullAddress && errors.fullAddress}
                  />
                  <Field
                    as={TextField}
                    name="status"
                    label="Status"
                    fullWidth
                    margin="dense"
                    error={touched.status && Boolean(errors.status)}
                    helperText={touched.status && errors.status}
                  />
                  <Field
                    as={TextField}
                    name="salaryType"
                    label="Salary Type"
                    fullWidth
                    margin="dense"
                    error={touched.salaryType && Boolean(errors.salaryType)}
                    helperText={touched.salaryType && errors.salaryType}
                  />
                  <Field
                    as={TextField}
                    name="totalExperience"
                    label="Total Experience"
                    fullWidth
                    margin="dense"
                    error={
                      touched.totalExperience && Boolean(errors.totalExperience)
                    }
                    helperText={
                      touched.totalExperience && errors.totalExperience
                    }
                  />
                  <Field
                    as={TextField}
                    name="languageSkills"
                    label="Language Skills"
                    fullWidth
                    margin="dense"
                    error={
                      touched.languageSkills && Boolean(errors.languageSkills)
                    }
                    helperText={touched.languageSkills && errors.languageSkills}
                  />
                  <div>
                    <Button
                      variant="outlined"
                      onClick={handleClose}
                      color="primary"
                      sx={{ marginRight: "12px" }}
                    >
                      Cancel
                    </Button>
                    <Button variant="contained" type="submit" color="primary">
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </>
        ) : profileDetail ? (
          Object.entries(profileDetail).map(([key, value]) => (
            <InfoItem key={key} label={key} value={value} />
          ))
        ) : (
          <div style={{ color: "var(--color-black)", padding: "10px 15px" }}>
            No Data
          </div>
        )}
      </section>

      <section className="tab-section">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            className="profile-tab"
            variant="scrollable"
          >
            <StyledTab label="All Details" />
            <StyledTab label="Assigned Jobs" />
            <StyledTab label="Related Emails" />
            <StyledTab label="Candidate Questions" />
            <StyledTab label="Hotlists" />
            <StyledTab label="Related Deals" />
            <StyledTab label="Contact(s) Pitched" />
          </Tabs>
        </Box>
        <TabPanel value={tabValue} index={0}>
          <Typography>All Details Content</Typography>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <section>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{ marginBottom: "15px" }}
            >
              <Typography className="section-title">
                Assigned Job to {profileDetail.name}
              </Typography>
              <div className="job-actions">
                <Button variant="contained">Assign To Job</Button>
                <Button variant="outlined">View All Assigned Jobs</Button>
              </div>
            </Stack>

            <AssignedJob
              title={profileDetail.position}
              company="Recruit CRM"
              assignedTo={profileDetail.name}
              assignedDate={profileDetail.lastUpdatedDate}
            />
            <AssignedJob
              title={profileDetail.position}
              company="Recruit CRM"
              assignedTo={profileDetail.name}
              assignedDate={profileDetail.lastUpdatedDate}
            />
            <AssignedJob
              title={profileDetail.position}
              company="Recruit CRM"
              assignedTo={profileDetail.name}
              assignedDate={profileDetail.lastUpdatedDate}
            />
          </section>
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <Typography>Related Emails Content</Typography>
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          <Typography>Candidate Questions Content</Typography>
        </TabPanel>
        <TabPanel value={tabValue} index={4}>
          <Typography>Hotlists Content</Typography>
        </TabPanel>
        <TabPanel value={tabValue} index={5}>
          <Typography>Related Deals Content</Typography>
        </TabPanel>
        <TabPanel value={tabValue} index={6}>
          <Typography>Contact(s) Pitched Content</Typography>
        </TabPanel>
      </section>
    </article>
  );
};

const InfoItem: React.FC<{ label: string; value: any }> = ({
  label,
  value,
}) => (
  <div className="info-item">
    <Typography variant="body2" className="info-label">
      {label}
    </Typography>
    <Typography variant="body1" className="info-value">
      {value}
    </Typography>
  </div>
);

const AssignedJob: React.FC<AssignedJobProps> = ({
  title,
  company,
  assignedTo,
  assignedDate,
}) => (
  <Grid container className="assigned-job">
    <Grid className="job-header" sm={6} lg={4}>
      <Avatar className="company-logo">M</Avatar>
      <div className="job-title-company">
        <Typography variant="h6" className="job-title">
          {title}
        </Typography>
        <Typography variant="body2" className="job-company">
          {company}
        </Typography>
      </div>
    </Grid>
    <Grid className="job-details" sm={6} lg={3}>
      <div className="assigned-to">
        <img src="/usercircle-1.svg" alt="" className="assigned-icon" />
        <span className="assigned-name" title={assignedTo}>
          {assignedTo}
        </span>
      </div>
      <div className="assigned-date">
        <img src="/time-1.svg" alt="" className="calendar-icon" />
        <span className="date">{assignedDate}</span>
      </div>
    </Grid>
    <Grid sm={4} lg={2} className="job-assigned">
      <span className="job-status">Assigned</span>
    </Grid>
    <Grid sm={4} lg={2}>
      <Button variant="outlined">View Files</Button>
    </Grid>
    <Grid sm={4} lg={1}>
      <Switch defaultChecked size="small" />
    </Grid>
  </Grid>
);

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: "15px" }}>{children}</Box>}
    </div>
  );
}

export default ProfileCard;
