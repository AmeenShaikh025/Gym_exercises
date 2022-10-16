export const exerciseOptions = {
  method: 'GET',
  headers: {
    // 'X-RapidAPI-Key': 'process.env.REACT_APP_RAPID_API_KEY',
    'X-RapidAPI-Key': '6dBriYSfzemshc67Oz0RFwp4mAEop1WUpFbjsn344QARL1gufr',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youTubeVideoOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '6dBriYSfzemshc67Oz0RFwp4mAEop1WUpFbjsn344QARL1gufr'
  }
};

export const fetchData = async(url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}