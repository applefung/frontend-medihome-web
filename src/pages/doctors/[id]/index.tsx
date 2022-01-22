import { Tabs } from "antd";
import { imageLoader } from "@src/utils/imageLoader";
import Image from "next/image";
import styles from "./styles.module.scss";
import LayoutWrapper from "@src/components/LayoutWrapper";
import { Fragment } from "react";
import BasicInformation from "@src/components/BasicInformation";
import Timetable from "@src/components/Timetable";

const { TabPane } = Tabs;

const basicInformation = [
  {
    title: "語言",
    description: "廣東話、英語、普通話",
  },
  {
    title: "服務",
    description: "全面眼睛檢查",
  },
];

const DoctorDetail = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <Fragment>
          <div className={styles.doctorContainer}>
            <Image
              loader={imageLoader}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8tDGShb27R7tW8DO25UZDNtJ7K6DX6dLVw&usqp=CAU"
              alt="Doctor Detail"
              width="100"
              height="100"
            />
            <div>
              <div>何存廣醫生</div>
              <div>眼科</div>
            </div>
          </div>
          <div className={styles.tabContainer}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Basic Information" key="1">
                <BasicInformation items={basicInformation} />
              </TabPane>
              <TabPane tab="Book Now" key="2">
                <Timetable />
              </TabPane>
            </Tabs>
          </div>
        </Fragment>
      </LayoutWrapper>
    </div>
  );
};

export default DoctorDetail;
