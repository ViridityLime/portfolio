import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
        <div className="w-full columns-2 md:columns-3 lg:columns-4">
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  <Image alt={title} className="h-full w-full" placeholder="blur" src={image} />
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item}) => {
  const {title, description} = item;
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) {
      setMobile(true);
    }
  }, []);

  useDetectOutsideClick(overlayRef as React.RefObject<HTMLElement>, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      event.preventDefault();
      event.stopPropagation();
      
      if (mobile && !showOverlay) {
        setShowOverlay(true);
      } else {
        setShowModal(true);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <>
      <div
        ref={overlayRef}
        className={classNames(
          'absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300 cursor-pointer',
          {'opacity-0 hover:opacity-80': !mobile},
          showOverlay ? 'opacity-80' : 'opacity-0',
        )}
        onClick={handleItemClick}>
        <div className="relative h-full w-full p-4">
          <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
            <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
            <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
          </div>
          <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
        </div>
      </div>

      {showModal && <ProjectModal item={item} onClose={() => setShowModal(false)} />}
    </>
  );
});

ItemOverlay.displayName = 'ItemOverlay';

const ProjectModal: FC<{item: PortfolioItem; onClose: () => void}> = memo(({item, onClose}) => {
  const {title, description, image, url, detailedDescription, technologies, features, screenshots} = item;
  const modalRef = useRef<HTMLDivElement>(null);

  useDetectOutsideClick(modalRef as React.RefObject<HTMLElement>, onClose);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div ref={modalRef} className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-xl bg-neutral-900 shadow-2xl">
        <button onClick={onClose} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-2xl text-white transition hover:bg-neutral-700" aria-label="Close modal">
          ×
        </button>
        <div className="relative h-64 w-full overflow-hidden rounded-t-xl md:h-96">
          <Image src={image} alt={title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
          <h2 className="absolute bottom-6 left-6 text-3xl font-bold text-white md:text-4xl">{title}</h2>
        </div>
        <div className="p-6 md:p-8">
          <section className="mb-8">
            <h3 className="mb-3 text-2xl font-bold text-blue-400">Overview</h3>
            <p className="leading-relaxed text-gray-300">{detailedDescription || description}</p>
          </section>
          {technologies && technologies.length > 0 && (
            <section className="mb-8">
              <h3 className="mb-3 text-2xl font-bold text-blue-400">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span key={index} className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-300 border border-blue-500/30">{tech}</span>
                ))}
              </div>
            </section>
          )}
          {features && features.length > 0 && (
            <section className="mb-8">
              <h3 className="mb-3 text-2xl font-bold text-blue-400">Key Features</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {screenshots && screenshots.length > 0 && (
            <section className="mb-8">
              <h3 className="mb-3 text-2xl font-bold text-blue-400">Project Screenshots</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {screenshots.map((screenshot, index) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                    <Image src={screenshot} alt={`${title} screenshot ${index + 1}`} className="h-full w-full object-cover transition hover:scale-105" />
                  </div>
                ))}
              </div>
            </section>
          )}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              View Project
            </a>
            <button onClick={onClose} className="rounded-lg bg-neutral-700 px-6 py-3 font-semibold text-white transition hover:bg-neutral-600">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});