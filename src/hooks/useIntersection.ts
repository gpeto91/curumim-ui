import React, { useState, useEffect } from 'react';

type OptionsProps = {
  offset?: string;
};

export default function useIntersection(
  element: React.RefObject<HTMLElement>,
  { offset = '0px' }: OptionsProps = {}
) {
  const [isVisible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
          observer.unobserve(element.current as HTMLElement);
        }
      },
      { rootMargin: offset }
    );

    element.current && observer.observe(element.current);

    return () => observer.unobserve(element.current as HTMLElement);
  }, []);

  return { isVisible };
}
