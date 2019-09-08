export abstract class Content {
  abstract content: string;

  abstract getContent(): string;
  saveContent(text: string): void {
    console.log(text, this);
    this.content = text;
  };
}
