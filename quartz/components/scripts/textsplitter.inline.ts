import SplitType from "split-type";

type Procedure = (...args: any[]) => void;

const debounce = <F extends Procedure>(func: F, delay: number): (...args: Parameters<F>) => void => {
  let timerId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<F>): void => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

interface TextSplitterOptions {
  resizeCallback?: () => void;
  splitTypeTypes?: any;
}

export class TextSplitter {
  private textElement: HTMLElement;
  private onResize: (() => void) | null;
  private splitText: any;
  private previousContainerWidth: number | null;

  constructor(textElement: HTMLElement, options: TextSplitterOptions = {}) {
    if (!textElement || !(textElement instanceof HTMLElement)) {
      throw new Error('Invalid text element provided.');
    }

    const { resizeCallback, splitTypeTypes } = options;
    const splitOptions = splitTypeTypes ? { types: splitTypeTypes } : {};

    this.textElement = textElement;
    this.onResize = typeof resizeCallback === 'function' ? resizeCallback : null;
    this.splitText = new SplitType(this.textElement, splitOptions);
    this.previousContainerWidth = null;

    if (this.onResize) {
      this.initResizeObserver();
    }
  }

  private initResizeObserver(): void {
    const resizeObserver = new ResizeObserver(
      debounce((entries: ResizeObserverEntry[]) => this.handleResize(entries), 100)
    );
    resizeObserver.observe(this.textElement);
  }

  private handleResize(entries: ResizeObserverEntry[]): void {
    const [{ contentRect }] = entries;
    const width = Math.floor(contentRect.width);
    if (this.previousContainerWidth && this.previousContainerWidth !== width) {
      this.splitText.split();
      this.onResize?.();
    }
    this.previousContainerWidth = width;
  }

  public revert(): void {
    return this.splitText.revert();
  }

  public getLines(): any[] {
    return this.splitText.lines;
  }

  public getWords(): any[] {
    return this.splitText.words;
  }

  public getChars(): any[] {
    return this.splitText.chars;
  }
}
