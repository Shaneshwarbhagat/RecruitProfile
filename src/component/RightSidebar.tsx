/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  Tab,
  Tabs,
  Box,
  CircularProgress,
  Stack,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { getCardDetails } from "./apis";

interface CardProps {
  userIcon: string;
  timeIcon: string;
  title: string;
  tag: string;
  content: string;
  associationCount: number;
  userName: string;
  timestamp: string;
}

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
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const CustomCard: React.FC<CardProps> = ({
  userIcon,
  timeIcon,
  title,
  tag,
  content,
  associationCount,
  userName,
  timestamp,
}) => (
  <Card className="styledCard">
    <CardHeader
      avatar={
        <div className="sidebar-icon">
          <img src="/blue-file.svg" alt="File" />
        </div>
      }
      title={title}
      action={<span className="styledTag">{tag}</span>}
      className="cardHeaderTitle"
    />
    <CardContent className="styledCardContent">
      <Typography>{content}</Typography>
      <Typography className="styledAssociation">
        {associationCount} Association(s)
      </Typography>
      <Box className="styledFooter">
        <Box className="styledUserInfo">
          <Avatar src={userIcon} sx={{ width: 12, height: 12 }} />
          <Typography>{userName}</Typography>
        </Box>
        <Box className="styledTimestamp">
          <Avatar src={timeIcon} sx={{ width: 12, height: 12 }} />
          <Typography>{timestamp}</Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const RightSidebar: React.FC = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const [noData, setSetNoData] = React.useState(false);
  const [MockApiData, setMockApiData] = React.useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  React.useEffect(() => {
    onGetCardDetail();
  }, []);

  const onGetCardDetail = async () => {
    await getCardDetails().then((res) => {
      if (res.status < 299) {
        setMockApiData(res.body);
      } else {
        setSetNoData(true);
        enqueueSnackbar(res?.body?.Message ? res?.body?.Message : res?.body, {
          variant: "error",
        });
      }
    });
  };

  return (
    <div className="styledContainer">
      <header className="styledHeader">
        <div className="sidebar-icon">
          <img src="/blue-file.svg" alt="File" />
        </div>
        <div className="sidebar-icon">
          <img src="/ring-call.svg" alt="Call" />
        </div>
        <div className="sidebar-icon">
          <img src="/check.svg" alt="Done" />
        </div>
        <div className="sidebar-icon">
          <img src="/calendar-date.svg" alt="Date" />
        </div>
      </header>

      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        className="styledTabs"
        variant="scrollable"
      >
        <Tab label="All" />
        <Tab label="Notes & Calls" />
        <Tab label="Tasks" />
        <Tab label="Meeting" />
        <Tab label="Files" />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <section className="right-sidebar-tab-section">
          {MockApiData && MockApiData?.length ? (
            MockApiData.map((card: any, index: number) => (
              <CustomCard key={index} {...card} />
            ))
          ) : noData ? (
            <Typography
              sx={{
                color: "var(--negative-default)",
                padding: "15px",
                fontSize: "var(--font-size-smi)",
              }}
            >
              No card details found from mock api or You missed running mock
              JSON server. First run 'npm install -g json-server' in your local
              machine then to run server execute command 'json-server --watch
              --port 3001 src/api/db.json'
            </Typography>
          ) : (
            <Stack alignItems="center" sx={{ marginTop: 10 }}>
              <CircularProgress />
            </Stack>
          )}
        </section>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <section className="right-sidebar-tab-section tab-panel-section">
          <span>Notes & Calls</span>
        </section>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <section className="right-sidebar-tab-section tab-panel-section">
          <span>Tasks</span>
        </section>
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        <section className="right-sidebar-tab-section tab-panel-section">
          <span>Meeting</span>
        </section>
      </TabPanel>
      <TabPanel value={tabValue} index={4}>
        <section className="right-sidebar-tab-section tab-panel-section">
          <span>Files</span>
        </section>
      </TabPanel>
    </div>
  );
};

export default RightSidebar;
