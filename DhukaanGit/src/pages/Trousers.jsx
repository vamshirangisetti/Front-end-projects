import React from "react";
import Footer from "../components/Footer";
import TrousersList from "../assets/TrousersList";
import Card from "../components/ProductCard";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Trousers = () => {
  const location = useLocation();
  const [items, setItems] = useState(TrousersList);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 6;
  const itemsVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(items.length/itemsPerPage)
  const HandleChangePage = ({selected})=> {
    setPageNumber(selected)
  }
  const displayItems = TrousersList.slice(itemsVisited, itemsVisited+itemsPerPage).map((i) => (
    <Card key={i.id} url={i.url} title={i.title} cost={i.cost} index={i.id} />
  ));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="w-[1440px] mx-auto  h-screen relative bottom-10 flex items-center justify-center">
        <img
          src="https://cdn.shopify.com/s/files/1/0691/4749/collections/slim-trouser-cotton-poplin-grey-12_1796x627.jpg?v=1559875270"
          alt="image"
          className="absolute object-cover"
        />
        <h1 className=" absolute text-8xl font-bold text-white">Trousers</h1>
      </div>
      <div className=" w-[1340px] mx-auto grid grid-cols-3 gap-10 relative bottom-24">
        {displayItems}
      </div>
      <ReactPaginate 
        previousLabel={'Prev'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={HandleChangePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'prevBttn'}
        nextLinkClassName={'nextBttn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
        className='flex gap-10 w-[300px] mx-auto text-lg font-thin'
      />
      <Footer />
    </div>
  );
};

export default Trousers;
