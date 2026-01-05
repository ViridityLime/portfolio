import {FC, memo} from 'react';
import Image from 'next/image';

import type {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content, image} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col md:flex-row md:gap-4 pb-4">
        {image && (
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <Image 
              src={image} 
              alt={title} 
              width={80} 
              height={80} 
              className="rounded-lg object-cover mx-auto md:mx-0"
            />
          </div>
        )}
        <div className="flex-1">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex items-center justify-center gap-x-2 md:justify-start">
            <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
            <span>•</span>
            <span className="flex-1 text-sm sm:flex-none">{date}</span>
          </div>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;