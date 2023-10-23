import CanvasConfig from "../src/engine/rendering/CanvasConfig";
import Canvas from "../src/engine/rendering/Canvas";

// Mock CanvasConfig for testing
const mockConfig: CanvasConfig = {
  height: 0,
  width: 0
};

describe("Canvas Class", () => {
  let canvas: Canvas;

  beforeEach(() => {
    // Create a new canvas for each test
    canvas = new Canvas("1", mockConfig);
  });

  it("should draw a filled circle", () => {
    const x = 100;
    const y = 100;
    const radius = 40;
    const color = "blue";
    canvas.drawCircle(x, y, radius, color, true);

    // Verify that the color of a pixel at the center of the circle matches the specified color.
    const pixelColor = canvas.context.getImageData(x, y, 1, 1).data;
    expect(`rgb(${pixelColor[0]}, ${pixelColor[1]}, ${pixelColor[2]})`).toBe(color);
  });

  it("should draw a stroked circle", () => {
    const x = 100;
    const y = 100;
    const radius = 40;
    const color = "orange";
    canvas.drawCircle(x, y, radius, color, false);

    // Verify that the color of a pixel on the circle's border matches the specified color.
    const pixelColor = canvas.context.getImageData(x + radius, y, 1, 1).data;
    expect(`rgb(${pixelColor[0]}, ${pixelColor[1]}, ${pixelColor[2]})`).toBe(color);
  });

  it("should draw a line", () => {
    const x1 = 50;
    const y1 = 50;
    const x2 = 150;
    const y2 = 150;
    const color = "purple";
    canvas.drawLine(x1, y1, x2, y2, color);

    // Verify that the color of a pixel on the line matches the specified color.
    const pixelColor = canvas.context.getImageData(x2, y2, 1, 1).data;
    expect(`rgb(${pixelColor[0]}, ${pixelColor[1]}, ${pixelColor[2]})`).toBe(color);
  });

  it("should draw a path", () => {
    const points = [
      { x: 50, y: 50 },
      { x: 100, y: 50 },
      { x: 100, y: 100 },
    ];
    const color = "teal";
    canvas.drawPath(points, color, true);

    // Verify that the color of a pixel inside the path matches the specified color.
    const pixelColor = canvas.context.getImageData(75, 75, 1, 1).data;
    expect(`rgb(${pixelColor[0]}, ${pixelColor[1]}, ${pixelColor[2]})`).toBe(color);
  });

  it("should draw text", () => {
    const text = "Hello, World!";
    const x = 50;
    const y = 50;
    const font = "Arial";
    const size = 16;
    const color = "black";
    canvas.drawText(text, x, y, font, size, color);

    // Verify that the color of a pixel within the text matches the specified color.
    const pixelColor = canvas.context.getImageData(x + 5, y + 5, 1, 1).data; // Assuming text appears at (x + 5, y + 5)
    expect(`rgb(${pixelColor[0]}, ${pixelColor[1]}, ${pixelColor[2]})`).toBe(color);
  });

  /*it("should draw an image", () => {
    // Create a mock image for testing
    const image = new Image();
    image.src = "test.jpg"; // Replace with a valid image URL

    const x = 50;
    const y = 50;
    const width = 100;
    const height = 80;
    canvas.drawImage(image, x, y, width, height);

    // No easy way to directly test image drawing. You can visually inspect the canvas or
    // check for image loading using a callback and a flag.
    // For simplicity, you can use a flag like 'imageLoaded' and set it to true in the image 'onload' event.
    let imageLoaded = false;
    image.onload = () => {
      imageLoaded = true;
    };
    expect(imageLoaded).toBe(true);
  });*/

  it("should export an image", () => {
    // The exportImage method returns a data URL, which can be tested for correctness.
    const imageFormat = "png";
    const dataURL = canvas.exportImage(imageFormat);
    expect(dataURL).toMatch(`data:image/${imageFormat};base64,`);
  });

  // Add more test cases as needed.
});
