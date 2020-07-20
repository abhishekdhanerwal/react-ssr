import React, { useState, useEffect } from 'react';
import HttpRequest from '../utils/HttpRequest';
import PropTypes from 'prop-types';
import Row from '../components/Rows';
import Button from '../components/Button';
import Chart from '../components/Chart';
import {Helmet} from 'react-helmet';

function Home(props) {

    const [dataList, setDataList] = useState([]);
    const [currentPage, setCurrentPage] = useState();
    const [graphData, setGraphData] = useState({});

    const checkSetData = (data, isOnInit) => {
        let tempGraphData = [];
        let tempList = [];
        data.hits.forEach(element => {
            if (localStorage.getItem(element.objectID) && localStorage.getItem(element.objectID) !== 'hide') {
                element.num_comments = localStorage.getItem(element.objectID);
                tempGraphData.push({ x: element.objectID, y: element.points });
                tempList.push(element);
            }
            else if (!localStorage.getItem(element.objectID)) {
                tempGraphData.push({ x: element.objectID, y: element.points });
                tempList.push(element);
            }
        });
        setDataList(tempList);
        setGraphData(tempGraphData);
        if (isOnInit)
            setCurrentPage(data.page);
    }

    useEffect(() => {
        if (!dataList.length) {
            setTimeout(() => {
                if (window.__ROUTE_DATA__) {
                    checkSetData(window.__ROUTE_DATA__, true);
                    delete window.__ROUTE_DATA__;
                }
            }, 0);
        } else {
            HttpRequest(currentPage).then((response) => {
                checkSetData(response);
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [currentPage]);

    const handlePageChange = (flag) => {
        let currentPagePointer = currentPage;
        if (flag) {
            currentPagePointer++;
        } else {
            currentPagePointer--;
        }
        setCurrentPage(currentPagePointer);
        props.history.push(`/${currentPagePointer}`)
    }

    const handleRowEvent = (data, isHide) => {
        let tempDataList = [].concat(dataList);
        let row;
        if (isHide) {
            tempDataList.splice(tempDataList.findIndex((element) => element.objectID === data.objectID), 1);
        } else {
            row = tempDataList.find((element) => element.objectID === data.objectID);
            row.num_comments++;
        }
        localStorage.setItem(data.objectID, isHide ? 'hide' : row.num_comments);
        setDataList(tempDataList);
    };

    const head = () => {
        return (
            <Helmet>
                <title>{`List: Page-${currentPage ? currentPage : 0}`}</title>
                <meta property="og:title" content={`List: Page-${currentPage ? currentPage :  0}`} />
                <meta property="og:type" content="list" />
                <meta property="og:description" content={`List: Page-${currentPage ? currentPage :  0}`} ></meta>
            </Helmet>
        )
    }

    return (
        <React.Fragment>
            {head()}
            <header className="row">
                <nav id="#heading-nav">
                    <Row isHeading data={[
                        { label: "Comments", grid: "1" },
                        { label: "Vote Counts", grid: "1" },
                        { label: "UpVote", grid: "1" },
                        { label: "News Details", grid: "9" }
                    ]} />
                </nav>
            </header>
            <main id="#main-content">
                <section id="#data-list">
                    {dataList.map((elem, index) => {
                        return (
                            <Row key={index} index={index} elem={elem} handleUpVote={handleRowEvent} hideData={handleRowEvent} />
                        )
                    })
                    }
                </section>
                <article id="#btns-panel" className="row">
                    <div className="right">
                        {currentPage === 0 ? 'Previous' : <Button handlePageChange={handlePageChange} label="Previous" flag={false} />}
                        |
                    {currentPage === 49 ? 'Next' : <Button handlePageChange={handlePageChange} label="Next" flag={true} />}
                    </div>
                </article>
            </main>
            <footer style={{ marginBottom: '15px' }}>
                {Object.entries(graphData).length ?
                    <Chart graphData={graphData} />
                    : null}
            </footer>
        </React.Fragment>
    );
}

Home.propTypes = {
    history: PropTypes.object
}

function loadData(id) {
    return HttpRequest(id);
}

export { loadData };
export default Home;