import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNum, subNum } from "./store/feature/count";

export class Count extends PureComponent {
  render() {
    const { count } = this.props;
    return (
      <div>
        <button onClick={(e) => this.props.addNum(2)}>+2</button>
        <button onClick={(e) => this.props.subNum(1)}>-1</button>
        <h1>{count}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNum(num) {
      dispatch(addNum(num));
    },
    subNum(num) {
      dispatch(subNum(num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
