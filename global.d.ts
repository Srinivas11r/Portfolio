/** Temporary shim until npm install restores full React type definitions. */
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
