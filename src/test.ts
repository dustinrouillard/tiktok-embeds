import { videoFromIdOrWeb } from "./helpers/video";

(async () => {
  const test = await videoFromIdOrWeb('ZT8WXquk6');
  console.log('test', 'test', test);
  // const test2 = await videoFromIdOrWeb('@mikecakez/video/7329968713464073518');
  // console.log('test2', 'test2', test2);
})();