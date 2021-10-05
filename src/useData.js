import {useState, useEffect} from 'react'
import { csv } from 'd3'

const csvURL = "https://raw.githubusercontent.com/govex/COVID-19/master/data_tables/vaccine_data/global_data/time_series_covid19_vaccine_global.csv"

export const useData = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const row = d => {
      d.Doses_Admin = +d.Doses_admin
      d.People_Fully_Vaccinated = +d.People_fully_vaccinated
      return d
    }
    csv(csvURL, row).then(data => {
      setData(data.filter(d => {
        if(d.Report_Date_String === '2021-06-01') return true
        else return null
      }))
    })
  }, [])
  return data.slice(0, 10)
}