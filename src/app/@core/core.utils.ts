export class CoreUtils {

  static stripHTMLTags(value: string): string {
    return value.replace(/<[^>]*>/g, '');
  }

}
