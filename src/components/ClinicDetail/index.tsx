import { Button, Tabs } from 'antd';
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

const { TabPane } = Tabs;

const ClinicDetail = () => {
  return (
    <div className={styles.container}>
      <Tabs defaultActiveKey="0">
        {clinics.map(({ name, address, mtr, district, contacts, businessHours, timetables }, index) => (
          <TabPane tab={district} key={index}>
            <div>
              <div>
                <div>{name}</div>
                <div>{address}</div>
                <div>{mtr}</div>
                {Object.entries(contacts).map(([key, contact]) => (
                  <div key={index} className={styles.contactContainer}>
                    <div className={styles.contactKey}>{key}</div>
                    <div>{contact}</div>
                  </div>
                ))}
                {Object.entries(businessHours).map(([key, businessHour]) => (
                  <div key={index} className={styles.businessHourContainer}>
                    <div className={styles.businessHourKey}>{key}</div>
                    <div>{businessHour}</div>
                  </div>
                ))}
              </div>
              <Tabs defaultActiveKey="0">
                {Object.entries(timetables).map(([key, { timeslots }]) => (
                  <TabPane tab={key} key={key}>
                    {timeslots.map(({ from }, timeslotIndex) => (
                      <Button key={timeslotIndex} className={styles.time}>
                        {from}
                      </Button>
                    ))}
                  </TabPane>
                ))}
              </Tabs>
            </div>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default ClinicDetail;
