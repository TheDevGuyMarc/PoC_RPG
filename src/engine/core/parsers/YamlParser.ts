import * as yaml from 'js-yaml';
import Parser from "./Parser";

export default class YAMLParser extends Parser {
  parse(yamlString: string): any {
    return yaml.load(yamlString, { json: true }); // Add { json: true } for parsing JSON-like YAML
  }

  stringify(data: any): string {
    return yaml.dump(data, { json: true });
  }
}
