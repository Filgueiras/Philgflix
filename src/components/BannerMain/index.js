import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';
import imageBkg from '../../assets/HAL-9000-Screensaver.jpg';
//  import imageYoutube from '../../assets/maxresdefaultYoutube.jpg';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function BannerMain({
  videoTitle,
  videoDescription,
  url,
}) {
  const youTubeID = getYouTubeId(url);
  // const bgUrlOriginal = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;
  const bgImagem = imageBkg;
  // const bgUrlBase = imageYoutube;
  // eslint-disable-next-line max-len
  // const bgUrl = (bgUrlOriginal.length === bgUrlBase.length && bgUrlOriginal.height === bgUrlBase.height) ? bgImagem : bgUrlOriginal;
  const bgUrl = bgImagem;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {videoTitle}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {videoDescription}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive
            youtubeID={youTubeID}
          />
          <WatchButton>
            Assistir
          </WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
