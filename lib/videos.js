export const getCommonVideos = async URL => {
  // fetch data from youtube data api
  const YOUTUBE_API_KEY = process.env.YOUTUBE_DATA_API_KEY;
  const BASE_URL = `https://youtube.googleapis.com/youtube/v3`;

  try {
    const response = await fetch(`${BASE_URL}/${URL}&key=${YOUTUBE_API_KEY}`);
    const data = await response.json();

    if (data?.error) {
      console.error("youtube API error", data.error);
      return [];
    }

    return data.items.map(item => {
      return {
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id: item?.id?.videoId || item.id,
      };
    });
  } catch (err) {
    console.log("error : couldn't fetch videos data", err);
    return [];
  }
};

export function getVideos(searchQuery) {
  const URL = `search?part=snippet&maxResults=25&q=${searchQuery}`;
  return getCommonVideos(URL);
}

export function getPopularVideos() {
  const URL = "videos?part=snippet&chart=mostPopular&regionCode=US";
  return getCommonVideos(URL);
}
