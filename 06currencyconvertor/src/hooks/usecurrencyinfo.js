import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
    .then((res) => res.json())
    .then((res) => {
      setData(res.rates)
      console.log("Fetched data:", res.rates)
    })
    .catch((err) => {
      console.error("Error fetching data:", err)
      setData({})
    })
}, [currency])

  return data
}

export default useCurrencyInfo
