import React,{ useState } from 'react';
import './pagenation.css';
import Images from '../type';
import ImagesGallery from './ImagesGallery';
import ReactPaginate from 'react-paginate';

type Props = {
    fetchData:Images[];
}

function Pagenation(props:Props) {
    const { fetchData } = props;
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
    const endOffset =  itemOffset + itemsPerPage;
    const currentImagesGallery = fetchData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(fetchData.length / itemsPerPage);
    const handlePageClick = (e:{selected:number}) => {
        const newOffset = (e.selected * itemsPerPage) % fetchData.length;
        setItemOffset(newOffset);
    };

    return (
        <div>
            <ImagesGallery fetchData={fetchData} currentImagesGallery={currentImagesGallery}/>
            <div className='paginationWrapper'>
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                />
            </div>
        </div>
    )
}

export default Pagenation;