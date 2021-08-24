export interface StringedObjectKey { [key: string]: any }

// export interface RequestParams<T = any> extends T;
export type RequestParams<T = StringedObjectKey> = T;