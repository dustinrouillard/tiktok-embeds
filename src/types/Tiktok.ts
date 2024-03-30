export interface TikTokData {
  id: string;
  desc: string;
  createTime: number;
  scheduleTime: number;
  video: Video;
  author: string;
  authorId: string;
  music: Music;
  challenges: Challenge[];
  stats: Stats;
  isActivityItem: boolean;
  duetInfo: DuetInfo;
  warnInfo: any[];
  originalItem: boolean;
  officalItem: boolean;
  textExtra: TextExtra[];
  secret: boolean;
  forFriend: boolean;
  digged: boolean;
  itemCommentStatus: number;
  showNotPass: boolean;
  vl1: boolean;
  takeDown: number;
  itemMute: boolean;
  effectStickers: any[];
  authorStats: AuthorStats;
  privateItem: boolean;
  duetEnabled: boolean;
  stitchEnabled: boolean;
  stickersOnItem: any[];
  isAd: boolean;
  shareEnabled: boolean;
  comments: any[];
  duetDisplay: number;
  stitchDisplay: number;
  indexEnabled: boolean;
}

export interface Author {
  id: string;
  shortId: string;
  uniqueId: string;
  nickname: string;
  avatarLarger: string;
  avatarMedium: string;
  avatarThumb: string;
  signature: string;
  createTime: number;
  verified: boolean;
  secUid: string;
  ftc: boolean;
  relation: number;
  openFavorite: boolean;
  commentSetting: number;
  duetSetting: number;
  stitchSetting: number;
  privateAccount: boolean;
  secret: boolean;
  isADVirtual: boolean;
  roomId: string;
}

export interface AuthorStats {
  followerCount: number;
  followingCount: number;
  heart: number;
  heartCount: number;
  videoCount: number;
  diggCount: number;
}

export interface Challenge {
  id: string;
  title: string;
  desc: string;
  profileLarger: string;
  profileMedium: string;
  profileThumb: string;
  coverLarger: string;
  coverMedium: string;
  coverThumb: string;
  isCommerce: boolean;
}

export interface DuetInfo {
  duetFromId: string;
}

export interface Music {
  id: string;
  title: string;
  playUrl: string;
  coverLarge: string;
  coverMedium: string;
  coverThumb: string;
  authorName: string;
  original: boolean;
  duration: number;
  album: string;
  scheduleSearchTime: number;
}

export interface Stats {
  diggCount: number;
  shareCount: number;
  commentCount: number;
  playCount: number;
}

export interface TextExtra {
  awemeId: string;
  start: number;
  end: number;
  hashtagId: string;
  hashtagName: string;
  type: number;
  userId: string;
  isCommerce: boolean;
  userUniqueId: string;
  secUid: string;
}

export interface Video {
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
  shareCover: string[];
  reflowCover: string;
  bitrate: number;
  encodedType: string;
  format: string;
  videoQuality: string;
  encodeUserTag: string;
  codecType: string;
  definition: string;
}

export interface TiktokAPI {
  extra: Extra;
  itemInfo: ItemInfo;
  log_pb: LogPb;
  statusCode: number;
  status_code: number;
}

export interface Extra {
  fatal_item_ids: any[];
  logid: string;
  now: number;
}

export interface ItemInfo {
  itemStruct: ItemStruct;
}

export interface ItemStruct {
  author: Author;
  challenges: Challenge[];
  createTime: number;
  desc: string;
  digged: boolean;
  duetDisplay: number;
  duetEnabled: boolean;
  forFriend: boolean;
  id: string;
  itemCommentStatus: number;
  music: Music;
  officalItem: boolean;
  originalItem: boolean;
  privateItem: boolean;
  secret: boolean;
  shareEnabled: boolean;
  stats: Stats;
  stitchDisplay: number;
  stitchEnabled: boolean;
  textExtra: TextExtra[];
  video: Video;
}

export interface Author {
  avatarLarger: string;
  avatarMedium: string;
  avatarThumb: string;
  commentSetting: number;
  duetSetting: number;
  ftc: boolean;
  id: string;
  isADVirtual: boolean;
  nickname: string;
  openFavorite: boolean;
  privateAccount: boolean;
  relation: number;
  secUid: string;
  secret: boolean;
  signature: string;
  stitchSetting: number;
  uniqueId: string;
  verified: boolean;
}

export interface Challenge {
  coverLarger: string;
  coverMedium: string;
  coverThumb: string;
  desc: string;
  id: string;
  profileLarger: string;
  profileMedium: string;
  profileThumb: string;
  title: string;
}

export interface Music {
  album: string;
  authorName: string;
  coverLarge: string;
  coverMedium: string;
  coverThumb: string;
  duration: number;
  id: string;
  original: boolean;
  playUrl: string;
  title: string;
}

export interface Stats {
  commentCount: number;
  diggCount: number;
  playCount: number;
  shareCount: number;
}

export interface TextExtra {
  awemeId: string;
  end: number;
  hashtagId: string;
  hashtagName: string;
  isCommerce: boolean;
  start: number;
  subType: number;
  type: number;
}

export interface Video {
  bitrate: number;
  bitrateInfo: BitrateInfo[];
  codecType: string;
  cover: string;
  definition: string;
  downloadAddr: string;
  duration: number;
  dynamicCover: string;
  encodeUserTag: string;
  encodedType: string;
  format: string;
  height: number;
  id: string;
  originCover: string;
  playAddr: string;
  ratio: string;
  videoQuality: string;
  volumeInfo: VolumeInfo;
  width: number;
  zoomCover: { [key: string]: string };
}

export interface BitrateInfo {
  Bitrate: number;
  CodecType: string;
  GearName: string;
  PlayAddr: PlayAddr;
  QualityType: number;
}

export interface PlayAddr {
  DataSize: number;
  FileCs: string;
  FileHash: string;
  Uri: string;
  UrlKey: string;
  UrlList: string[];
}

export interface VolumeInfo {
  Loudness: number;
  Peak: number;
}

export interface LogPb {
  impr_id: string;
}
