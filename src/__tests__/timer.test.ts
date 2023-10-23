import { performance } from "perf_hooks";
import Timer from "../engine/core/Timer";

// Mock performance.now() to control the timing in tests
/*jest.spyOn(performance, 'now').mockImplementation(() => {
  return 0;
});*/

describe("Timer Class", () => {
  let timer: Timer;

  beforeEach(() => {
    timer = new Timer();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should have default values when created", () => {
    expect(timer.lastTime).toBe(0);
    expect(timer.deltaTime).toBe(0);
    expect(timer.fps).toBe(60);
    expect(timer.frameCount).toBe(0);
    expect(timer.timeAccumulator).toBe(0);
  });

  /*it("should start a frame and update delta time", () => {
    jest.spyOn(performance, 'now').mockReturnValueOnce(1000); // Mock the first time measurement
    timer.startFrame();
    jest.spyOn(performance, 'now').mockReturnValueOnce(2000); // Mock the second time measurement
    timer.endFrame();

    expect(timer.lastTime).toBe(2000);
    expect(timer.deltaTime).toBe(1); // 2000 - 1000 = 1 second
  });*/

  /*it("should calculate average FPS", () => {
    jest.spyOn(performance, 'now').mockReturnValueOnce(1000); // Mock the first time measurement
    timer.startFrame();
    jest.spyOn(performance, 'now').mockReturnValueOnce(2000); // Mock the second time measurement
    timer.endFrame();

    expect(timer.calculateAverageFPS(1)).toBe(1);
  });*/

  /*it("should detect frame rate spikes", () => {
    jest.spyOn(performance, 'now').mockReturnValueOnce(1000); // Mock the first time measurement
    timer.startFrame();
    jest.spyOn(performance, 'now').mockReturnValueOnce(2000); // Mock the second time measurement
    timer.endFrame();

    expect(timer.detectFrameRateSpikes(2)).toBe(false); // Not a spike
    expect(timer.detectFrameRateSpikes(1)).toBe(true); // Spike
  });*/

  /*it("should detect frame rate drops", () => {
    jest.spyOn(performance, 'now').mockReturnValueOnce(1000); // Mock the first time measurement
    timer.startFrame();
    jest.spyOn(performance, 'now').mockReturnValueOnce(2000); // Mock the second time measurement
    timer.endFrame();

    expect(timer.detectFrameRateDrops(2)).toBe(false); // Not a drop
    expect(timer.detectFrameRateDrops(1)).toBe(true); // Drop
  });*/

  /*it("should cap the frame rate", () => {
    jest.spyOn(performance, 'now').mockReturnValueOnce(1000); // Mock the first time measurement
    timer.startFrame();
    jest.spyOn(performance, 'now').mockReturnValueOnce(1100); // Mock the second time measurement
    timer.capFrameRate(60);

    // lastTime should be updated to achieve a frame rate of 60 FPS
    expect(timer.lastTime).toBeGreaterThan(1000);
  });*/

  it("should update frame count and FPS", () => {
    jest.spyOn(performance, 'now').mockReturnValueOnce(1000); // Mock the first time measurement
    timer.startFrame();
    jest.spyOn(performance, 'now').mockReturnValueOnce(2000); // Mock the second time measurement
    timer.endFrame();

    expect(timer.frameCount).toBe(1);
    expect(timer.fps).toBe(0); // Updated in endFrame
  });
});
