import CanvasConfig from "./CanvasConfig";
import {text} from "stream/consumers";

export default class Canvas {
  private _canvas: HTMLCanvasElement;
  private _context: CanvasRenderingContext2D;
  private _config: CanvasConfig;

  constructor(canvasID: string, config: CanvasConfig) {
    this._canvas = document.getElementById(canvasID) as HTMLCanvasElement;
    this._canvas.width = config.width;
    this._canvas.height = config.height;
    this._context = this._canvas.getContext('2d') as CanvasRenderingContext2D;
    this._config = config;
  }

  get canvas(): HTMLCanvasElement {
    return this._canvas;
  }

  set canvas(value: HTMLCanvasElement) {
    this._canvas = value;
  }

  get context(): CanvasRenderingContext2D {
    return this._context;
  }

  set context(value: CanvasRenderingContext2D) {
    this._context = value;
  }

  get config(): CanvasConfig {
    return this._config;
  }

  set config(value: CanvasConfig) {
    this._config = value;
  }

  public clear() {
    this._context.clearRect(0,0, this._canvas.width, this._canvas.height);
  }

  public resize(width: number, height: number) {
    this._canvas.width = width;
    this._canvas.height = height;
  }

  public scale(scaleX: number, scaleY: number) {
    this._context.scale(scaleX, scaleY);
  }

  public rotate(degrees: number) {
    this._context.rotate((Math.PI / 180) * degrees);
  }

  public translate(x: number, y: number) {
    this._context.translate(x, y);
  }

  public drawRect(x: number, y: number, width: number, height: number, color: string, fill: boolean = true) {
    this._context.fillStyle = color;
    this._context.strokeStyle = color;
    if (fill) {
      this._context.fillRect(x, y, width, height);
    } else {
      this._context.strokeRect(x, y, width, height);
    }
  }

  public drawCircle(x: number, y: number, radius: number, color: string, fill: boolean = true) {
    this._context.beginPath();
    this._context.arc(x, y, radius, 0, 2 * Math.PI);
    this._context.fillStyle = color;
    this._context.strokeStyle = color;
    if (fill) {
      this._context.fill();
    } else {
      this._context.stroke();
    }
  }

  public drawLine(x1: number, y1: number, x2: number, y2: number, color: string) {
    this._context.strokeStyle = color;
    this._context.beginPath();
    this._context.moveTo(x1, y1);
    this._context.lineTo(x2, y2);
    this._context.stroke();
  }

  public drawPath(points: { x: number; y: number }[], color: string, closePath: boolean = false) {
    this._context.strokeStyle = color;
    this._context.beginPath();
    this._context.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      this._context.lineTo(points[i].x, points[i].y);
    }
    if (closePath) {
      this._context.closePath();
    }
    this._context.stroke();
  }

  public drawText(text: string, x: number, y: number, font: string, size: number, color: string, align: CanvasTextAlign = "left") {
    this._context.font = `${size}px ${font}`;
    this._context.fillStyle = color;
    this._context.textAlign = align;
    this._context.fillText(text, x, y);
  }

  public drawImage(image: HTMLImageElement, x: number, y: number, width: number, height: number) {
    this._context.drawImage(image, x, y, width, height);
  }

  public exportImage(format: "png" | "jpeg" = "png"): string {
    return this._canvas.toDataURL(`image/${format}`);
  }
}
