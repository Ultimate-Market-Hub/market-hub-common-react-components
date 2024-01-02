import EventEmitter from 'events';

export class JSONLexer extends EventEmitter {
  constructor(props) {
    super(props);
  }

  extract(content) {
    const json = JSON.parse(content);
    return Object.entries(json)
      .map(([namespace, value]) => {
        if (typeof value === 'string') {
          return { key: namespace, defaultValue: value };
        }
        return Object.entries(value).map(([key, defaultValue]) => ({
          key: `${namespace}.${key}`,
          defaultValue,
        }));
      })
      .flatMap((value) => value);
  }
}
