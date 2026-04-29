export interface Astrometry {
  ra: string;
  dec: string;
  fov: string;
  constellation: string;
}

export interface Gear {
  telescope: string;
  mount: string;
  camera: string;
  filters: string[];
  guidingScope?: string;
  guidingCamera?: string;
}

export interface Conditions {
  totalExposure: string;
  frames: string;
  bortle: number;
  software: string[];
  location: string;
}

export interface GalleryPhoto {
  id: string;
  order: number;
  title: string;
  date: string;
  imgUrl: string;
  thumbUrl: string;
  category: "nebula" | "galaxy" | "cluster" | "planet" | "other";
  astrometry?: Astrometry;
  gear: Gear;
  conditions: Conditions;
}

export interface GearItem {
  label: string;
  value: string;
}

export const MY_SETUP_IMG = "/gallery/other/setup.png";

export const MY_GEAR: GearItem[] = [
  { label: "Telescope", value: "Sky-Watcher 150/750 F/5" },
  { label: "Mount", value: "Sky-Watcher EQ3-2 motorized with the Onstep kit" },
  { label: "Camera", value: "Canon EOS 20000D" },
  //   { label: "Filters", value: "Optolong L-eXtreme 2\u2033" },
  { label: "Guiding scope", value: "Svbony SV106 60mm" },
  //   { label: "Guiding camera", value: "ZWO ASI120MM Mini" },
  { label: "Control", value: "ZWO ASIAIR Mini" },
];

export const PHOTOS: GalleryPhoto[] = [
  {
    id: "m81_82",
    order: 1,
    title: "M81&M82 - Bode's Galaxy & Cigar Galaxy",
    date: "7 Feb 2026",
    imgUrl: "/gallery/deepsky/galaxy/M81-82_2026-02-07.png",
    thumbUrl: "/gallery/deepsky/galaxy/M81-82_2026-02-07.png",
    category: "galaxy",
    astrometry: {
      ra: "09h 55m 33s",
      dec: "+69\u00b0 03\u2032 55\u2033",
      fov: "1.2\u00b0 \u00d7 0.9\u00b0",
      constellation: "Ursa Major",
    },
    gear: {
      telescope: "Sky-Watcher 150/750 F/5",
      mount: "Sky-Watcher EQ3-2 motorized with the Onstep kit",
      camera: "Canon EOS 2000D",
      filters: [],
      guidingScope: "",
      guidingCamera: "",
    },
    conditions: {
      totalExposure: "2h 09min 30s",
      frames: "259 \u00d7 30s @ ISO 1600",
      bortle: 7,
      software: ["ASIAIR Mini", "SIRIL", "GraXpert", "Pixinsight"],
      location: "France",
    },
  },
  {
    id: "m42",
    order: 2,
    title: "M42 - Orion Nebula",
    date: "30 Dec 2025",
    imgUrl: "/gallery/deepsky/nebula/M42_2025-12-30.png",
    thumbUrl: "/gallery/deepsky/nebula/M42_2025-12-30.png",
    category: "nebula",
    astrometry: {
      ra: "05h 35m 17s",
      dec: "\u221205\u00b0 23\u2032 28\u2033",
      fov: "1.2\u00b0 \u00d7 0.9\u00b0",
      constellation: "Orion",
    },
    gear: {
      telescope: "Sky-Watcher 150/750 F/5",
      mount: "Sky-Watcher EQ3-2 motorized with the Onstep kit",
      camera: "Canon EOS 2000D",
      filters: [],
      guidingScope: "",
      guidingCamera: "",
    },
    conditions: {
      totalExposure: "01h 00m 00s",
      frames: "120 \u00d7 30s @ ISO 1600",
      bortle: 7,
      software: ["ASIAIR Mini", "SIRIL", "GraXpert", "Pixinsight"],
      location: "France",
    },
  },
  {
    id: "m87",
    order: 3,
    title: "M87 - Virgo A",
    date: "20 Mar 2026",
    imgUrl: "/gallery/deepsky/galaxy/M87_2026-03-20.png",
    thumbUrl: "/gallery/deepsky/galaxy/M87_2026-03-20.png",
    category: "galaxy",
    astrometry: {
      ra: "12h 30m 49s",
      dec: "+12\u00b0 23\u2032 28\u2033",
      fov: "0.5\u00b0 \u00d7 0.5\u00b0",
      constellation: "Virgo",
    },
    gear: {
      telescope: "Sky-Watcher 150/750 F/5",
      mount: "Sky-Watcher EQ3-2 motorized with the Onstep kit",
      camera: "Canon EOS 2000D",
      filters: [],
      guidingScope: "",
      guidingCamera: "",
    },
    conditions: {
      totalExposure: "2h 16m 30s",
      frames: "182 \u00d7 45s @ ISO 1600",
      bortle: 7,
      software: ["ASIAIR Mini", "SIRIL", "GraXpert", "Pixinsight"],
      location: "France",
    },
  },

  {
    id: "moon",
    order: 4,
    title: "The Moon",
    date: "03 Mar 2026",
    imgUrl: "/gallery/planetary/Moon_2026-03-01.png",
    thumbUrl: "/gallery/planetary/Moon_2026-03-01.png",
    category: "planet",
    astrometry: {
      ra: "variable",
      dec: "variable",
      fov: "0.5\u00b0 \u00d7 0.5\u00b0",
      constellation: "variable",
    },
    gear: {
      telescope: "Sky-Watcher 150/750 F/5",
      mount: "Sky-Watcher EQ3-2 motorized with the Onstep kit",
      camera: "Canon EOS 2000D",
      filters: [],
      guidingScope: "",
      guidingCamera: "",
    },
    conditions: {
      totalExposure: "01min 00s",
      frames: "1 \u00d7 60s @ MOV",
      bortle: 7,
      software: ["PIPP", "AS!4", "Astrosurface"],
      location: "France",
    },
  },
  {
    id: "sun",
    order: 5,
    title: "The Sun",
    date: "18 Mar 2026",
    imgUrl: "/gallery/planetary/Sun_2026-03-18.png",
    thumbUrl: "/gallery/planetary/Sun_2026-03-18.png",
    category: "planet",
    astrometry: {
      ra: "variable",
      dec: "variable",
      fov: "0.5\u00b0 \u00d7 0.5\u00b0",
      constellation: "variable",
    },
    gear: {
      telescope: "Sky-Watcher 150/750 F/5",
      mount: "Sky-Watcher EQ3-2 motorized with the Onstep kit",
      camera: "Canon EOS 2000D",
      filters: [],
      guidingScope: "",
      guidingCamera: "",
    },
    conditions: {
      totalExposure: "0,4s",
      frames: "400 \u00d7 1ms @ ISO 100",
      bortle: 7,
      software: ["ASIAIR Mini", "PIPP", "AS!4", "Astrosurface"],
      location: "France",
    },
  },
];
