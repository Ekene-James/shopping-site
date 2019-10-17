import React, { Component } from "react";
import { connect } from "react-redux";
import "./various-categories.scss";

import {
  selectShopdata,
  selectIsLoading
} from "../../redux/utils/dataReselectFunc";
import CategoryItems from "../../components/category-items/CategoryItems";
import { getShopdata } from "../../redux/actions/itemsAction";
import Spinner from "../spinner/Spinner";

class VariousCategories extends Component {
  componentDidMount() {
    const { data } = this.props;
    if (data.length === 0) {
      this.props.getShopdata();
    }
    return;
  }

  render() {
    const { data } = this.props;
    //const arrObj = Object.keys(data).map(i => data[i]);
    if (data.length === 0) {
      return <Spinner />;
    }
    return (
      <div className="shop-page">
        {data.map(data => (
          <CategoryItems key={data.id} data={data} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  data: selectShopdata(state)
  // isLoading: selectIsLoading(state)
});

export default connect(
  mapStateToProps,
  { getShopdata }
)(VariousCategories);
