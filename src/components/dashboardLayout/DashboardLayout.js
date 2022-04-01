import React from 'react';
import StatCards from '../statCards/StatCards';
import TableCustom from '../tableCustom/TableCustom';
import styles from './dashboardLayout.module.css';

const DashboardLayout = () => {

  const statCardData = [
    {
      image: '',
      heading: "Today's Appointment",
      data: '',
    },
    {
      image: '',
      heading: 'Total Appointments',
      data: '',
    },
    {
      image: '',
      heading: 'Total Patient',
      data: '',
    },
  ]

  return (
    <main className={styles.layoutWrapper}>
      <div className={'mainLayout'}>
        <div className={styles.statsContainer}>
          {
            statCardData.map((card, index) =>
              <StatCards
                image={card.image}
                heading={card.heading}
                data={card.data}
                key={index}
              />
            )
          }
        </div>
        <h2 className={styles.heading}>Patient Appointment</h2>
        <TableCustom />
      </div>
    </main >
  )
}

export default DashboardLayout
