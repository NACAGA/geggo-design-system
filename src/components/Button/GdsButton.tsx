import React from "react";
import { GdsButtonTypeEnum } from "./types/button-type";
import type { ButtonType } from "./types/button-type";

interface Props {
    type: ButtonType
};

export const GdsButton: React.FC<Props> = (props: Props) => {
    return (
        <button className={`gds-button gds-button--${props}`}>
        </button>
    );
};