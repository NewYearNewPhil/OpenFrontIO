export interface ReplayCaptureConfig {
  captureEveryNTicks: number;
  maxFrames: number;
  targetWidth?: number;
  targetHeight?: number;
  imageMimeType: string;
  imageQuality?: number;
  loopTailHoldMs: number;
  exportFps: number;
  exportVideoBitsPerSecond?: number;
  exportMimeTypes: string[];
}

export const defaultReplayCaptureConfig: ReplayCaptureConfig = {
  captureEveryNTicks: 50,
  maxFrames: 900,
  targetWidth: 1920,
  targetHeight: 1080,
  imageMimeType: "image/png",
  imageQuality: 1,
  loopTailHoldMs: 1000,
  exportFps: 10,
  exportVideoBitsPerSecond: 8_000_000,
  exportMimeTypes: [
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
  ],
};
