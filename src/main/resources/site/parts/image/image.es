//import {toStr} from '/lib/util';
import portal from '/lib/xp/portal';

export const get = (request) => {
  //log.debug(`request:${toStr(request)}`);

  const content = portal.getContent();
  //log.debug(`content:${toStr(content)}`);

  const component = portal.getComponent();
  //log.debug(`component:${toStr(component)}`);

  return {
    body: `<img src="${portal.imageUrl({
      id: content._id,
      scale: `width(${component.config.width})`
    })}"/>`,
    contentType: 'text/html;charset=utf-8'
  }
} // export const get
