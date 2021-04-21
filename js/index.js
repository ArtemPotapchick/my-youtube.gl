const gloAcademyList = document.querySelector('.glo-academy-list');
const trendingList = document.querySelector('.trending-list');
const musicList = document.querySelector('.music-list');

const API_KEY = config.API_KEY;
const CLIENT_ID = config.CLIENT_ID;
console.log(gloAcademy);

const createCard = (dataVideo) => {
  console.log(dataVideo);
  const card = document.createElement('div');
  const imgUrl = dataVideo.snippet.thumbnails.high.url;
  const videoId = dataVideo.id.videoId;
  const titleVideo = dataVideo.snippet.title;
  const dateVideos = dataVideo.snippet.publishedAt;
  const channelTitle = dataVideo.snippet.channelTitle;

  card.classList.add('video-card');
  card.innerHTML =
    ` <div class="video-thumb">
              <a class="link-video youtube-modal" href="https://youtu.be/${videoId}">
                <img src="${imgUrl}"alt="" class="thumbnail">
              </a>
      </div>
    <h3 class="video-title">${titleVideo}</h3>
  <div class="video-info">
              <span class="video-counter">
                <span class="video-date">${(new Date(dateVideos).toLocaleString())}</span>
              </span>
    <span class="video-channel">${channelTitle}</span>
  </div>
</div>`;
  if (dataVideo.hasOwnProperty("statistics")) {
    const views = dataVideo.statistics.viewCount;
    card.innerHTML += `<span class="video-views">${views} views</span>`;
    return card;
  }
  return card;
};
const createList = (wrapper, listVideo) => {
  wrapper.textContent = '';
  listVideo.forEach(item => {
    const card = createCard(item);
    wrapper.append(card);
  });
};
createList(gloAcademyList, gloAcademy);
createList(trendingList, trending);
createList(musicList, music);
