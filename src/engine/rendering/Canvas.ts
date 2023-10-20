import CanvasConfig from "./CanvasConfig";

export default class Canvas {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private config: CanvasConfig;

  constructor(canvasID: string, config: CanvasConfig) {
    this.canvas = document.getElementById(canvasID) as HTMLCanvasElement;
    this.canvas.width = config.width;
    this.canvas.height = config.height;
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.config = config;
  }

  public clear() {
    this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
  }
}
