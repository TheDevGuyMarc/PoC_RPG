import Camera from "./Camera";

export default class TopDownCamera extends Camera {
  private zoom: number;

  constructor(zoom: number = 1) {
    super();
    this.zoom = zoom;
  }

  public setZoom(zoom: number): void {
    this.zoom = zoom;
  }
}
