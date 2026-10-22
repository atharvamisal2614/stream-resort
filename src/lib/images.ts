import type { StaticImageData } from "next/image";

import aerialBeachResort from "@/assets/images/aerial-beach-resort.jpg";
import aerialOverview from "@/assets/images/aerial-overview.jpg";
import poolPalmsBlock from "@/assets/images/pool-palms-block.jpg";
import cottageGardenPath from "@/assets/images/cottage-garden-path.jpg";
import acBlockFront from "@/assets/images/ac-block-front.jpg";
import poolKidsZone from "@/assets/images/pool-kids-zone.jpg";
import aerialPoolPlayarea from "@/assets/images/aerial-pool-playarea.jpg";
import aerialTopdown from "@/assets/images/aerial-topdown.jpg";
import aerialBeachCottages from "@/assets/images/aerial-beach-cottages.jpg";
import aerialResortWide from "@/assets/images/aerial-resort-wide.jpg";
import kidsPlayStructure from "@/assets/images/kids-play-structure.jpg";
import gardenSteps from "@/assets/images/garden-steps.jpg";
import cottagesRow from "@/assets/images/cottages-row.jpg";
import seaViewPool from "@/assets/images/sea-view-pool.jpg";
import acBlockPalms from "@/assets/images/ac-block-palms.jpg";
import aerialResortOverview from "@/assets/images/aerial-resort-overview.jpg";
import cottagesRow2 from "@/assets/images/cottages-row-2.jpg";
import playareaPoolCottages from "@/assets/images/playarea-pool-cottages.jpg";
import poolPortrait from "@/assets/images/pool-portrait.jpg";
import seaViewResort from "@/assets/images/sea-view-resort.jpg";
import roomInterior from "@/assets/images/room-interior.jpg";
import cottageNight from "@/assets/images/cottage-night.jpg";

export type Photo = { src: StaticImageData; alt: string };

export const img = {
  aerialBeachResort: {
    src: aerialBeachResort,
    alt: "Aerial view of The Stream Resort with Diveagar Beach just beyond the trees",
  },
  aerialOverview: { src: aerialOverview, alt: "Aerial view of the cottages, pool and kids’ play area" },
  poolPalmsBlock: { src: poolPalmsBlock, alt: "Swimming pool framed by tall coconut palms" },
  cottageGardenPath: { src: cottageGardenPath, alt: "Garden pathway winding between laterite-stone cottages" },
  acBlockFront: { src: acBlockFront, alt: "Two-storey AC room block with balcony walkway" },
  poolKidsZone: { src: poolKidsZone, alt: "Pool and kids’ play zone surrounded by palms and cottages" },
  aerialPoolPlayarea: { src: aerialPoolPlayarea, alt: "Pool and play area seen from above" },
  aerialTopdown: { src: aerialTopdown, alt: "Top-down view of the resort grounds" },
  aerialBeachCottages: { src: aerialBeachCottages, alt: "Cottages a short walk from the Diveagar shoreline" },
  aerialResortWide: { src: aerialResortWide, alt: "Wide aerial view of the resort, pool and gardens" },
  kidsPlayStructure: { src: kidsPlayStructure, alt: "Colourful play structure with spiral slides on soft green turf" },
  gardenSteps: { src: gardenSteps, alt: "Garden steps and pathways inside the resort" },
  cottagesRow: { src: cottagesRow, alt: "Row of laterite-stone cottages in the garden" },
  seaViewPool: { src: seaViewPool, alt: "Pool and play zone with the Arabian Sea on the horizon" },
  acBlockPalms: { src: acBlockPalms, alt: "AC room block under swaying palms" },
  aerialResortOverview: { src: aerialResortOverview, alt: "Resort overview with cottages around the pool" },
  cottagesRow2: { src: cottagesRow2, alt: "Cottages with lush garden beds" },
  playareaPoolCottages: { src: playareaPoolCottages, alt: "Play area beside the pool with cottages behind" },
  poolPortrait: { src: poolPortrait, alt: "Curved swimming pool with poolside deck" },
  seaViewResort: { src: seaViewResort, alt: "Resort in the palms with the sea in the distance" },
  roomInterior: { src: roomInterior, alt: "Air-conditioned cottage room with warm lighting and garden view" },
  cottageNight: { src: cottageNight, alt: "Cottage lit up warmly at night" },
} satisfies Record<string, Photo>;

export const gallery: Photo[] = [
  img.poolKidsZone,
  img.aerialBeachResort,
  img.cottagesRow,
  img.kidsPlayStructure,
  img.roomInterior,
  img.seaViewResort,
  img.acBlockFront,
  img.poolPalmsBlock,
  img.aerialResortWide,
  img.cottageGardenPath,
  img.cottageNight,
  img.aerialPoolPlayarea,
  img.gardenSteps,
  img.acBlockPalms,
  img.playareaPoolCottages,
  img.aerialOverview,
  img.poolPortrait,
  img.aerialTopdown,
];
