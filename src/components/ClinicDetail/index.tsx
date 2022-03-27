import { SyntheticEvent, useState } from 'react';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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
          {
            from: '14:00:00',
            to: '14:15:00',
            available: true,
          },
        ],
      },
    },
  },
  {
    id: 'dsad',
    name: 'Health Integrated Medical and Skin Laser Centre',
    address: 'Rm 1401, 14/F, Chinachem Cameron Centre, 42 Cameron Road, Tsim Sha Tsui',
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
      <Tabs value={clinicTab} onChange={(event: SyntheticEvent, newValue: number) => setClinicTab(newValue)}>
        {clinics.map(({ district }, index) => (
          <Tab label={district} key={index} />
        ))}
        {clinics.map(({ name, address, mtr, district, contacts, businessHours, timetables }, index) => (
          <div hidden={clinicTab !== index} key={index}>
            <div>
              <div>{name}</div>
              <div>{address}</div>
              <div>{mtr}</div>
              {Object.entries(contacts).map(([key, contact]) => (
                <div key={key} className={styles.contactContainer}>
                  <div className={styles.contactKey}>{key}</div>
                  <div>{contact}</div>
                </div>
              ))}
              {Object.entries(businessHours).map(([key, businessHour]) => (
                <div key={key} className={styles.businessHourContainer}>
                  <div className={styles.businessHourKey}>{key}</div>
                  <div>{businessHour}</div>
                </div>
              ))}
            </div>
            <Tabs value={timeslotTab} onChange={(event: SyntheticEvent, newValue: number) => setTimeslotTab(newValue)}>
              {Object.entries(timetables).map(([key, { timeslots }], innerIndex) => (
                <div hidden={timeslotTab !== innerIndex} key={innerIndex}>
                  {timeslots.map(({ from }) => (
                    <Button key={key} className={styles.time} variant="outlined">
                      {from}
                    </Button>
                  ))}
                </div>
              ))}
            </Tabs>
          </div>
        ))}
      </Tabs>
    </div>
  );
};

export default ClinicDetail;
