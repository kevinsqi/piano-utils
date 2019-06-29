import KeyboardShortcuts from '../src/KeyboardShortcuts';

describe('create', () => {
  test('correct configuration', () => {
    const keyboardShortcuts = KeyboardShortcuts.create({
      firstNote: 40,
      lastNote: 50,
      keyboardConfig: [
        {
          flat: 'w',
          natural: 's',
          sharp: 'e',
        },
        {
          flat: 'e',
          natural: 'd',
          sharp: 'r',
        },
      ],
    });

    expect(keyboardShortcuts).toEqual([
      { key: 's', midiNumber: 40 },
      { key: 'd', midiNumber: 41 },
    ]);
  });
  test('does not create shortcuts exceeding lastNote', () => {
    const keyboardShortcuts = KeyboardShortcuts.create({
      firstNote: 40,
      lastNote: 41,
      keyboardConfig: [
        {
          flat: 'w',
          natural: 's',
          sharp: 'e',
        },
        {
          flat: 'e',
          natural: 'd',
          sharp: 'r',
        },
        {
          flat: 'r',
          natural: 'f',
          sharp: 't',
        },
      ],
    });

    expect(keyboardShortcuts).toEqual([
      { key: 's', midiNumber: 40 },
      { key: 'd', midiNumber: 41 },
    ]);
  });
});
