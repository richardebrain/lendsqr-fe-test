import React from 'react';
import './paginate.styles.scss';
import { IconLeft, IconRight } from '../icons/icon';
type PaginateProps = {
    totalPages: number;
    currentPage: number;
    onPageChange: (pageNumber: number) => void;
    lastUserIndex: number
    numOfUsers: number
}

const Paginate = ({ totalPages, currentPage, onPageChange, lastUserIndex, numOfUsers }: PaginateProps) => {
    let pageNumber = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumber.push(i);
    }

    let firstThree = [];
    if (currentPage < 3) {
        firstThree = pageNumber.slice(0, 3);
    } else {
        firstThree = pageNumber.slice(currentPage - 2, currentPage + 1);
    }

    let lastThree = []
    if (currentPage > 4) {
        lastThree = pageNumber.slice(currentPage + 1, currentPage + 4);
    } else {
        lastThree = pageNumber.slice(firstThree.length + 2, totalPages - 4);
    }
    return (
        <div className='paginate_container'>
            <div className='container_first'>
                <div>
                    Showing  <span>{lastUserIndex}</span> Out of {numOfUsers}

                </div>


            </div>
            <div className='container_second'>
                <button className='paginate_btn' onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}><IconLeft /></button>


                <div className='second_pageNumber'>
                    <span>{pageNumber.slice(0, 1)}</span>
                    {
                        firstThree.slice(1).map((number) => (
                            <span key={number} className={`${currentPage == number ? 'activeNumber' : ''}`}>{number}</span>
                        ))
                    }

                </div>
                <span className='second_dots'>...</span>

                <div className='second_pageNumber'>

                    {
                        lastThree.map((number) => (
                            <span key={number} className={`${currentPage == number ? 'activeNumber' : ''}`}>{number}</span>
                        ))
                    }
                </div>
                <button className='paginate_btn' onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}><IconRight /></button>

            </div>


        </div>

    )
};
export default Paginate