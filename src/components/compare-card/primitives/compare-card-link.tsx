import type { ComponentProps } from 'react';

import { ButtonLink } from '@/components/button-link';

export type CompareCardLinkProps = ComponentProps<typeof ButtonLink>;

export function CompareCardLink({ href, children }: CompareCardLinkProps) {
  return (
    <ButtonLink className="w-full" data-slot="compare-card-link" href={href} size="medium">
      {children}
    </ButtonLink>
  );
}
