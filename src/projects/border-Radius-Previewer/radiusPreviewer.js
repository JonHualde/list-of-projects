import React, { Component } from "react";
import "./radiusPreviewer.scss";

class RadiusPreviewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bordertopleftradius: 0,
      bordertoprightradius: 0,
      borderbottomleftradius: 0,
      borderbottomrightradius: 0,
      alert: false,
    };
  }

  changeState = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) {
      this.setState({ [e.target.name]: 0, alert: false }, () => {
        console.log(this.state);
      });
    } else if (value > 100) {
      this.setState({ alert: true }, () => {
        console.log("maximum value reached");
      });
      return;
    } else {
      this.setState({ [e.target.name]: value, alert: false }, () => {
        console.log(this.state);
      });
    }
  };

  changeValues = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) {
      this.setState(
        {
          bordertopleftradius: 0,
          bordertoprightradius: 0,
          borderbottomleftradius: 0,
          borderbottomrightradius: 0,
          alert: false,
        },
        () => {
          console.log(this.state);
        }
      );
    } else if (value > 100) {
      this.setState({ alert: true }, () => {
        console.log("maximum value reached");
      });
      return;
    } else {
      this.setState(
        {
          bordertopleftradius: value,
          bordertoprightradius: value,
          borderbottomleftradius: value,
          borderbottomrightradius: value,
          alert: false,
        },
        () => {
          console.log(this.state);
        }
      );
    }
  };

  render() {
    const {
      bordertopleftradius,
      bordertoprightradius,
      borderbottomleftradius,
      borderbottomrightradius,
      alert,
    } = this.state;
    return (
      <div className="previewer_container">
      <h1>Live border radius preview </h1>
        <div className="code-preview-container">
          {/* Displayed code */}
          <div className="values">
            <label htmlFor="bordertopleftradius">border-top-left-radius</label>
            <input
              type="range"
              value={bordertopleftradius}
              name="bordertopleftradius"
              onChange={(e) => this.changeState(e)}
            ></input>

            <label htmlFor="bordertoprightradius">
              border-top-right-radius
            </label>
            <input
              type="range"
              name="bordertoprightradius"
              value={bordertoprightradius}
              onChange={(e) => this.changeState(e)}
            ></input>

            <label htmlFor="borderbottomleftradius">
              border-bottom-left-radius
            </label>
            <input
              type="range"
              name="borderbottomleftradius"
              value={borderbottomleftradius}
              onChange={(e) => this.changeState(e)}
            ></input>

            <label htmlFor="borderbottomrightradius">
              border-bottom-right-radius
            </label>
            <input
              type="range"
              name="borderbottomrightradius"
              value={borderbottomrightradius}
              onChange={(e) => this.changeState(e)}
            ></input>

            <label htmlFor="setValues">Set values</label>
            <input
              type="number"
              name="setValues"
              onInput={(e) => this.changeValues(e)}
            ></input>
            {alert ? <p>Maximum value is 100</p> : null}
          </div>
          <div className="valuesToCopy">
            <div className="clipboard">
              <span>border-top-left-radius : {bordertopleftradius}px</span>
              <span>border-top-right-radius : {bordertoprightradius}px</span>
              <span>
                border-bottom-left-radius : {borderbottomrightradius}
                px
              </span>
              <span>
                border-bottom-right-radius : {borderbottomleftradius}
                px
              </span>
            </div>
          </div>
        </div>

        <div className="form-preview-container">
          <div
            className="live-border"
            style={{
              borderTopLeftRadius: `${bordertopleftradius}px`,
              borderTopRightRadius: `${bordertoprightradius}px`,
              borderBottomLeftRadius: `${borderbottomleftradius}px`,
              borderBottomRightRadius: `${borderbottomrightradius}px`,
            }}
          >
            Live Border-Radius
          </div>
        </div>
      </div>
    );
  }
}

export default RadiusPreviewer;
