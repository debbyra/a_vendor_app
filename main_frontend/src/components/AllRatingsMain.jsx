import Ratings from "./Ratings";

const AllRatingsMain = () => {
    return (
      <div className="all-ratings-main">
        <h1>All Ratings</h1>
        <div className="user-ratings">
          <div>
            <Ratings username="Lorem" value="5" comment="Lorem ipsum dolor" />
          </div>
          <div>
            <Ratings username="Lorem" value="4" comment="Lorem ipsum dolor" />
          </div>
          <div>
            <Ratings username="Lorem" value="4" comment="Lorem ipsum dolor" />
          </div>
          <div>
            <Ratings username="Lorem" value="1" comment="Lorem ipsum dolor" />
          </div>
          <div>
            <Ratings username="Lorem" value="2" comment="Lorem ipsum dolor" />
          </div>
          <div>
            <Ratings username="Lorem" value="3" comment="Lorem ipsum dolor" />
          </div>
        </div>
      </div>
    );
}

export default AllRatingsMain;