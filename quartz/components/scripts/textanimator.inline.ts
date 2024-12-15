import { TextSplitter } from "./textsplitter.inline";
import gsap from "gsap";

const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];
const randomColors = ['#FF0000','#FF2E2E','#FC4B4B', '#00ffa2']; 
export class TextAnimator {
  private textElement: HTMLElement;
  private splitter: any;
  private originalChars: any;
  private originalColors: any;

  constructor(textElement: HTMLElement) {
    if (!textElement || !(textElement instanceof HTMLElement)) {
        throw new Error('Invalid text element provided.');
    }

    this.textElement = textElement;
    this.splitText();
  }

  private splitText(): void {
      this.splitter = new TextSplitter(this.textElement, {
        splitTypeTypes: 'words, chars',
      });

      this.originalChars = this.splitter.getChars().map((char: HTMLElement) => char.innerHTML);
      this.originalColors = this.splitter.getChars().map((char: HTMLElement) => getComputedStyle(char).color);
  }

  public animate(): void {
    this.reset();
    const chars = this.splitter.getChars();

    chars.forEach((char: HTMLElement, position: number) => {
      const initialHTML = char.innerHTML;
      let repeatCount = 0;

      gsap.fromTo(
        char,
        { opacity: 0 },
        {
          duration: 0.03,
          onStart: () => {
            gsap.set(char, { '--opa': 1 });
          },
          onComplete: () => {
            gsap.set(char, { innerHTML: initialHTML, delay: 0.03 });
          },
          repeat: 3,
          onRepeat: () => {
            repeatCount++;
            if (repeatCount === 1) {
              gsap.set(char, { '--opa': 0 });
            }
          },
          repeatRefresh: true,
          repeatDelay: 0.04,
          delay: (position + 1) * 0.07,
          innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
          opacity: 1,
      }
      );
    });
  }

  private updateHeadingText(newText: string): void {
      const heading = document.querySelector<HTMLHeadingElement>('.content h2');
      if (heading) {
          heading.style.setProperty('--heading', `'${newText}'`);
      }
  }

  public test_animate(): void {
    this.reset();
    const chars = this.splitter.getChars();
    const currentText = chars.map((c:HTMLElement) => c.innerHTML);

    chars.forEach((char: HTMLElement, position: number) => {
      const initialHTML = char.innerHTML;

      gsap.fromTo(
        char,
        { opacity: 0 },
        {
          repeat: 5,
          opacity: 1,
          duration: 0.03,
          repeatDelay: 0.07,
          repeatRefresh: true,
          innerHTML: () => {
            const randomChar = lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
            currentText[position] = randomChar;
            this.updateHeadingText(currentText.join(''));
            return randomChar;
          },
          onComplete: () => {
            gsap.set(char, { innerHTML: initialHTML, delay: 0.07 });
            currentText[position] = initialHTML;
            this.updateHeadingText(currentText.join(''));
          },
        }
      );
    });
  }

  public shuffle_animate(): void {
    this.reset();
    const chars = this.splitter.getChars();
    const currentText = chars.map((c:HTMLElement) => c.innerHTML);

    chars.forEach((char: HTMLElement, position: number) => {
      const initialHTML = char.innerHTML;
      const initialColor = getComputedStyle(char).color;

      gsap.fromTo(
        char,
        { opacity: 0 },
        {
          repeat: 2,
          opacity: 1,
          duration: 0.03,
          repeatDelay: 0.03,
          repeatRefresh: true,
          innerHTML: () => {
            const randomChar = lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
            const randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];
            currentText[position] = randomChar;
            gsap.set(char, { color: randomColor });
            return randomChar;
          },
          onComplete: () => {
            gsap.set(char, { innerHTML: initialHTML, color: initialColor, delay: 0.04 });
            currentText[position] = initialHTML;
          },
        }
      );
    });
  }

  public color_animate(): void {
    this.reset();
    const chars = this.splitter.getChars();

    chars.forEach((char: HTMLElement, position: number) => {
      const initialHTML = char.innerHTML;
      const initialColor = getComputedStyle(char).color;
      let repeatCount = 0;

      gsap.fromTo(
        char,
        { opacity: 0 },
        {
          duration: 0.03,
          onStart: () => {
            gsap.set(char, { '--opa': 1 });
          },
          onComplete: () => {
            gsap.set(char, { innerHTML: initialHTML, color: initialColor, delay: 0.03 });
          },
          repeat: 3,
          onRepeat: () => {
            repeatCount++;
            if (repeatCount === 1) {
              gsap.set(char, { '--opa': 0 });
            }
          },
          repeatRefresh: true,
          repeatDelay: 0.04,
          delay: (position + 1) * 0.07,
          innerHTML: () => {
            const randomChar = lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
            const randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];
            gsap.set(char, { color: randomColor });
            return randomChar;
          },
          opacity: 1,
      }
      );
    });
  }

  private reset(): void {
    const chars = this.splitter.getChars();
    chars.forEach((char: HTMLElement, index: number) => {
      gsap.killTweensOf(char);
      char.innerHTML = this.originalChars[index];
      char.style.color = this.originalColors[index]; 
    });
  }
}