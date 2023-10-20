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

  public resize(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  public scale(scaleX: number, scaleY: number) {
    this.context.scale(scaleX, scaleY);
  }

  public rotate(degrees: number) {
    this.context.rotate((Math.PI / 180) * degrees);
  }

  public translate(x: number, y: number) {
    this.context.translate(x, y);
  }

  public drawRect(x: number, y: number, width: number, height: number, color: string, fill: boolean = true) {
    this.context.fillStyle = color;
    this.context.strokeStyle = color;
    if (fill) {
      this.context.fillRect(x, y, width, height);
    } else {
      this.context.strokeRect(x, y, width, height);
    }
  }

  public drawCircle(x: number, y: number, radius: number, color: string, fill: boolean = true) {
    this.context.beginPath();
    this.context.arc(x, y, radius, 0, 2 * Math.PI);
    this.context.fillStyle = color;
    this.context.strokeStyle = color;
    if (fill) {
      this.context.fill();
    } else {
      this.context.stroke();
    }
  }

  public drawLine(x1: number, y1: number, x2: number, y2: number, color: string) {
    this.context.strokeStyle = color;
    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke();
  }

  public drawPath(points: { x: number; y: number }[], color: string, closePath: boolean = false) {
    this.context.strokeStyle = color;
    this.context.beginPath();
    this.context.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      this.context.lineTo(points[i].x, points[i].y);
    }
    if (closePath) {
      this.context.closePath();
    }
    this.context.stroke();
  }

  public drawText(text: string, x: number, y: number, font: string, size: number, color: string, align: CanvasTextAlign = "left") {
    this.context.font = `${size}px ${font}`;
    this.context.fillStyle = color;
    this.context.textAlign = align;
    this.context.fillText(text, x, y);
  }

  public drawImage(image: HTMLImageElement, x: number, y: number, width: number, height: number) {
    this.context.drawImage(image, x, y, width, height);
  }

  public exportImage(format: "png" | "jpeg" = "png"): string {
    return this.canvas.toDataURL(`image/${format}`);
  }
}
