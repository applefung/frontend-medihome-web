import { Clinic } from '@src/types/clinic';
import styles from './styles.module.scss';

interface ClinicTabProps extends Pick<Clinic, 'contacts' | 'businessHours'> {
  value: number;
  index: number;
  name: string;
  address: string;
  mtr: string;
}

const ClinicTab = ({ value, index, name, address, mtr, contacts, businessHours }: ClinicTabProps) => {
  return (
    <div hidden={value !== index}>
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
      {/* <Tabs value={timeslotTab} onChange={(event: SyntheticEvent, newValue: number) => setTimeslotTab(newValue)}>
        {Object.entries(timetables).map(([key, { timeslots }], innerIndex) => (
          <div value={timeslotTab} index={innerIndex}>
            {timeslots.map(({ from }) => (
              <Button key={key} className={styles.time} variant="outlined">
                {from}
              </Button>
            ))}
          </div>
        ))}
      </Tabs> */}
    </div>
  );
};

export default ClinicTab;
