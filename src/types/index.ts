import { CookieJar } from 'request';

export interface DownloaderConstructor {
  progress: boolean;
  proxy: string | string[];
  noWaterMark: boolean;
  headers: Headers;
  filepath: string;
  bulk: boolean;
  cookieJar: CookieJar;
}

export interface DownloadParams {
  zip: boolean;
  folder: string;
  collector: PostCollector[];
  fileName: string;
  asyncDownload: number;
}

export interface RequestQuery {
  // Define properties based on usage
}

export interface UserMetadata {
  // Define properties based on usage
}

export interface HashtagMetadata {
  // Define properties based on usage
}

export interface MusicMetadata {
  // Define properties based on usage
}

export interface History {
  // Define properties based on usage
}

export interface HistoryItem {
  // Define properties based on usage
}

export interface FeedItems {
  // Define properties based on usage
}

export interface ItemListData {
  // Define properties based on usage
}

export interface TikTokMetadata {
  // Define properties based on usage
}

export interface WebHtmlUserMetadata {
  // Define properties based on usage
}

export interface VideoMetadata {
  // Define properties based on usage
}

export interface PostCollector {
  id: string;
  desc: string;
  createTime: number;
  video: {
    id: string;
    height: number;
    width: number;
    duration: number;
    ratio: string;
    cover: string;
    originCover: string;
    dynamicCover: string;
    playAddr: string;
    downloadAddr: string;
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
    coverMedium: string;
    coverLarge: string;
    authorName: string;
    original: boolean;
  };
  challenges: Array<{
    id: string;
    title: string;
    desc: string;
    profileLarger: string;
  }>;
  stats: {
    diggCount: number;
    shareCount: number;
    commentCount: number;
    playCount: number;
  };
  duetInfo: {
    duetFromId: string;
  };
  originalItem: boolean;
  officalItem: boolean;
  textExtra: Array<{
    awemeId: string;
    start: number;
    end: number;
    hashtagName: string;
    hashtagId: string;
    type: number;
    userId: string;
    isCommerce: boolean;
    userUniqueId: string;
    secUid: string;
  }>;
  secret: boolean;
  forFriend: boolean;
  digged: boolean;
  itemCommentStatus: number;
  showNotPass: boolean;
  vl1: boolean;
  itemMute: boolean;
  effectStickers: Array<{
    name: string;
    ID: string;
  }>;
  authorStats: {
    followingCount: number;
    followerCount: number;
    heartCount: number;
    videoCount: number;
    diggCount: number;
    heart: number;
  };
  privateItem: boolean;
  duetEnabled: boolean;
  stitchEnabled: boolean;
  stickersOnItem: Array<{
    stickerType: number;
    stickerText: string[];
  }>;
  isAd: boolean;
  shareEnabled: boolean;
  comments: any[];
  downloaded: boolean;
  videoUrlNoWaterMark?: string;
}

export type ScrapeType = 'user' | 'hashtag' | 'trend' | 'music' | 'video';

export interface TikTokConstructor {
  download: boolean;
  filepath: string;
  filetype: string;
  proxy: string | string[];
  strictSSL: boolean;
  asyncDownload: number;
  asyncScraping: number;
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
  webhook?: {
    good: number;
    bad: number;
  };
  headers?: Headers;
  csv?: string;
  json?: string;
  zip?: string;
}

export interface Headers {
  'user-agent': string;
  referer?: string;
  cookie?: string;
}

export interface Options {
  number?: number;
  since?: number;
  download?: boolean;
  zip?: boolean;
  asyncDownload?: number;
  asyncScraping?: number;
  proxy?: string | string[];
  filepath?: string;
  filetype?: string;
  progress?: boolean;
  event?: boolean;
  by_user_id?: boolean;
  noWaterMark?: boolean;
  hdVideo?: boolean;
  timeout?: number;
  tac?: string;
  signature?: string;
  verifyFp?: string;
  headers?: Headers;
  proxyFile?: string;
  sessionFile?: string;
  sessionList?: string[];
  remove?: string;
  historyPath?: string;
  asyncBulk?: number;
}

export interface TikTokApiResponse {
  // Define properties based on usage
}

export interface TikTokVideo {
  aweme_id: string;
  title: string;
  create_time: number;
  video_id: string;
  cover: string;
  play: string;
  wmplay: string;
  duration: number;
  author: {
    id: string;
    unique_id: string;
    nickname: string;
    avatar: string;
  };
  music_info: {
    id: string;
    title: string;
    play: string;
    cover: string;
    author: string;
    original: boolean;
  };
  digg_count: number;
  share_count: number;
  comment_count: number;
  play_count: number;
}

// Re-export types that should not be directly exported
export type { Proxy } from 'http';
export type { Headers as HttpHeaders } from 'http';
