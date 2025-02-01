import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Sidebar configuration for the Investors, WhatIfAI? website
 */
const sidebars: SidebarsConfig = {
  investorGuide: [
    'intro',
    {
      type: 'category',
      label: 'Due Diligence',
      items: [
        {
          type: 'category',
          label: 'Concepts',
          items: [
            'due-diligence/concepts/financial-analysis',
            'due-diligence/concepts/market-analysis',
            'due-diligence/concepts/team-evaluation',
          ],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'due-diligence/tutorials/financial-model',
            'due-diligence/tutorials/market-size',
            'due-diligence/tutorials/team-assessment',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Investment Process',
      items: [
        {
          type: 'category',
          label: 'Concepts',
          items: [
            'investment-process/concepts/term-sheets',
            'investment-process/concepts/valuation',
            'investment-process/concepts/negotiation',
          ],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'investment-process/tutorials/creating-term-sheet',
            'investment-process/tutorials/valuation-methods',
            'investment-process/tutorials/negotiation-tactics',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Portfolio Management',
      items: [
        {
          type: 'category',
          label: 'Concepts',
          items: [
            'portfolio/concepts/diversification',
            'portfolio/concepts/follow-on',
            'portfolio/concepts/exits',
          ],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'portfolio/tutorials/portfolio-construction',
            'portfolio/tutorials/follow-on-strategy',
            'portfolio/tutorials/exit-planning',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
