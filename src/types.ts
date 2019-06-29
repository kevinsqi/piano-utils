export type KeyboardConfigItem = {
  flat: string;
  natural: string;
  sharp: string;
};

export type KeyboardShortcut = {
  key: string;
  midiNumber: number;
};

export type MidiNumberAttributes = {
  note: string;
  pitchName: string;
  octave: number;
  midiNumber: number;
  isAccidental: boolean;
};
