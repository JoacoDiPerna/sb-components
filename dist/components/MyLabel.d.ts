import './MyLabel.css';
export interface Props {
    /** Text to display */
    label: string;
    /** Label size */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /** Capitalizes the label */
    allCaps?: boolean;
    /** Label color */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    /** Font color */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: Props) => import("react/jsx-runtime").JSX.Element;
