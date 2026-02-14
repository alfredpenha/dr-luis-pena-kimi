import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const INPUT = path.resolve('public/images/doctor.png');
const BACKUP = path.resolve('public/images/doctor.original.png');
const OUTPUT = path.resolve('public/images/doctor.hero.png');

// Adjust these percentages if needed:
// - topPct: remove more/less empty wall above the head.
// - bottomPct: remove more/less desk area at the bottom.
const topPct = 0.10;
const bottomPct = 0.38;
const sidePct = 0.01;

async function main() {
  await fs.copyFile(INPUT, BACKUP);

  const image = sharp(INPUT);
  const meta = await image.metadata();

  if (!meta.width || !meta.height) {
    throw new Error('Could not read image dimensions.');
  }

  const width = meta.width;
  const height = meta.height;

  const top = Math.round(height * topPct);
  const bottom = Math.round(height * bottomPct);
  const left = Math.round(width * sidePct);
  const right = Math.round(width * sidePct);

  const cropWidth = width - left - right;
  const cropHeight = height - top - bottom;

  if (cropWidth <= 0 || cropHeight <= 0) {
    throw new Error('Invalid crop dimensions. Adjust percentages.');
  }

  await sharp(INPUT)
    .extract({
      left,
      top,
      width: cropWidth,
      height: cropHeight,
    })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(OUTPUT);

  console.log(`Created backup: ${BACKUP}`);
  console.log(`Created hero image: ${OUTPUT}`);
  console.log(`Source: ${width}x${height}`);
  console.log(`Crop: left=${left}, top=${top}, width=${cropWidth}, height=${cropHeight}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
