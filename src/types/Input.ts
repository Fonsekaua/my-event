import { IconType } from "react-icons"

export type Props = {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    icon: IconType;
    onChange:  (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}