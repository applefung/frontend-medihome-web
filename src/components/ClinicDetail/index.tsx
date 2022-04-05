import { SyntheticEvent, useState } from 'react';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import DirectionsSubwayIcon from '@mui/icons-material/DirectionsSubway';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import styles from './styles.module.scss';

const clinics = [
  {
    id: 'dsad',
    name: 'Health Integrated Medical and Skin Laser Centre',
    address: 'Rm 1401, 14/F, Chinachem Cameron Centre, 42 Cameron Road, Tsim Sha Tsui',
    mtr: 'Tsim Sha Tsui Exit B2',
    district: 'Mong Kok',
    contacts: {
      phone: '3703 5833',
      whatsapp: '6393 5929',
      email: 'a@a.com',
    },
    businessHours: {
      mon: '11:00 - 18:30',
      tue: '11:00 - 18:30',
      wed: '11:00 - 18:30',
      thu: '11:00 - 18:30',
      fri: '11:00 - 18:30',
      sat: '11:00 - 18:30',
    },
    timetables: {
      '2022-01-23': {
        timeslots: [
          {
            from: '12:00:00',
            to: '12:15:00',
            available: true,
          },
          {
            from: '13:00:00',
            to: '13:15:00',
            available: true,
          },
          {
            from: '14:00:00',
            to: '14:15:00',
            available: true,
          },
        ],
      },
      '2022-01-24': {
        timeslots: [
          {
            from: '12:00:00',
            to: '12:15:00',
            available: true,
          },
          {
            from: '13:00:00',
            to: '13:15:00',
            available: true,
          },
        ],
      },
    },
  },
  {
    id: 'dsad',
    name: 'Health Integrated Medical and Skin Laser Centre2',
    address: 'Rm 1401, 14/F, Chinachem Cameron Centre, 42 Cameron Road, Tsim Sha Tsui2',
    mtr: 'Tsim Sha Tsui Exit B2',
    district: 'Shanm Shui Po',
    contacts: {
      phone: '3703 5833',
      whatsapp: '6393 5929',
      email: 'a@a.com',
    },
    businessHours: {
      mon: '11:00 - 18:30',
      tue: '11:00 - 18:30',
      wed: '11:00 - 18:30',
      thu: '11:00 - 18:30',
      fri: '11:00 - 18:30',
      sat: '11:00 - 18:30',
    },
    timetables: {
      '2022-01-23': {
        timeslots: [
          {
            from: '12:00:00',
            to: '12:15:00',
            available: true,
          },
          {
            from: '13:00:00',
            to: '13:15:00',
            available: true,
          },
          {
            from: '14:00:00',
            to: '14:15:00',
            available: true,
          },
        ],
      },
      '2022-01-24': {
        timeslots: [
          {
            from: '12:00:00',
            to: '12:15:00',
            available: true,
          },
          {
            from: '13:00:00',
            to: '13:15:00',
            available: true,
          },
          {
            from: '14:00:00',
            to: '14:15:00',
            available: true,
          },
          {
            from: '15:00:00',
            to: '15:15:00',
            available: true,
          },
        ],
      },
    },
  },
];

const ClinicDetail = () => {
  const [clinicTab, setClinicTab] = useState(0);
  const [timeslotTab, setTimeslotTab] = useState(0);

  return (
    <div className={styles.container}>
      <Paper elevation={3} className={styles.innerContainer}>
        <Tabs value={clinicTab} onChange={(event: SyntheticEvent, newValue: number) => setClinicTab(newValue)}>
          {clinics.map(({ district }, index) => (
            <Tab label={district} key={index} />
          ))}
        </Tabs>
        {clinics.map(({ name, address, mtr, district, contacts, businessHours, timetables }, index) => (
          <div hidden={clinicTab !== index} key={index}>
            <div>
              <div className={styles.contentContainer}>
                <div>
                  <HomeIcon />
                </div>
                <div className={styles.content}>{name}</div>
              </div>
              <div className={styles.contentContainer}>
                <div>
                  <MapIcon />
                </div>
                <div className={styles.content}>{address}</div>
              </div>
              <div className={styles.contentContainer}>
                <div>
                  <DirectionsSubwayIcon />
                </div>
                <div className={styles.content}>{mtr}</div>
              </div>
              <div className={styles.contactOutterContainer}>
                <div>
                  <ContactsIcon />
                </div>
                <div className={styles.contactContainer}>
                  {Object.entries(contacts).map(([key, contact]) => (
                    <div key={key} className={styles.contactInnerContainer}>
                      <div className={styles.contactKey}>{key}</div>
                      <div>{contact}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.businessHourOutterContainer}>
                <div>
                  <AccessTimeIcon />
                </div>
                <div className={styles.businessHourContainer}>
                  <Accordion elevation={0}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                      <Typography>Business Hours</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {Object.entries(businessHours).map(([key, businessHour]) => (
                        <div key={key} className={styles.businessHourInnerContainer}>
                          <div className={styles.businessHourKey}>{key}</div>
                          <div>{businessHour}</div>
                        </div>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
            <Tabs value={timeslotTab} onChange={(event: SyntheticEvent, newValue: number) => setTimeslotTab(newValue)}>
              {Object.keys(timetables).map((key) => (
                <Tab label={key} key={index} />
              ))}
            </Tabs>
            {Object.entries(timetables).map(([key, { timeslots }], innerIndex) => (
              <div hidden={timeslotTab !== innerIndex} key={innerIndex}>
                {timeslots.map(({ from }) => (
                  <Button key={key} className={styles.time} variant="outlined">
                    {from}
                  </Button>
                ))}
              </div>
            ))}
          </div>
        ))}
      </Paper>
    </div>
  );
};

export default ClinicDetail;
