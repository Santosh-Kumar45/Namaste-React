 //filter code part
 
 <div className="filter">
                <button className="filter-btn" onClick={() => {
                    //filter logic here
                    listOfRestaurants=listOfRestaurants.filter(
                        (res)=>res.card.card.info.avgRating>4                      
                    );
                    console.log(listOfRestaurants);
                }} 
                >
                    Top Rated Restaurants
                </button>
            </div>



//main container who has contain cards

              <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />
                ))}

            </div>