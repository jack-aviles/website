import React from 'react';

export interface PortfolioLink {
    label: string;
    url: string;
}

export interface PortfolioIcon {
    src: string | React.ComponentType;
    alt: string;
}

export interface PortfolioItemContent{
    key: number;
    title: string;
    description: string;
    links: PortfolioLink[];
    reverse?: boolean;
    logo: PortfolioIcon[];
}

