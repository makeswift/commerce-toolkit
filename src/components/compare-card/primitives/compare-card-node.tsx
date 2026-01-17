import { Fragment, type ReactNode } from 'react';

import * as CompareCardPrimitive from '@/components/compare-card';

export type CompareCardNode =
  | {
      type: 'content';
      label: string;
      content?: ReactNode;
      emptyLabel?: string;
      showReveal?: boolean;
    }
  | {
      type: 'list';
      label: string;
      items?: Array<{ name: string; value: string }>;
      emptyLabel?: string;
      showReveal?: boolean;
    };

export interface CompareCardNodeProps {
  compareCardNode: CompareCardNode;
}

export function CompareCardNode({ compareCardNode }: CompareCardNodeProps) {
  function renderContent(node: Extract<CompareCardNode, { type: 'content' }>) {
    const { content, emptyLabel, showReveal = true } = node;

    if (content == null) {
      if (emptyLabel == null) return null;

      return <CompareCardPrimitive.Empty>{emptyLabel}</CompareCardPrimitive.Empty>;
    }

    const sectionContent = <CompareCardPrimitive.Content>{content}</CompareCardPrimitive.Content>;

    if (!showReveal) return sectionContent;

    return <CompareCardPrimitive.Reveal>{sectionContent}</CompareCardPrimitive.Reveal>;
  }

  function renderList(node: Extract<CompareCardNode, { type: 'list' }>) {
    const { items, emptyLabel, showReveal = true } = node;
    const hasItems = items != null && items.length > 0;

    if (!hasItems) {
      if (emptyLabel == null) return null;

      return <CompareCardPrimitive.Empty>{emptyLabel}</CompareCardPrimitive.Empty>;
    }

    const sectionList = (
      <CompareCardPrimitive.List>
        {items.map(({ name, value }, idx) => (
          <Fragment key={idx}>
            <CompareCardPrimitive.Term>{name}: </CompareCardPrimitive.Term>
            <CompareCardPrimitive.Definition>{value}</CompareCardPrimitive.Definition>
          </Fragment>
        ))}
      </CompareCardPrimitive.List>
    );

    if (!showReveal) return sectionList;

    return <CompareCardPrimitive.Reveal>{sectionList}</CompareCardPrimitive.Reveal>;
  }

  function renderNode(node: CompareCardNode) {
    switch (node.type) {
      case 'content':
        return (
          <CompareCardPrimitive.Section>
            <CompareCardPrimitive.Label>{node.label}</CompareCardPrimitive.Label>
            {renderContent(node)}
          </CompareCardPrimitive.Section>
        );
      case 'list':
        return (
          <CompareCardPrimitive.Section>
            <CompareCardPrimitive.Label>{node.label}</CompareCardPrimitive.Label>
            {renderList(node)}
          </CompareCardPrimitive.Section>
        );
    }
  }

  return renderNode(compareCardNode);
}
