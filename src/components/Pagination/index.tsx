import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  PaginationComponent,
  PaginationContainer,
  PaginationPages,
  PaginationSizes,
  PaginationTotals,
  PaginationButtons
} from './paginationStyle';

type onPaginatePayload = {
  page: number;
  size: number;
};

interface PaginationProps {
  totalElements: number;
  text?: string;
  onPaginate: (payload: onPaginatePayload) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalElements, text = 'Itens', onPaginate }) => {
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(10);
  const [pages, setPages] = useState<number[]>([]);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let numPages = Math.ceil(totalElements / size);
    let arrPages = [];

    for (let i = 1; i <= numPages; i++) {
      arrPages.push(i);
    }

    setPage(0);
    setPages(arrPages);

    //eslint-disable-next-line
  }, [size]);

  useEffect(() => {
    if (isMounted) {
      onPaginate({ page: page < 0 ? 0 : page, size });
    }

    setMin(page * size + 1);
    setMax(page * size + size > totalElements ? totalElements : page * size + size);

    //eslint-disable-next-line
  }, [size, page]);

  return (
    <div className={PaginationComponent()}>
      <div className={PaginationContainer()}>
        {/* pagina */}
        <div className={PaginationPages()}>
          <label htmlFor="pagina">Página:</label>
          <select
            id="pagina"
            value={page}
            onChange={(event) => setPage(Number(event.currentTarget.value))}
          >
            {pages.map((page) => (
              <option key={page} value={(page - 1).toString()}>
                {page}
              </option>
            ))}
          </select>
        </div>

        {/* itens por pag. */}
        <div className={PaginationSizes()}>
          <label htmlFor="tamanho">{text} por página:</label>
          <select
            id="tamanho"
            value={size}
            onChange={(event) => setSize(Number(event.currentTarget.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>

        {/* totalizador */}
        <div className={PaginationTotals()}>
          <span>
            {min} de {max}
          </span>
        </div>

        {/* botoes */}
        <div className={PaginationButtons()}>
          <button onClick={() => setPage((page) => page - 1)} disabled={page === 0}>
            <FiChevronLeft />
          </button>
          <button
            onClick={() => setPage((page) => page + 1)}
            disabled={page + 1 === pages[pages.length - 1]}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

Pagination.displayName = 'Pagination';

export { Pagination };
