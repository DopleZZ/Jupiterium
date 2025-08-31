import React, { useState, useEffect } from "react";
import ArticleElement from "../ArticleElement/ArticleElement";
import ModalView from "../ModalView/ModalView";
import './ContentTab.css';

export default function ContentTab({ post, userFilter, activeTab, search }) {
    const [visibleCount, setVisibleCount] = useState(10);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState({ title: '', body: '' });

    useEffect(() => {
        setVisibleCount(10);
    }, [userFilter, activeTab]);

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 10);
    };

    const handleTileClick = (item) => {
        setModalData({ title: item.title, body: item.body });
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    let filteredPosts = post || [];
    const renderPosts = () => {
        let postsToShow = filteredPosts;
        if (userFilter) {
            postsToShow = postsToShow.filter(item => item.userId === userFilter);
        } else {
            postsToShow = postsToShow.slice(0, visibleCount);
        }
        if (search) {
            postsToShow = postsToShow.filter(item =>
                item.title.toLowerCase().includes(search.toLowerCase())
            );
        }
        return postsToShow.map((item) => (
            <div key={item.id} onClick={() => handleTileClick(item)} style={{cursor: 'pointer'}}>
                <ArticleElement title={item.title} body={item.body} userFilter={userFilter} />
            </div>
        ));
    };

    return (
        <>
            <div className="content-tab">
                {renderPosts()}
                {!userFilter && filteredPosts.length > visibleCount && (
                    <button className="show-more-btn" onClick={handleShowMore}>
                        Показать ещё
                    </button>
                )}
            </div>
            <ModalView open={modalOpen} onClose={handleCloseModal} title={modalData.title} body={modalData.body} />
        </>
    );
}
