export interface FrontityState {
  service: Service;
  theme: Theme;
  router: Router;
  user: User;
  source: Source;
  abtest: Abtest;
  feature: Feature;
  frontity: Frontity;
}

export interface Abtest {
  serverExperiments: ServerExperiments;
  webExperiments: WebExperiments;
  useServerExperiments: boolean;
  useWebExperiments: boolean;
}

export interface ServerExperiments {
  isReady: boolean;
  params: StateClass;
  proxyApiUrlPrefix: string;
  values: StateClass;
}

export interface StateClass {}

export interface WebExperiments {
  isReady: boolean;
  values: StateClass;
}

export interface Feature {
  toggle: Toggle;
  useTCC: boolean;
  isReady: boolean;
}

export interface Toggle {
  showPlaylistEmbed: boolean;
}

export interface Frontity {
  name: string;
  match: string[];
  mode: string;
  debug: boolean;
  platform: string;
  rendering: string;
  hmr: boolean;
  initialLink: string;
  options: Options;
  packages: string[];
  title: string;
  url: string;
}

export interface Options {
  publicPath: string;
}

export interface Router {
  link: string;
  state: StateClass;
  autoFetch: boolean;
}

export interface Service {
  bytedEnv: StateClass;
  config: Config;
  prefix: string;
  env: string;
  isReady: boolean;
}

export interface Config {
  psm: string;
}

export interface Source {
  url: string;
  data: Data;
  subdirectory: string;
  params: StateClass;
  category: StateClass;
  tag: StateClass;
  post: StateClass;
  page: StateClass;
  author: StateClass;
  attachment: StateClass;
  type: StateClass;
  taxonomy: StateClass;
  useCaseSensitiveUrls: boolean;
  isReady: boolean;
  referrer: string;
  redirections: string;
}

export type Data = Record<string, EmbedPostData> & {
  strategy: Strategy;
};

export interface EmbedPostData {
  isFetching: boolean;
  isReady: boolean;
  route: string;
  link: string;
  query: StateClass;
  page: number;
  customErrorCode: number;
  videoData: VideoData;
  code: number;
  isError: boolean;
  pageName: string;
}

export interface VideoData {
  itemInfos: ItemInfos;
  authorInfos: AuthorInfos;
  musicInfos: MusicInfos;
  authorStats: AuthorStats;
  challengeInfoList: ChallengeInfoList[];
  duetInfo: null;
  textExtra: TextExtra[];
  stickerTextList: any[];
}

export interface AuthorInfos {
  secUid: string;
  userId: string;
  uniqueId: string;
  nickName: string;
  signature: string;
  verified: boolean;
  covers: string[];
  coversMedium: string[];
  coversLarger: string[];
  isSecret: boolean;
  secret: boolean;
  relation: number;
  roomId: string;
}

export interface AuthorStats {
  followingCount: number;
  followerCount: number;
  heartCount: string;
  videoCount: number;
  diggCount: number;
}

export interface ChallengeInfoList {
  challengeId: string;
  challengeName: string;
  isCommerce: boolean;
  text: string;
  covers: string[];
  coversMedium: string[];
  coversLarger: string[];
  splitTitle: string;
}

export interface ItemInfos {
  id: string;
  text: string;
  stitchEnabled: boolean;
  shareEnabled: boolean;
  createTime: string;
  authorId: string;
  musicId: string;
  covers: string[];
  coversOrigin: string[];
  shareCover: string[];
  coversDynamic: string[];
  video: Video;
  diggCount: number;
  shareCount: number;
  playCount: number;
  commentCount: number;
  isOriginal: boolean;
  isOfficial: boolean;
  isActivityItem: boolean;
  secret: boolean;
  forFriend: boolean;
  vl1: boolean;
  warnInfo: any[];
  liked: boolean;
  commentStatus: number;
  showNotPass: boolean;
  itemMute: boolean;
}

export interface Video {
  urls: string[];
  videoMeta: VideoMeta;
}

export interface VideoMeta {
  width: number;
  height: number;
  ratio: number;
  duration: number;
}

export interface MusicInfos {
  musicId: string;
  musicName: string;
  authorName: string;
  original: boolean;
  playUrl: string[];
  covers: string[];
  coversMedium: string[];
  coversLarger: string[];
}

export interface TextExtra {
  AwemeId: string;
  Start: number;
  End: number;
  HashtagName: string;
  HashtagId: string;
  Type: number;
  UserId: string;
  IsCommerce: boolean;
  UserUniqueId: string;
  SecUid: string;
  SubType: number;
}

export interface Strategy {
  page_context: PageContext;
  wrappers: Wrapper[];
}

export interface PageContext {
  biz_name: string;
  idc: string;
  page_name: string;
  region: string;
}

export interface Wrapper {
  jump_link_type: string;
  launch_type: string;
  name: string;
  wrapper_url: WrapperURL;
}

export interface WrapperURL {
  extra: string;
  url_fallback: string;
  url_schemes: string[];
}

export interface Theme {
  siteName: string;
  siteBaseUrl: string;
  favIconHref: string;
  isI18nSupported: boolean;
  lang: string;
  langs: string[];
  defaultLang: string;
  isPhoenix: boolean;
  globalQueryParams: GlobalQueryParams;
  sourceComponents: SourceComponents;
  shareComponentConfig: ShareComponentConfig;
  proxyApi: string;
  tracking: Tracking;
  embedApi: string;
  mssdk: Mssdk;
  shareApi: string;
}

export interface GlobalQueryParams {
  referer_url: string;
  refer: string;
}

export interface Mssdk {
  load: boolean;
  appId: number;
  region: string;
  url: string;
  mode: number;
  pathList: string[];
}

export interface ShareComponentConfig {
  bizName: string;
  pageName: string;
}

export interface SourceComponents {
  vidab: string;
  partnerSource: string;
}

export interface Tracking {
  slardarWeb: SlardarWeb;
  tea: Tea;
}

export interface SlardarWeb {
  bid: string;
  sdkUrl: string;
}

export interface Tea {
  site_name: string;
  app_id: number;
  commonParams: CommonParams;
  enable_ab_test: boolean;
  idc: string;
  ab_channel_domain: string;
  channel_domain: string;
}

export interface CommonParams {
  page_type: boolean;
}

export interface User {
  shouldGetLoginInfo: boolean;
  shouldGetIpInfo: boolean;
  region: string;
  isReady: boolean;
  ttwid: string;
  proxyApi: string;
}
