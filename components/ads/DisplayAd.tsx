'use client'

import AdSenseAd from './AdSenseAd'

interface DisplayAdProps {
  slot: 'homepage-top' | 'homepage-middle' | 'homepage-bottom' | 'service-page' | 'editor-sidebar' | 'template-page'
  className?: string
}

// Pre-configured ad slots for different positions
const AD_SLOTS = {
  'homepage-top': {
    adSlot: 'REPLACE_WITH_ACTUAL_SLOT_ID_1',
    adFormat: 'auto' as const,
  },
  'homepage-middle': {
    adSlot: 'REPLACE_WITH_ACTUAL_SLOT_ID_2',
    adFormat: 'auto' as const,
  },
  'homepage-bottom': {
    adSlot: 'REPLACE_WITH_ACTUAL_SLOT_ID_3',
    adFormat: 'auto' as const,
  },
  'service-page': {
    adSlot: 'REPLACE_WITH_ACTUAL_SLOT_ID_4',
    adFormat: 'auto' as const,
  },
  'editor-sidebar': {
    adSlot: 'REPLACE_WITH_ACTUAL_SLOT_ID_5',
    adFormat: 'vertical' as const,
  },
  'template-page': {
    adSlot: 'REPLACE_WITH_ACTUAL_SLOT_ID_6',
    adFormat: 'auto' as const,
  },
}

export default function DisplayAd({ slot, className = '' }: DisplayAdProps) {
  const adConfig = AD_SLOTS[slot]

  return (
    <div className={`my-8 ${className}`}>
      <div className="text-center text-xs text-gray-400 mb-2">Advertisement</div>
      <AdSenseAd
        adSlot={adConfig.adSlot}
        adFormat={adConfig.adFormat}
        className="min-h-[100px] bg-gray-50 rounded-lg flex items-center justify-center"
      />
    </div>
  )
}
