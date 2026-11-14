'use client';
import { useEffect, useState } from 'react'; import { motion } from 'framer-motion';
import { CATS } from '@/lib/constants'; import ProductCard from './ProductCard';
const validCategory = (category) => CATS.some((item) => item.id === category) ? category : 'all';
const PAGE_SIZE = 12;

export default function Explorer({ items, initial = 'all' }) {
  const [cat, setCat] = useState(() => validCategory(initial)), [brand, setBrand] = useState('all'), [q, setQ] = useState(''), [page, setPage] = useState(1);
  useEffect(() => {
    setCat(validCategory(initial));
    setBrand('all');
    setQ('');
    setPage(1);
  }, [initial]);

  const query = q.trim().toLowerCase();
  const brands = cat === 'all'
    ? []
    : [...new Set(items.filter((p) => p.category === cat).map((p) => p.brand).filter(Boolean))]
      .sort((a, b) => a.localeCompare(b));
  const list = items.filter((p) => (cat === 'all' || p.category === cat)
    && (brand === 'all' || p.brand === brand)
    && (`${p.name || ''} ${p.brand || ''}`).toLowerCase().includes(query));
  const pageCount = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const paginatedList = list.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const firstProduct = list.length ? (currentPage - 1) * PAGE_SIZE + 1 : 0;
  const lastProduct = Math.min(currentPage * PAGE_SIZE, list.length);
  const firstVisiblePage = Math.max(1, Math.min(currentPage - 2, pageCount - 4));
  const pageNumbers = Array.from({ length: Math.min(pageCount, 5) }, (_, index) => firstVisiblePage + index);
  const goToPage = (nextPage) => setPage(Math.max(1, Math.min(nextPage, pageCount)));
  const clearFilters = () => {
    setCat('all');
    setBrand('all');
    setQ('');
    setPage(1);
  };

  return (<>
    <div className="catalog-results"><b>{list.length ? `Showing ${firstProduct}–${lastProduct} of ${list.length} products` : '0 products'}</b><span>Wholesale pricing available on request</span></div>
    <div className="tabs">{[{ id: 'all', name: 'All' }, ...CATS].map((c) => <button key={c.id} aria-pressed={cat === c.id} onClick={() => { setCat(c.id); setBrand('all'); setQ(''); setPage(1); }}>{c.name}{cat === c.id && <motion.i layoutId="tab" className="ul" />}</button>)}</div>
    {brands.length > 0 && <div className="brand-filters" aria-label="Filter by brand">
      <span>Brand</span>
      <button type="button" aria-pressed={brand === 'all'} onClick={() => { setBrand('all'); setPage(1); }}>All brands</button>
      {brands.map((name) => <button type="button" key={name} aria-pressed={brand === name} onClick={() => { setBrand(name); setPage(1); }}>{name}</button>)}
    </div>}
    <input className="search" placeholder="Search products or brands…" value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }} />
    <motion.div className="grid" layout>
      {paginatedList.map((p) => <motion.div key={p._id} layout initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .25 }}><ProductCard p={p} /></motion.div>)}
    </motion.div>
    {!list.length && <div className="note" role="status">No products match those filters.<button type="button" className="btn clear-filters" onClick={clearFilters}>Clear filters</button></div>}
    {pageCount > 1 && <nav className="pagination" aria-label="Product pages">
      <button type="button" className="pagination-step" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} aria-label="Previous page">← <span>Previous</span></button>
      {pageNumbers.map((pageNumber) => <button key={pageNumber} type="button" className="pagination-number" onClick={() => goToPage(pageNumber)} aria-label={`Page ${pageNumber}`} aria-current={currentPage === pageNumber ? 'page' : undefined}>{pageNumber}</button>)}
      <button type="button" className="pagination-step" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === pageCount} aria-label="Next page"><span>Next</span> →</button>
    </nav>}
  </>);
}
