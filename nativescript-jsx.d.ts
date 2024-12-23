// nativescript-jsx.d.ts

declare namespace JSX {
  interface IntrinsicElements {
    // Define the specific types for NativeScript components
    stackLayout: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;  // For StackLayout
    label: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;       // For Label
    frame: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;       // For Frame
    actionBar: any;  // For ActionBar (no typings provided, we use any)
    navigationButton: any; // For NavigationButton (no typings provided, we use any)
    // Add other NativeScript components as needed
  }
}