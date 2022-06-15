type Arguments<T> = [T] extends [(...args: infer U) => any] ? U : [T] extends [void] ? [] : [T];

export declare class TinyEmitter<T extends any = any, R extends any = T> {
  on<E extends keyof T>(event: E, callback: T[E], ctx?: any): this;
  once<E extends keyof T>(event: E, callback: T[E], ctx?: any): this;
  off<E extends keyof T>(event: E, callback?: T[E]): this;
  emit<E extends keyof R>(event: E, ...args: Arguments<R[E]>): this;
}

interface TinyEmitterStatic {
  (): TinyEmitter;
  new(): TinyEmitter;
}

declare const Emitter: TinyEmitterStatic;

export default Emitter;
