export interface Formatter {
  format(delta: Delta, original: any): string;
}

export interface HtmlFormatter extends Formatter {
  /**
   * Set whether to show or hide unchanged parts of a diff.
   * @param show Whether to show unchanged parts
   * @param node The root element the diff is contained within. (Default: body)
   * @param delay Transition time in ms. (Default: no transition)
   */
  showUnchanged(show: boolean, node?: Element | null, delay?: number): void;

  /**
   * An alias for showUnchanged(false, ...)
   * @param node The root element the diff is contained within (Default: body)
   * @param delay Transition time in ms. (Default: no transition)
   */
  hideUnchanged(node?: Element | null, delay?: number): void;
}

export interface Delta {
  [key: string]: any;

  [key: number]: any;
}

export const formatters: {
  annotated: Formatter;
  console: Formatter;
  html: HtmlFormatter;
};

export const console: Formatter;
