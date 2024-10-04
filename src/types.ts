import { CookieJar } from 'request';
import { Ora } from 'ora';

export interface PostCollector {
  id: string;
  desc: string;
  createTime: number;
  video: {
    id: string;
    cover: string;
    playAddr: string;
    downloadAddr: string;
    duration: number;
  };
  author: {
    id: string;
    uniqueId: string;
    nickname: string;
    avatarThumb: string;
  };
  music: {
    id: string;
    title: string;
    playUrl: string;
    coverThumb: string;
    authorName: string;
    original: boolean;
  };
  stats: {
    diggCount: number;
    shareCount: number;
    commentCount: number;
    playCount: number;
  };
  downloaded: boolean;
  videoUrlNoWaterMark?: string;
  videoApiUrlNoWaterMark?: string;
}

export type ScrapeType = 'user' | 'hashtag' | 'trend' | 'music' | 'video';

export interface TikTokConstructor {
  download: boolean;
  filepath: string;
  filetype: string;
  proxy: string | string[];
  strictSSL: boolean;
  asyncDownload: number;
  cli: boolean;
  event: boolean;
  progress: boolean;
  input: string;
  number: number;
  since: number;
  type: ScrapeType;
  by_user_id: boolean;
  store_history: boolean;
  historyPath: string;
  noWaterMark: boolean;
  useTestEndpoints: boolean;
  fileName: string;
  timeout: number;
  bulk: boolean;
  zip: boolean;
  test: boolean;
  hdVideo: boolean;
  webHookUrl: string;
  method: string;
  headers: Headers;
  verifyFp: string;
  sessionList: string[];
}

export interface Result {
  collector: PostCollector[];
  // Add other properties as needed
}

// Add other necessary interfaces (MusicMetadata, RequestQuery, History, Proxy, FeedItems, ItemListData, TikTokMetadata, UserMetadata, HashtagMetadata, Headers, WebHtmlUserMetadata, VideoMetadata)

export interface Headers {
  // Define header properties
}

export interface Options {
  // Define options properties
}

// Add other necessary type definitions