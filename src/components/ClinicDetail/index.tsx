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
import { Clinic } from '@src/types/clinic';
import { useRouter } from 'next/router';
import { Locale } from '@src/types/common';
import { CONTACTS, DAYS, MTRS } from '@src/utils/constants/common';
import { clinicsTranslations } from '@src/translations';
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
    name: 'Health Centre2',
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

const ClinicDetail = ({ clinics }: Record<'clinics', Clinic[]>) => {
  const { locale } = useRouter();
  const clinicsTranslation = clinicsTranslations[locale as Locale];
  const [clinicTab, setClinicTab] = useState(0);
  const [timeslotTab, setTimeslotTab] = useState(0);

  return (
    <div className={styles.container}>
      <Paper elevation={3} className={styles.innerContainer}>
        <Tabs value={clinicTab} onChange={(event: SyntheticEvent, newValue: number) => setClinicTab(newValue)}>
          {clinics.map(({ district }, index) => (
            <Tab label={district['name'][locale as Locale]} key={`clinic-tabs-${index}`} />
          ))}
        </Tabs>
        {clinics.map(({ name, address, district, mtr, contacts, businessHours, reservationTime }, index) => (
          <div hidden={clinicTab !== index} key={`clinic-tab-${index}`}>
            <div>
              <div className={styles.contentContainer}>
                <div>
                  <HomeIcon />
                </div>
                <div className={styles.content}>{name[locale as Locale]}</div>
              </div>
              <div className={styles.contentContainer}>
                <div>
                  <MapIcon />
                </div>
                <div className={styles.content}>{address['name'][locale as Locale]}</div>
              </div>
              <div className={styles.contentContainer}>
                <div>
                  <DirectionsSubwayIcon />
                </div>
                <div className={styles.content}>
                  <div className={styles.mtrContainer}>
                    <div>
                      {clinicsTranslation['station']}
                      :&nbsp;
                    </div>
                    <div>{MTRS[mtr['station'] as keyof typeof MTRS][locale as Locale]}</div>
                  </div>
                  <div className={styles.mtrContainer}>
                    <div>
                      {clinicsTranslation['exit']}
                      :&nbsp;
                    </div>
                    <div>{mtr['exit']}</div>
                  </div>
                </div>
              </div>
              <div className={styles.contactOutterContainer}>
                <div>
                  <ContactsIcon />
                </div>
                <div className={styles.contactContainer}>
                  {Object.entries(contacts).map(([key, contact]) => (
                    <div key={key} className={styles.contactInnerContainer}>
                      <div>
                        {CONTACTS[key as keyof typeof CONTACTS][locale as Locale]}
                        :&nbsp;
                      </div>
                      <div>
                        {contact.map((item) => (
                          <div key={item}>{item}</div>
                        ))}
                      </div>
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
                      <Typography>{clinicsTranslation['businessHours']}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {Object.entries(businessHours).map(([key, businessHours]) => (
                        <div key={`clinic-hours-${key}`} className={styles.businessHourInnerContainer}>
                          <div className={styles.businessHourKey}>{DAYS[key as keyof typeof DAYS][locale as Locale]}</div>
                          <div>
                            {businessHours.map(({ fromTime, toTime }) => (
                              <div>
                                {fromTime}-{toTime}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
            {reservationTime && (
              <Tabs value={timeslotTab} onChange={(event: SyntheticEvent, newValue: number) => setTimeslotTab(newValue)}>
                {Object.keys(reservationTime).map((key) => (
                  <Tab label={key} key={`business-hour-tab-${key}`} />
                ))}
              </Tabs>
            )}
            {reservationTime &&
              Object.entries(reservationTime).map(([key, { timeslots }], innerIndex) => (
                <div hidden={timeslotTab !== innerIndex} key={`business-hour-tab-${innerIndex}`}>
                  {timeslots.map(({ fromTime }) => (
                    <Button key={`timeslot-${fromTime}-${district}`} className={styles.time} variant="outlined">
                      {fromTime}
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
