export class objectFactory {
    public static create<TEntity>(ctor: new(...args: any[]) =>TEntity, ...params: any[]): TEntity {
        return new ctor(...params);
    }
}