import React, { Component } from "react";
import Tour from "../Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

export default class index extends Component {
  state = {
    tours: tourData,
  };

  removeTour = (id) => {
    const tours = this.state.tours;
    const sortedTours = tours.filter((item) => item.id !== id);
    this.setState({
      tours: sortedTours,
    });
  };
  render() {
    const { tours } = this.state;
    return (
      <div className="tour-list">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </div>
    );
  }
}
