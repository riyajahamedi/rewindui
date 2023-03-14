import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { FunctionComponent, PropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const TabList: FunctionComponent<PropsWithoutRef<any>> = (props: any) => {
  const { children, className = '', ...additionalProps } = props;
  const theme = useComponentTheme('Tab');
  const id = usePropId(props.id);

  return (
    <div id={id} className={twMerge(theme.list({ className }))} {...additionalProps}>
      {children}
    </div>
  );
};
