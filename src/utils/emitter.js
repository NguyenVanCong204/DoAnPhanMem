import EventEmitter from 'events';

const _emitter=new EventEmitter();
_emitter.setMaxListeners(0);       //Không giới hạn số lượng thay đổi sự kiện trong 1 lần
export const emitter=_emitter;