import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchMultidata } from "./store/feature/home";

export class Home extends PureComponent {
  render() {
    const { banners, recommends } = this.props;
    return (
      <>
        <div>home</div>
        <button onClick={(e) => this.props.fetchData()}>fetch data</button>
        <ul>
          {banners.map((item) => {
            return <li key={item.title}>{item.title}</li>;
          })}
        </ul>
        <ul>
          {recommends.map((item) => {
            return <li key={item.title}>{item.title}</li>;
          })}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    banners: state.home.banners,
    recommends: state.home.recommends,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData() {
      dispatch(fetchMultidata({ name: "zs", age: 18 }));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
