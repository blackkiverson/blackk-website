/**
 * Background sketches.
 * --------------------------------------------------------------------------
 * Each entry is one continuous hand-drawn gesture, traced from the original
 * artwork by following the centre of the ink rather than its outline, so the
 * path can be stroked and drawn on rather than filled. Coordinates are
 * normalised to a 1000-unit-wide viewBox.
 *
 * `Sketch.astro` strokes each path three times with a fractional offset, which
 * is how the original was drawn: one gesture, gone over a few times.
 *
 * To add another: trace it to a single open path, normalise to width 1000, and
 * drop it in here. Nothing else needs to change.
 */

export interface SketchArt {
  /** Always `0 0 1000 h`. */
  viewBox: string;
  /** One open subpath, start to finish, in drawing order. */
  d: string;
  /** Rotation centre used to fan the repeat passes out, in viewBox units. */
  pivot: [number, number];
}

export const sketches = {
  /** A single looping flourish: down, round, and away to the lower right. */
  loop: {
    viewBox: '0 0 1000 765',
    pivot: [500, 383],
    d: 'M421.8 0C424.5 8.1 432.6 32.3 438.3 48.3C444 64.3 450.4 80.1 456.1 96.2C461.8 112.3 467.2 128.4 472.3 144.6C477.4 160.9 482.3 177.2 486.6 193.7C490.8 210.2 494.7 226.8 497.7 243.6C500.7 260.3 503.3 277.3 504.6 294.2C505.9 311.1 505.4 328.2 505.3 345.2C505.3 362.2 506 379.3 504.5 396.2C503 413.1 500.3 430.1 496.3 446.6C492.3 463.1 486.5 479.3 480.2 495.1C474 510.9 466.7 526.4 458.7 541.4C450.7 556.4 441.8 571 432.4 585.1C422.9 599.3 412.7 613 402 626.2C391.3 639.5 380.2 652.5 368.3 664.6C356.4 676.7 343.9 688.5 330.4 698.8C317 709.2 302.5 718.5 287.7 726.8C272.9 735.1 257.5 742.7 241.7 748.8C225.9 754.9 209.5 761 192.9 763.5C176.3 766 158.8 765.2 142 763.7C125.2 762.2 107.3 760.8 92.1 754.4C76.9 747.9 63.3 736.2 50.7 725C38.1 713.8 25 701.5 16.5 687.2C8.1 673 1.8 655.9 0.1 639.6C-1.5 623.3 1.1 604.9 6.6 589.2C12 573.5 23.3 559.6 32.6 545.4C42 531.2 52.3 517.5 62.4 503.9C72.6 490.2 82.3 476.1 93.5 463.3C104.7 450.6 116.7 438.5 129.4 427.3C142.2 416.2 155.9 405.8 170.1 396.6C184.4 387.4 199.6 379.4 215 372.3C230.5 365.1 246.4 358.7 262.6 353.8C278.9 348.9 295.7 345.6 312.5 342.9C329.3 340.3 346.4 338.9 363.4 338C380.3 337.1 397.4 336.7 414.4 337.4C431.4 338.1 448.5 339.6 465.3 341.9C482.1 344.3 498.7 348.2 515.4 351.6C532.1 355 548.9 358 565.3 362.3C581.8 366.5 598.1 371.8 614.2 377.2C630.3 382.5 646.6 387.8 662.2 394.6C677.7 401.4 692.6 410 707.6 417.9C722.7 425.9 737.8 433.8 752.5 442.3C767.2 450.9 781.5 460.1 795.8 469.4C810.1 478.6 824.3 488.1 838.3 497.8C852.2 507.6 865.9 517.8 879.6 527.8C893.3 537.9 907.1 548 920.6 558.4C934.1 568.8 947.3 579.5 960.6 590.2C973.8 600.9 993.4 617.3 1000 622.7',
  },
} satisfies Record<string, SketchArt>;

export type SketchName = keyof typeof sketches;
