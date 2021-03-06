import React from 'react';

export type NavigationViewProps = {
  name: string;
  view: React.ComponentType<any>;
  navigationBar?: NavigationBar;
};

export type NavigationBar = {
  disabled?: boolean;
  title?: string;
  displayMode?: 'inline' | 'large' | 'animated-inline' | 'animated-large';
  backgroundStyle?: object;
  foregroundColor?: string;
  leading?: () => React.ReactElement<any>;
  trailing?: () => React.ReactElement<any>;
};

export const NavigationView: React.FC<NavigationViewProps> = (props) => {
  return null;
};
